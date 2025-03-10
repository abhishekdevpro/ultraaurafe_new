"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { calculateDiscountedPrice, getAuthDetails, createDebouncedFunction } from "../utils/form-utils"

const initialCourseData = {
  course_title: "",
  course_category_name: [],
  course_level_name: [],
  course_description: "",
  course_banner_image: null,
  course_intro_video: null,
  requirements: "",
  course_price: 0,
  after_discount_price: 0,
  coupon_code: "",
  course_language_name: "",
  discount_percent: 0,
  learning_objectives: "",
  target_audience: "",
  time_spent_on_course: "",
}

export const useCourseForm = () => {
  const [courseData, setCourseData] = useState(initialCourseData)
  const [errors, setErrors] = useState({})
  const [fileErrors, setFileErrors] = useState({
    courseBannerImage: "",
    courseIntroVideo: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [categoryOptions, setCategoryOptions] = useState([])
  const [levelOptions, setLevelOptions] = useState([])
  const navigate = useNavigate()
  const { token, role } = getAuthDetails()

  // Update discounted price when price or discount changes
  useEffect(() => {
    if (courseData.course_price && courseData.discount_percent) {
      const discountedPrice = calculateDiscountedPrice(courseData.course_price, courseData.discount_percent)
      setCourseData((prevData) => ({
        ...prevData,
        after_discount_price: discountedPrice,
      }))
    }
  }, [courseData.course_price, courseData.discount_percent])

  // Fetch categories
  useEffect(() => {
    axios
      .get("https://api.novajobs.us/api/trainers/course-categories", {
        headers: { Authorization: token },
      })
      .then((response) => {
        const categories = response.data.data.map((category) => ({
          label: category.name,
          value: category.id,
        }))
        setCategoryOptions(categories)
      })
      .catch((error) => {
        console.error("Error fetching categories:", error)
      })
  }, [token])

  // Fetch levels
  useEffect(() => {
    axios
      .get("https://api.novajobs.us/api/trainers/course-level", {
        headers: { Authorization: token },
      })
      .then((response) => {
        const levels = response.data.data.map((level) => ({
          label: level.name,
          value: level.id,
        }))
        setLevelOptions(levels)
      })
      .catch((error) => {
        console.error("Error fetching levels:", error)
      })
  }, [token])

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setCourseData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  // Handle select changes
  const handleSelectChange = (name) => (selectedOption) => {
    if (name === "course_language_name") {
      // Handle single selection for language
      if (selectedOption) {
        setCourseData((prevData) => ({
          ...prevData,
          course_language_name: selectedOption.value,
        }))
      } else {
        setCourseData((prevData) => ({
          ...prevData,
          course_language_name: "",
        }))
      }
    } else {
      // Handle multi-selection for other fields
      if (selectedOption && selectedOption.length > 0) {
        const selectedLabels = selectedOption.map((option) => option.label)
        const selectedValues = selectedOption.map((option) => option.value)

        setCourseData((prevData) => ({
          ...prevData,
          [`${name}_names`]: selectedLabels,
          [`${name}_ids`]: selectedValues,
        }))
      } else {
        setCourseData((prevData) => ({
          ...prevData,
          [`${name}_names`]: [],
          [`${name}_ids`]: [],
        }))
      }
    }
  }

  // Handle editor changes
  const handleQuillChange = (value) => {
    setCourseData((prevData) => ({
      ...prevData,
      course_description: value,
    }))
  }

  // Handle file changes
  const handleFileChange = (e) => {
    const { name, files } = e.target
    const file = files[0]

    if (name === "course_banner_image" && file) {
      if (!["image/jpeg", "image/png"].includes(file.type)) {
        setFileErrors((prevErrors) => ({
          ...prevErrors,
          courseBannerImage: "Invalid file type. Only JPEG and PNG are allowed.",
        }))
        toast.error("Invalid file type. Only JPEG and PNG are allowed.")
        return
      } else {
        setFileErrors((prevErrors) => ({ ...prevErrors, courseBannerImage: "" }))
      }
    }

    if (name === "course_intro_video" && file) {
      if (file.type !== "video/mp4") {
        setFileErrors((prevErrors) => ({
          ...prevErrors,
          courseIntroVideo: "Invalid file type. Only MP4 is allowed.",
        }))
        toast.error("Invalid file type. Only MP4 is allowed.")
        return
      } else {
        setFileErrors((prevErrors) => ({ ...prevErrors, courseIntroVideo: "" }))
      }
    }

    setCourseData((prevData) => ({
      ...prevData,
      [name]: file || "",
    }))
  }

  // Save course
  const saveCourse = async () => {
    setIsLoading(true)
    try {
      const formData = new FormData()

      // Append courseData to formData
      for (const key in courseData) {
        if (key === "course_banner_image" || key === "course_intro_video") {
          if (courseData[key] instanceof File) {
            formData.append(key, courseData[key], courseData[key]?.name)
          }
        } else {
          formData.append(key, courseData[key])
        }
      }

      const response = await axios.post("https://api.novajobs.us/api/trainers/create-course", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: token,
        },
      })

      console.log("Course saved successfully:", response.data)
      toast.success("Course created successfully!")
      setTimeout(() => {
        navigate(`/${role}/${role}-dashboard`)
      }, 2000)
    } catch (error) {
      console.error("Error details:", error.response ? error.response.data : error.message)
      toast.error("Failed to create course. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  // Debounced save function
  const handleSave = createDebouncedFunction(saveCourse, 3000)

  // Validate form
  const validateForm = (tab) => {
    const basicFields = [
      "course_title",
      "course_category_name",
      "course_level_name",
      "course_description",
      "course_language_name",
      "learning_objectives",
      "target_audience",
      "time_spent_on_course",
    ]

    const fieldsToValidate = tab === "basic" ? basicFields : []
    let isValid = true
    const newErrors = {}

    fieldsToValidate.forEach((field) => {
      if (!courseData[field]) {
        newErrors[field] = "This field is required"
        isValid = false
      }
    })

    setErrors(newErrors)
    return isValid
  }

  return {
    courseData,
    errors,
    fileErrors,
    isLoading,
    categoryOptions,
    levelOptions,
    handleInputChange,
    handleSelectChange,
    handleQuillChange,
    handleFileChange,
    handleSave,
    validateForm,
    token,
    role,
  }
}


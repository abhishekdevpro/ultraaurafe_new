"use client"

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import Footer from "../../../footer"
import CourseHeader from "../header"
import { useSelector } from "react-redux"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { debounce } from "lodash"

// Import components
import CoursePageHeader from "./components/CoursePageHeader"
import ProgressTabs from "./components/ProgressBar"
import BasicInfoTab from "./components/BasicInfoForm"
import MediaTab from "./components/MediaForm"
import SettingsTab from "./components/SettingForm"
import { fetchCourseData, fetchCategoryOptions, fetchLevelOptions } from "./Services/api"

const EditCourse2 = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const mobileSidebar = useSelector((state) => state.sidebarSlice.expandMenu)
  const [activeTab, setActiveTab] = useState("basic")
  const [courseData, setCourseData] = useState({
    course_title: "",
    course_category_id: "",
    course_category_name: "",
    course_level_id: "",
    course_level_name: "",
    course_description: "",
    course_banner_image: "",
    course_intro_video: null,
    youtube_url: "",
    requirements: "",
    course_price: "",
    after_discount_price: "",
    coupon_code: "",
    course_language: "",
    discount_percent: "",
    learning_objectives: "",
    target_audience: "",
    time_spent_on_course: "",
  })
  const [categoryOptions, setCategoryOptions] = useState([])
  const [levelOptions, setLevelOptions] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // Get token and determine user type
  const token =
    localStorage.getItem("trainerToken") || localStorage.getItem("vendorToken") || localStorage.getItem("adminToken")
  let userType
  if (localStorage.getItem("trainerToken")) {
    userType = "instructor"
  } else if (localStorage.getItem("vendorToken")) {
    userType = "vendor"
  } else if (localStorage.getItem("adminToken")) {
    userType = "admin"
  }

  // Load data on component mount
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true)
      try {
        const [courseResult, categoriesResult, levelsResult] = await Promise.all([
          fetchCourseData(id, token),
          fetchCategoryOptions(token),
          fetchLevelOptions(token),
        ])

        setCourseData(courseResult)
        setCategoryOptions(categoriesResult)
        setLevelOptions(levelsResult)
      } catch (error) {
        console.error("Error loading data:", error)
        toast.error("Error loading data. Please try again.")
        navigate(`/${userType}/${userType}-dashboard`)
      } finally {
        setIsLoading(false)
      }
    }

    loadData()
  }, [id, token, navigate, userType])

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setCourseData((prevState) => ({ ...prevState, [name]: value }))
  }

  // Handle select changes
  const handleSelectChange = (name) => (selectedOption) => {
    setCourseData((prevState) => ({ ...prevState, [name]: selectedOption.value }))
  }

  // Handle file changes
  // const handleFileChange = (e) => {
  //   const file = e.target.files[0]
  //   setCourseData((prevState) => ({ ...prevState, [e.target.name]: file }))
  // }
  const handleFileChange = (e) => {
    const { name, type, files, value } = e.target
    
    // If it's a file input
    if (type === 'file' && files && files.length > 0) {
      setCourseData((prevState) => ({ ...prevState, [name]: files[0] }))
    } 
    // If it's a text input (for YouTube URL)
    else if (type === 'text' || !type) {
      setCourseData((prevState) => ({ ...prevState, [name]: value }))
    }
  }

  // Handle rich text editor changes
  const handleQuillChange = (name) => (content) => {
    setCourseData((prevState) => ({ ...prevState, [name]: content }))
  }

  // Save course data
  const handleSave = debounce(async () => {
    try {
      const formData = new FormData()
      for (const key in courseData) {
        if (courseData[key] !== undefined && courseData[key] !== null) {
          if (key === "course_banner_image" || key === "course_intro_video") {
            if (courseData[key] instanceof File) {
              formData.append(key, courseData[key], courseData[key]?.name)
            }
          } else {
            formData.append(key, courseData[key])
          }
        }
      }

      const response = await axios.patch(`https://api.novajobs.us/api/trainers/update-course/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `${token}`,
        },
      })
      console.log("Course updated successfully:", response.data.data)
      toast.success("Course updated successfully!")
      navigate(`/${userType}/${userType}-dashboard`)
    } catch (error) {
      console.error("Error updating course:", error)
      toast.error("Error updating course. Please try again.")
    }
  }, 500)

  // Navigate to add section page
  const handleAddSection = () => {
    navigate(`/add-section/${id}`)
  }

  // Render the appropriate tab content
  const renderTabContent = () => {
    switch (activeTab) {
      case "basic":
        return (
          <BasicInfoTab
            courseData={courseData}
            categoryOptions={categoryOptions}
            levelOptions={levelOptions}
            mobileSidebar={mobileSidebar}
            handleInputChange={handleInputChange}
            handleSelectChange={handleSelectChange}
            handleQuillChange={handleQuillChange}
            onContinue={() => setActiveTab("media")}
          />
        )
      case "media":
        return (
          <MediaTab
            courseData={courseData}
            handleFileChange={handleFileChange}
            onPrevious={() => setActiveTab("basic")}
            onContinue={() => setActiveTab("settings")}
          />
        )
      case "settings":
        return (
          <SettingsTab
            courseData={courseData}
            handleInputChange={handleInputChange}
            handleQuillChange={handleQuillChange}
            onPrevious={() => setActiveTab("media")}
            onSave={handleSave}
          />
        )
      default:
        return null
    }
  }

  if (isLoading) {
    return (
      <div className="main-wrapper">
        <CourseHeader activeMenu={"EditCourse"} />
        <div className="page-content d-flex justify-content-center align-items-center" style={{ minHeight: "300px" }}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="main-wrapper">
      <CourseHeader activeMenu={"EditCourse"} />

      <section className="page-content course-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              <CoursePageHeader
                title="Edit Course"
                onAddSection={handleAddSection}
                onSave={handleSave}
                userType={userType}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="widget-set">
                  <ProgressTabs activeTab={activeTab} />

                  <div className="widget-content multistep-form">{renderTabContent()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default EditCourse2


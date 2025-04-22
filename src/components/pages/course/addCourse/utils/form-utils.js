import { toast } from "react-toastify"
import { debounce } from "lodash"

// File validation functions
export const validateFile = (file, type, setErrors, errorKey) => {
  if (!file) return true

  if (type === "image") {
    if (!["image/jpeg", "image/png"].includes(file.type)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [errorKey]: "Invalid file type. Only JPEG and PNG are allowed.",
      }))
      toast.error("Invalid file type. Only JPEG and PNG are allowed.")
      return false
    }
  } else if (type === "video") {
    if (file.type !== "video/mp4") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [errorKey]: "Invalid file type. Only MP4 is allowed.",
      }))
      toast.error("Invalid file type. Only MP4 is allowed.")
      return false
    }
  }

  setErrors((prevErrors) => ({ ...prevErrors, [errorKey]: "" }))
  return true
}

// Calculate discounted price
export const calculateDiscountedPrice = (price, discountPercent) => {
  if (!price || !discountPercent) return 0

  const numPrice = Number.parseFloat(price)
  const numDiscount = Number.parseFloat(discountPercent)
  const discountedPrice = numPrice - numPrice * (numDiscount / 100)
  return discountedPrice.toFixed(2)
}

// Get authentication token and role
export const getAuthDetails = () => {
  const trainerToken = localStorage.getItem("trainerToken")
  const vendorToken = localStorage.getItem("vendorToken")
  const adminToken = localStorage.getItem("adminToken")

  let token
  let role

  if (trainerToken) {
    token = trainerToken
    role = "instructor"
  } else if (vendorToken) {
    token = vendorToken
    role = "vendor"
  } else if (adminToken) {
    token = adminToken
    role = "admin"
  } else {
    throw new Error("No valid token found for authentication")
  }

  return { token, role }
}

// Create a debounced function
export const createDebouncedFunction = (func, delay = 1000) => {
  return debounce(func, delay)
}

// Form validation
export const validateFormFields = (data, fields) => {
  let isValid = true
  const newErrors = {}

  fields.forEach((field) => {
    if (!data[field]) {
      newErrors[field] = "This field is required"
      isValid = false
    }
  })

  return { isValid, errors: newErrors }
}


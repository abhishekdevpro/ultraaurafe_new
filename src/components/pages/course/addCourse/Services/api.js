import axios from "axios"

// Fetch course data
export const fetchCourseData = async (id, token) => {
  try {
    const response = await axios.get(`https://api.novajobs.us/api/trainers/courses/${id}`, {
      headers: {
        Authorization: `${token}`,
      },
    })
    return response.data.data
  } catch (error) {
    console.error("Error fetching course data:", error)
    throw error
  }
}

// Fetch category options
export const fetchCategoryOptions = async (token) => {
  try {
    const response = await axios.get("https://api.novajobs.us/api/trainers/course-categories", {
      headers: {
        Authorization: `${token}`,
      },
    })
    return response.data.data.map((category) => ({
      value: category.id,
      label: category.name,
    }))
  } catch (error) {
    console.error("Error fetching category options:", error)
    throw error
  }
}

// Fetch level options
export const fetchLevelOptions = async (token) => {
  try {
    const response = await axios.get("https://api.novajobs.us/api/trainers/course-level", {
      headers: {
        Authorization: `${token}`,
      },
    })
    return response.data.data.map((level) => ({
      value: level.id,
      label: level.name,
    }))
  } catch (error) {
    console.error("Error fetching level options:", error)
    throw error
  }
}


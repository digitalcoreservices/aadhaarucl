// Function to set the visit time when clicking login
export const setLoginTime = () => {
  if (typeof window !== "undefined") {
    localStorage.setItem("mahaekendraLoginTime", Date.now().toString())
  }
}

// Function to check if it's been more than 20 minutes since login
export const shouldRedirectToHome = () => {
  if (typeof window !== "undefined") {
    const loginTime = localStorage.getItem("mahaekendraLoginTime")

    if (loginTime) {
      const lastLogin = Number.parseInt(loginTime)
      const currentTime = Date.now()
      const twentyMinutes = 20 * 60 * 1000 // 20 minutes in milliseconds

      return currentTime - lastLogin > twentyMinutes
    }
  }

  return false
}

// Function to clear the login time
export const clearLoginTime = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("mahaekendraLoginTime")
  }
}


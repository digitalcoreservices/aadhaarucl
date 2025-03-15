"use client"

import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { shouldRedirectToHome, clearLoginTime } from "@/utils/redirect-utils"

export default function RedirectHandler() {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Check if we should redirect to home
    const checkRedirect = () => {
      if (shouldRedirectToHome()) {
        // Clear the login time
        clearLoginTime()

        // Redirect to homepage if not already there
        if (pathname !== "/") {
          router.push("/")
        }
      }
    }

    // Check immediately when component mounts
    checkRedirect()

    // Set up interval to check periodically
    const intervalId = setInterval(checkRedirect, 30000) // Check every 30 seconds

    return () => clearInterval(intervalId)
  }, [pathname, router])

  return null
}


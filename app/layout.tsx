import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import RedirectHandler from "@/components/redirect-handler"
import { ThemeProvider } from "@/components/theme-provider"
import { LoginModalProvider } from "@/contexts/LoginModalContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MahaEkendra - Government Services Made Easy",
  description: "Your one-stop solution for all government services and documentation needs",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light" style={{colorScheme: "light"}}>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <LoginModalProvider>
            <RedirectHandler />
            <Header />
            {children}
            <Footer />
          </LoginModalProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
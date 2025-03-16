"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import LoginButton from "@/components/login-button"
import { useLoginModal } from "@/contexts/LoginModalContext"

export default function Header() {
  const { setIsLoginModalOpen } = useLoginModal();
  
  // Function to close modal when navigation links are clicked
  const handleNavClick = () => {
    setIsLoginModalOpen(false);
  };
  
  return (
    <header className="w-full border-b bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" onClick={handleNavClick}>
            <div className="font-bold text-2xl text-blue-700">MahaEkendra</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="font-medium hover:text-blue-700 transition-colors" onClick={handleNavClick}>
              Home
            </Link>
            <Link href="/services" className="font-medium hover:text-blue-700 transition-colors" onClick={handleNavClick}>
              Services
            </Link>
            <Link href="/about" className="font-medium hover:text-blue-700 transition-colors" onClick={handleNavClick}>
              About Us
            </Link>
            <Link href="/contact" className="font-medium hover:text-blue-700 transition-colors" onClick={handleNavClick}>
              Contact
            </Link>
          </nav>

          {/* Login Button */}
          <div className="hidden md:block">
            <LoginButton />
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6 mt-8">
                <Link href="/" className="font-medium hover:text-blue-700 transition-colors" onClick={handleNavClick}>
                  Home
                </Link>
                <Link href="/services" className="font-medium hover:text-blue-700 transition-colors" onClick={handleNavClick}>
                  Services
                </Link>
                <Link href="/about" className="font-medium hover:text-blue-700 transition-colors" onClick={handleNavClick}>
                  About Us
                </Link>
                <Link href="/contact" className="font-medium hover:text-blue-700 transition-colors" onClick={handleNavClick}>
                  Contact
                </Link>
                <LoginButton className="mt-4 bg-blue-700 hover:bg-blue-800 transition-colors text-lg px-8 py-6 h-auto" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}


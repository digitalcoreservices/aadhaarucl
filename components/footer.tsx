"use client"

import type React from "react"
import { Facebook, Instagram, Twitter, Mail, MapPin } from "lucide-react"
import LoginButton from "@/components/login-button"

export default function Footer() {
  // Function to prevent default link behavior
  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault()
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">MahaEkendra</h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner for all government documentation and registration services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white" onClick={handleLinkClick}>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white" onClick={handleLinkClick}>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white" onClick={handleLinkClick}>
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-6">
              <LoginButton className="bg-blue-600 hover:bg-blue-700 transition-colors text-lg px-8 py-5 h-auto" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white" onClick={handleLinkClick}>
                  PAN Card
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white" onClick={handleLinkClick}>
                  Shop Act License
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white" onClick={handleLinkClick}>
                  Udyog Aadhar
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white" onClick={handleLinkClick}>
                  GST Registration
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white" onClick={handleLinkClick}>
                  MSME Registration
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white" onClick={handleLinkClick}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white" onClick={handleLinkClick}>
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white" onClick={handleLinkClick}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white" onClick={handleLinkClick}>
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white" onClick={handleLinkClick}>
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-gray-400" />
                <span className="text-gray-300">123 Main Street, Mumbai, Maharashtra, India - 400001</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-gray-400" />
                <span className="text-gray-300">info@mahaekendra.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} MahaEkendra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


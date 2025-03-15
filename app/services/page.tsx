"use client"

import type React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import LoginButton from "@/components/login-button"

export default function ServicesPage() {
  const services = [
    {
      id: "pan-card",
      title: "PAN Card",
      description: "Easily apply for or update your PAN card with our quick, hassle-free service.",
      icon: "/placeholder.svg?height=60&width=60&text=PAN&bg=orange",
      bgColor: "bg-orange-100",
    },
    {
      id: "shop-act",
      title: "Shop Act License",
      description: "Get your Shop Act License efficiently through our streamlined online process.",
      icon: "/placeholder.svg?height=60&width=60&text=SHOP&bg=blue",
      bgColor: "bg-blue-100",
    },
    {
      id: "udyog-aadhar",
      title: "Udyog Aadhar",
      description: "Register your business and obtain Udyog Aadhar in just a few clicks.",
      icon: "/placeholder.svg?height=60&width=60&text=UA&bg=green",
      bgColor: "bg-green-100",
    },
    {
      id: "gst",
      title: "GST Registration",
      description: "Complete your GST registration quickly with our expert assistance.",
      icon: "/placeholder.svg?height=60&width=60&text=GST&bg=purple",
      bgColor: "bg-purple-100",
    },
    {
      id: "msme",
      title: "MSME Registration",
      description: "Register your MSME business and avail government benefits easily.",
      icon: "/placeholder.svg?height=60&width=60&text=MSME&bg=red",
      bgColor: "bg-red-100",
    },
    {
      id: "food-license",
      title: "Food License",
      description: "Obtain your FSSAI food license with minimal documentation and effort.",
      icon: "/placeholder.svg?height=60&width=60&text=FOOD&bg=teal",
      bgColor: "bg-teal-100",
    },
  ]

  // Function to prevent default button click behavior
  const handleLearnMoreClick = (e: React.MouseEvent) => {
    e.preventDefault()
  }

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-700 to-indigo-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We offer a wide range of government documentation and registration services
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="w-full py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl"
              >
                <div className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className={`rounded-full ${service.bgColor} p-4`}>
                      <Image
                        src={service.icon || "/placeholder.svg"}
                        alt={`${service.title} Icon`}
                        width={60}
                        height={60}
                        className="h-15 w-15"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-center mb-6">{service.description}</p>
                  <div className="flex justify-center">
                    <Button onClick={handleLearnMoreClick} variant="outline" className="group">
                      Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Process</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a simple and efficient process to ensure a smooth experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center transform transition-transform hover:scale-105 hover:shadow-xl">
              <div className="rounded-full bg-blue-100 text-blue-700 w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Submit Application</h3>
              <p className="text-gray-600">Fill out the required information in our simple online form</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center transform transition-transform hover:scale-105 hover:shadow-xl">
              <div className="rounded-full bg-blue-100 text-blue-700 w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Document Verification</h3>
              <p className="text-gray-600">Our experts verify your documents for accuracy and completeness</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center transform transition-transform hover:scale-105 hover:shadow-xl">
              <div className="rounded-full bg-blue-100 text-blue-700 w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Application Processing</h3>
              <p className="text-gray-600">We process your application with the relevant government departments</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center transform transition-transform hover:scale-105 hover:shadow-xl">
              <div className="rounded-full bg-blue-100 text-blue-700 w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Delivery</h3>
              <p className="text-gray-600">Receive your documents digitally or physically as per your preference</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-blue-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Our team of experts is ready to assist you with all your documentation needs
          </p>
          <LoginButton className="bg-white text-blue-700 hover:bg-blue-50 transition-colors font-semibold px-10 py-7 text-xl rounded-full h-auto">
            Login Now
          </LoginButton>
        </div>
      </section>
    </main>
  )
}


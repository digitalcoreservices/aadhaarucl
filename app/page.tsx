"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import LoginButton from "@/components/login-button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-700 to-indigo-800 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Your One-Stop Solution for Government Services
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-xl">
                We simplify the process of obtaining essential government documents and registrations
              </p>
              <LoginButton className="bg-white text-blue-700 hover:bg-blue-50 transition-colors font-semibold px-10 py-7 text-xl rounded-full h-auto" />
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute -inset-1 bg-white/20 rounded-lg blur-xl"></div>
                <Image
                  src="/placeholder.svg?height=400&width=500&text=Government Services&bg=blue"
                  alt="Government Services"
                  width={500}
                  height={400}
                  className="relative rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Services</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of government documentation services to make your life easier
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* PAN Card Service */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
              <div className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="rounded-full bg-blue-100 p-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60&text=PAN&bg=orange"
                      alt="PAN Card Icon"
                      width={60}
                      height={60}
                      className="h-15 w-15"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">PAN Card</h3>
                <p className="text-gray-600 text-center mb-6">
                  Easily apply for or update your PAN card with our quick, hassle-free service.
                </p>
                <div className="flex justify-center">
                  <Button variant="outline" className="group">
                    Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Shop Act License Service */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
              <div className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="rounded-full bg-blue-100 p-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60&text=SHOP&bg=blue"
                      alt="Shop Act License Icon"
                      width={60}
                      height={60}
                      className="h-15 w-15"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Shop Act License</h3>
                <p className="text-gray-600 text-center mb-6">
                  Get your Shop Act License efficiently through our streamlined online process.
                </p>
                <div className="flex justify-center">
                  <Button variant="outline" className="group">
                    Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Udyog Aadhar Service */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
              <div className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="rounded-full bg-blue-100 p-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60&text=UA&bg=green"
                      alt="Udyog Aadhar Icon"
                      width={60}
                      height={60}
                      className="h-15 w-15"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Udyog Aadhar</h3>
                <p className="text-gray-600 text-center mb-6">
                  Register your business and obtain Udyog Aadhar in just a few clicks.
                </p>
                <div className="flex justify-center">
                  <Button variant="outline" className="group">
                    Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="w-full bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">More Services</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our additional services designed to meet all your documentation needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Additional Service 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
              <div className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="rounded-full bg-purple-100 p-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60&text=GST&bg=purple"
                      alt="GST Registration Icon"
                      width={60}
                      height={60}
                      className="h-15 w-15"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">GST Registration</h3>
                <p className="text-gray-600 text-center mb-6">
                  Complete your GST registration quickly with our expert assistance.
                </p>
                <div className="flex justify-center">
                  <Button variant="outline" className="group">
                    Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Additional Service 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
              <div className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="rounded-full bg-red-100 p-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60&text=MSME&bg=red"
                      alt="MSME Registration Icon"
                      width={60}
                      height={60}
                      className="h-15 w-15"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">MSME Registration</h3>
                <p className="text-gray-600 text-center mb-6">
                  Register your MSME business and avail government benefits easily.
                </p>
                <div className="flex justify-center">
                  <Button variant="outline" className="group">
                    Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Additional Service 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
              <div className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="rounded-full bg-teal-100 p-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60&text=FOOD&bg=teal"
                      alt="Food License Icon"
                      width={60}
                      height={60}
                      className="h-15 w-15"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Food License</h3>
                <p className="text-gray-600 text-center mb-6">
                  Obtain your FSSAI food license with minimal documentation and effort.
                </p>
                <div className="flex justify-center">
                  <Button variant="outline" className="group">
                    Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Why Choose Us</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the best service experience for all your documentation needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center transform transition-transform hover:scale-105 hover:shadow-xl">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-700 text-2xl font-bold">100%</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Online Process</h3>
              <p className="text-gray-600">Complete your applications from the comfort of your home</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center transform transition-transform hover:scale-105 hover:shadow-xl">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-700 text-2xl font-bold">24/7</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Support</h3>
              <p className="text-gray-600">Our team is always available to assist you</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center transform transition-transform hover:scale-105 hover:shadow-xl">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-700 text-2xl font-bold">5000+</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Happy Customers</h3>
              <p className="text-gray-600">Join thousands of satisfied clients</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center transform transition-transform hover:scale-105 hover:shadow-xl">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-700 text-2xl font-bold">Fast</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Processing Time</h3>
              <p className="text-gray-600">Quick turnaround for all your applications</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-blue-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Access our services now and simplify your documentation process
          </p>
          <LoginButton className="bg-white text-blue-700 hover:bg-blue-50 transition-colors font-semibold px-10 py-7 text-xl rounded-full h-auto">
            Login Now
          </LoginButton>
        </div>
      </section>
    </main>
  )
}


import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-700 to-indigo-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We're here to help with all your documentation needs
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="w-full py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Your Name
                    </label>
                    <Input id="name" placeholder="Enter your name" className="rounded-lg" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <Input id="email" type="email" placeholder="Enter your email" className="rounded-lg" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <Input id="phone" placeholder="Enter your phone number" className="rounded-lg" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Enter subject" className="rounded-lg" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Enter your message" rows={5} className="rounded-lg" />
                </div>
                <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 transition-colors rounded-lg">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-8 text-gray-800">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">Our Location</h3>
                    <p className="text-gray-600 mt-1">123 Main Street, Mumbai, Maharashtra, India - 400001</p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">Phone Number</h3>
                    <p className="text-gray-600 mt-1">+91 1234567890</p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">Email Address</h3>
                    <p className="text-gray-600 mt-1">info@mahaekendra.com</p>
                    <p className="text-gray-600">support@mahaekendra.com</p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">Working Hours</h3>
                    <p className="text-gray-600 mt-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


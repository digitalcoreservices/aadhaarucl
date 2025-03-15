import Image from "next/image"
import { CheckCircle, Users, Award, Clock } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-700 to-indigo-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">About Us</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Learn more about MahaEkendra and our mission to simplify government services
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Who We Are</h2>
              <p className="text-gray-600 mb-4 text-lg">
                MahaEkendra is a leading provider of government documentation and registration services in India. We aim
                to simplify the complex processes involved in obtaining essential government documents and
                registrations, making them accessible to everyone.
              </p>
              <p className="text-gray-600 mb-4 text-lg">
                Founded in 2015, we have helped thousands of individuals and businesses navigate the bureaucratic
                processes with ease. Our team of experts is well-versed in the intricacies of various government
                procedures and ensures a smooth experience for all our clients.
              </p>
              <p className="text-gray-600 text-lg">
                At MahaEkendra, we believe in transparency, efficiency, and customer satisfaction. Our online platform
                allows you to apply for various services from the comfort of your home, saving you time and effort.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-1 bg-blue-200/50 rounded-lg blur-xl"></div>
                <Image
                  src="/placeholder.svg?height=400&width=500&text=About Us&bg=blue"
                  alt="About MahaEkendra"
                  width={500}
                  height={400}
                  className="relative rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To simplify access to government services by providing a seamless, efficient, and transparent platform
                that connects citizens with essential documentation and registration processes.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Make government services accessible to all</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Reduce paperwork and bureaucratic hurdles</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Provide expert guidance throughout the process</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Vision</h3>
              <p className="text-gray-600 mb-6">
                To become the most trusted and preferred platform for government services in India, known for our
                reliability, efficiency, and customer-centric approach.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Create a digital ecosystem for all government services</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Empower citizens through technology and information</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Set new standards for service delivery in the sector</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Impact</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We've made a significant difference in simplifying government services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-8 rounded-xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-blue-700 mb-2">5000+</div>
              <p className="text-gray-600">Happy Clients</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-blue-700 mb-2">98%</div>
              <p className="text-gray-600">Success Rate</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-blue-700 mb-2">7</div>
              <p className="text-gray-600">Years of Experience</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl">
              <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-blue-700 mb-2">10,000+</div>
              <p className="text-gray-600">Documents Processed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Team</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Meet the experts behind our exceptional service</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
              <Image
                src="/placeholder.svg?height=300&width=300&text=Rajesh&bg=blue"
                alt="Team Member"
                width={300}
                height={300}
                className="w-full aspect-square object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="font-semibold text-lg text-gray-800">Rajesh Sharma</h3>
                <p className="text-blue-600">Founder & CEO</p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
              <Image
                src="/placeholder.svg?height=300&width=300&text=Priya&bg=purple"
                alt="Team Member"
                width={300}
                height={300}
                className="w-full aspect-square object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="font-semibold text-lg text-gray-800">Priya Patel</h3>
                <p className="text-blue-600">Operations Manager</p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
              <Image
                src="/placeholder.svg?height=300&width=300&text=Amit&bg=green"
                alt="Team Member"
                width={300}
                height={300}
                className="w-full aspect-square object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="font-semibold text-lg text-gray-800">Amit Desai</h3>
                <p className="text-blue-600">Technical Lead</p>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
              <Image
                src="/placeholder.svg?height=300&width=300&text=Neha&bg=orange"
                alt="Team Member"
                width={300}
                height={300}
                className="w-full aspect-square object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="font-semibold text-lg text-gray-800">Neha Gupta</h3>
                <p className="text-blue-600">Customer Support Head</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { FaYoutube, FaLinkedin, FaGithub } from 'react-icons/fa'

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Your Name - Academic Profile</title>
        <meta name="description" content="Academic profile and research work" />
      </Head>

      {/* Navigation */}
      <nav className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold">ETH Zürich</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-blue-600 hover:text-blue-800">PEOPLE</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">MSC THESIS @ SRI</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">RESEARCH</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">PUBLICATIONS</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">BLOG</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">TEACHING</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">HIRING</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">CONTACT</a>
            </div>
            <div className="flex-shrink-0">
              <span className="text-xl">SRI LAB</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Profile Information */}
          <div className="md:col-span-2">
            <h1 className="text-4xl font-normal mb-4">Prof. Dr. Your Name</h1>
            <p className="text-gray-600 mb-8 uppercase">Professor</p>
            
            <div className="space-y-4 mb-8">
              <div>
                <span className="text-gray-600">Email:</span>
                <a href="mailto:your.email@university.edu" className="text-blue-600 ml-2 hover:underline">
                  your.email@university.edu
                </a>
              </div>
              <div>
                <span className="text-gray-600">Office:</span>
                <span className="ml-2">Your Office Location</span>
              </div>
            </div>

            <div className="prose max-w-none">
              <h2 className="text-xl font-semibold mb-4 uppercase">About Me</h2>
              <div className="space-y-4 text-gray-700">
                <p>My name is [Your Name] and I am originally from [Your City, Country] where I was born and grew up.</p>
                <p>I am a Professor of [Your Field] at [Your University] where I lead the [Your Lab Name].</p>
                <p>Prior to [Current Institution], I was a [Previous Position] at [Previous Institution] ([Years]).</p>
                <p>I obtained my PhD from [University] ([Years]).</p>
                <p>I obtained my [Previous Degree] from [University] ([Years]).</p>
                
                <p className="mt-4">You can find a short CV here: <a href="#" className="text-blue-600 hover:underline">CV</a>.</p>
                
                <p className="mt-4">My work spans [Your Research Description]. I have given a number of invited and keynote talks on these topics at various conferences and workshops.</p>
              </div>
            </div>
          </div>

          {/* Profile Picture */}
          <div>
            <div className="w-full aspect-[4/5] bg-gray-200">
              <Image
                src="/personal_website/profile.jpg"
                alt="Profile Picture"
                width={400}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home

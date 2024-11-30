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
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Image 
                src="/personal_website/logo.png"
                alt="University Logo" 
                width={120} 
                height={40}
                priority
              />
            </div>
            <div className="hidden md:block">
              <div className="flex space-x-8">
                <a href="#" className="text-gray-600 hover:text-gray-900">PEOPLE</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">RESEARCH</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">PUBLICATIONS</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">CONTACT</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Profile Information */}
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold mb-4">Prof. Dr. Your Name</h1>
            <p className="text-gray-600 mb-8">PROFESSOR</p>
            
            <div className="space-y-4 mb-8">
              <div>
                <span className="font-medium">Email:</span>
                <a href="mailto:your.email@university.edu" className="text-blue-600 ml-2">
                  your.email@university.edu
                </a>
              </div>
              <div>
                <span className="font-medium">Office:</span>
                <span className="ml-2">Your Office Location</span>
              </div>
            </div>

            <div className="prose max-w-none">
              <h2 className="text-xl font-bold mb-4">ABOUT ME</h2>
              <p>Your biographical information goes here...</p>
            </div>
          </div>

          {/* Profile Picture */}
          <div>
            <div className="w-[400px] h-[500px] bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Profile Picture Placeholder</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home

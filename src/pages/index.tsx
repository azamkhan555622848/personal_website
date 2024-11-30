import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { FaYoutube, FaLinkedin, FaGithub } from 'react-icons/fa'

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Prof. Dr. Your Name</title>
        <meta name="description" content="Academic profile and research work" />
      </Head>

      <header className="bg-[#f4f4f4] py-8 px-4 border-b-2 border-[#dddddd]">
        <div className="flex items-center justify-center gap-8 max-w-[800px] mx-auto">
          <div className="profile">
            <Image
              src="/personal_website/profile.jpg"
              alt="Profile Picture"
              width={120}
              height={120}
              className="rounded-full object-cover border-2 border-[#cccccc]"
              priority
            />
          </div>
          <div className="header-info text-left">
            <h1 className="text-[1.8rem] m-0">Prof. Dr. Your Name</h1>
            <h2 className="text-[1.2rem] text-[#666666] my-2">Professor</h2>
            <p>
              Email:{' '}
              <a 
                href="mailto:your.email@university.edu" 
                className="text-[#007acc] hover:underline"
              >
                your.email@university.edu
              </a>
            </p>
            <p>Office: Your Office Location</p>
          </div>
        </div>
      </header>

      <main className="px-4 py-8 max-w-[800px] mx-auto">
        <section className="mb-8">
          <h2 className="text-[1.5rem] mb-4">About Me</h2>
          <p className="text-justify">
            My name is [Your Name] and I am originally from [Your City, Country] where I was born and grew up.
            I am a Professor of [Your Field] at [Your University] where I lead the [Your Lab Name].
          </p>
          <p className="text-justify mt-4">
            Prior to [Current Institution], I was a [Previous Position] at [Previous Institution] ([Years]).
            I obtained my PhD from [University] ([Years]).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-[1.5rem] mb-4">Media and Links</h2>
          <p>
            <a href="#" className="text-[#007acc] hover:underline">Download CV</a>
          </p>
          <p>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-[#007acc] hover:underline">
              YouTube
            </a>
          </p>
        </section>
      </main>

      <footer className="text-center py-4 bg-[#f4f4f4] border-t-2 border-[#dddddd]">
        <p className="text-[0.9rem] text-[#666666]">
          © {new Date().getFullYear()} Prof. Dr. Your Name
        </p>
      </footer>
    </div>
  )
}

export default Home

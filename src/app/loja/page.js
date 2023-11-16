import React from 'react'
import ProjectsSection from '../components/ProjectsSection'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Shop() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar />
        <div className="container mx-auto px-12 py-4 mt-40 mb-16">
            <ProjectsSection />
        </div>

        <Footer />
    </main>
  )
}

import React, { useState, useEffect } from 'react'
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa"
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
    image: '/placeholder.svg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/ecommerce',
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates, team collaboration, and progress tracking.',
    image: '/placeholder.svg',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'Socket.io'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/taskapp',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description:
      'A responsive weather dashboard with location-based forecasts, interactive maps, and weather alerts.',
    image: '/placeholder.svg',
    technologies: ['Vue.js', 'Express', 'OpenWeather API', 'Chart.js'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/weather',
  },
]

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const pauseAndSetIndex = (newIndex) => {
    setIsAutoPlaying(false)
    setCurrentIndex(newIndex)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section className="py-20 bg-gray-900" >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4"><span className='text-orange-500'>Featured</span> Projects</h2>
          <p className="text-xl text-gray-300">Explore my latest work and creative solutions</p>
        </div>

        <div className="relative overflow-hidden rounded-2xl shadow-xl border border-white p-1">
          <div
            className="flex transition-transform duration-700"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project) => (
              <div
  key={project.id}
  className="min-w-full flex flex-col lg:flex-row bg-white/5 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden transition-all"
>

                <div className="w-full lg:w-1/2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-90"
                  />
                </div>
                <div className="w-full lg:w-1/2 p-8 lg:p-12 text-white flex flex-col justify-center gap-6">
                  <h3 className="text-3xl font-bold">{project.title}</h3>
                  <p className="text-lg text-gray-300">{project.description}</p>

                  <div>
                    <p className="text-sm text-gray-400 uppercase mb-2">Technologies Used</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                         className="px-3 py-1 text-sm rounded bg-white/10 text-white border border-orange-500 cursor-pointer hover:bg-white/20 transition"

                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-2">
                    <a
  href="#"
  className="flex gap-3 p-3 justify-center items-center text-white bg-orange-500 
             border-2 border-transparent rounded-md transition-all duration-300 
             hover:border-white hover:bg-orange-600 cursor-pointer"
>
                   <FaExternalLinkAlt className="w-4 h-4" />
                      Live Demo
                    
                    </a>
                   <a
  href="#"
  className="flex gap-3 justify-center items-center p-3 border border-transparent rounded-md 
             hover:border-2 hover:border-amber-500 transition-all duration-300 ease-in-out 
             text-white bg-[#142B37] hover:bg-[#1f3642]"
>
                    
                        <FaGithub className='w-4 h-4'/>
                      <span>Source Code</span>
                    
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => pauseAndSetIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentIndex ? 'bg-orange-500 scale-125' : 'bg-teal-600'
              }`}
            />
          ))}
        </div>

        {/* Status */}
        <p className="text-center text-sm text-gray-400 mt-4">
          {isAutoPlaying ? 'Auto-playing • Click to pause' : 'Paused • Resuming soon'}
        </p>
      </div>
    </section>
  )
}

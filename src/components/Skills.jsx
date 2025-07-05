import React from 'react'
import { FaHtml5, FaCss3Alt, FaGithub, FaJs, FaNodeJs, FaPython } from 'react-icons/fa'
import { SiC, SiCplusplus } from 'react-icons/si'

export default function SkillsSection() {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-600" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
    { name: 'Python', icon: <FaPython className="text-blue-400" /> },
    { name: 'C++', icon: <SiCplusplus className="text-blue-700" /> },
    { name: 'C', icon: <SiC className="text-cyan-400" />},
    { name: 'GitHub', icon: <FaGithub className="text-white dark:text-gray-300" /> },
  ]

  return (
    <section className="bg-gray-900 text-whitepy-20 px-6 py-3 " id="skills">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-white"><span className='text-orange-500'>Skills</span> & Technologies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 ">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group cursor-pointer flex flex-col items-center justify-center bg-[#142B37] dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-300 hover:-translate-y-2 hover:bg-[#1F2E3A] dark:hover:bg-gray-700 text-white"
            >
              <div className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </div>
              <p className="text-lg font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

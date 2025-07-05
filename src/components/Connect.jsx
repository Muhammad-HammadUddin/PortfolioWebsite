import React from "react"
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md"

export default function ConnectSection() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub className="w-5 h-5" />,
      url: "https://github.com/Muhammad-HammadUddin",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/muhammad-hammad-uddin-718207360/",
    },
    
    {
      name: "Instagram",
      icon: <FaInstagram className="w-5 h-5" />,
      url: "https://instagram.com/_hammaduddin",
    },
  ]

  const contactInfo = [
    {
      icon: <MdEmail className="w-5 h-5 text-orange-500" />,
      label: "hammaduddin083@gmail.com",
      href: "mailto:your.email@example.com",
    },
    {
      icon: <MdPhone className="w-5 h-5 text-orange-500" />,
      label: "03222978119",
     
    },
    {
      icon: <MdLocationOn className="w-5 h-5 text-orange-500" />,
      label: "Karachi, Pakistan",
      href: "#",
    },
  ]

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3"><span className="text-orange-500">Connect</span> with me</h2>
          <p className="text-gray-300 text-xl">Let's collaborate and bring your ideas to life</p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  {item.icon}
                  {item.href !== "#" ? (
                    <a
                      href={item.href}
                      className="text-white hover:text-orange-400 transition-colors"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-white">{item.label}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mb-8">
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-gray-600 rounded-lg 
                             flex items-center justify-center 
                             hover:border-orange-500 hover:bg-orange-500/10 
                             transition-all group"
                >
                  <div className="text-white group-hover:text-orange-400 transition-colors">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a
              href="mailto:your.email@example.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-medium rounded hover:bg-orange-600 transition-all"
            >
              <MdEmail className="w-5 h-5" />
              Send Message
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

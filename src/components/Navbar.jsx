import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [visible, setVisible] = useState(false)

  const links = [
    { name: 'Projects', path: '/projects' },
    { name: 'Education', path: '/education' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <div className="flex items-center justify-between px-4 py-4 font-medium relative bg-gray-900 h-16 " style={{maxHeight:"64px"}}>
      {/* Logo */}
      <NavLink  className="text-xl font-bold text-white">
        EduPortfolio
      </NavLink>

      {/* Center Links */}
      <div className="hidden sm:flex flex-1 justify-center">
        <ul className="flex gap-8 text-gray-300">
          {links.map((link) => (
            <NavLink
              key={link.name}
{/*               */}
              className="relative group text-sm font-medium"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}
        </ul>
      </div>

      {/* Hamburger Icon */}
      <button
        onClick={() => setVisible(!visible)}
        className="sm:hidden text-white text-xl"
      >
        ☰
      </button>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full  bg-gray-900 z-50 transition-all duration-300 ease-in-out shadow-lg ${
          visible ? 'w-3/4' : 'w-0'
        } overflow-hidden`}
      >
        <div className="p-6 flex flex-col gap-4 ">
          <button
            className="text-left text-white hover:text-orange-500"
            onClick={() => setVisible(false)}
          >
            ✕ Close
          </button>
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setVisible(false)}
              className="text-lg text-white hover:text-orange-500 border-b py-2 "
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar

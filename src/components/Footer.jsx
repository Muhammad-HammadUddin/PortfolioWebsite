import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-[#0f1f28] text-gray-300 py-6 px-4 flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left Side: Text */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Hammad. All rights reserved.</p>

       
        
      </div>
    </footer>
  )
}


import About from "./components/About.jsx"
import ConnectSection from "./components/Connect.jsx"
import Footer from "./components/Footer.jsx"
import HeroSection from "./components/HeroSection.jsx"
import Navbar from  "./components/Navbar.jsx"
import ProjectsSection from "./components/Project.jsx"
import SkillsSection from "./components/Skills.jsx"
export default function App() {
 

  return (
    
       <div>
     <Navbar/>
    <HeroSection/>
    <SkillsSection/>
    <About/>
    <ProjectsSection/>
    <ConnectSection/>
    <Footer/>

    </div>
   

    
  )
}



import { Code, Smartphone, Server } from "lucide-react"
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

export default function About() {

   const [ref, inView] = useInView({
    triggerOnce: true,     // Only run once
    threshold: 0.5          // Run when 50% visible
  })
  return (
    <div className="bg-gray-900 text-white p-8 md:p-12 lg:p-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-start ">
          {/* Left sidebar with services */}
          <div className="space-y-8">
            
            <div className="flex items-center gap-4">
              <div className="w-1 h-16 bg-orange-500 rounded-full"></div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-gray-300" />
                </div>
                <span className="text-lg font-medium">Website Development</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-1 h-16 bg-orange-500 rounded-full"></div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-gray-300" />
                </div>
                <span className="text-lg font-medium">App Development</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-1 h-16 bg-orange-500 rounded-full"></div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                  <Server className="w-6 h-6 text-gray-300" />
                </div>
                <span className="text-lg font-medium">Website Hosting</span>
              </div>
            </div>
          </div>

          {/* Right content area */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold"><span className='text-orange-500'>About</span> me</h1>

            <p className="text-gray-300 text-lg leading-relaxed">
            I’m a MERN Stack Developer and an undergraduate at FAST NUCES Karachi, passionate about turning complex ideas into real-world applications. I'm also actively exploring the field of Data Science to broaden my development skillset.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-8 pt-8" ref={ref}>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold">
                  {inView && <CountUp end={50} duration={2} />}<span className="text-orange-500">+</span>
                </div>
                <div className="text-gray-400 text-sm mt-2">
                  Completed
                  <br />
                  Projects
                </div>
              </div>

              
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold">
                  {inView && <CountUp end={2} duration={2} />}<span className="text-orange-500">+</span>
                </div>
                <div className="text-gray-400 text-sm mt-2">
                  Years of
                  <br />
                  experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



export default function HeroSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#142B37] via-[#0f1f28] to-[#142B37] flex items-center justify-center px-6 lg:px-12 relative overflow-hidden" 
    
    >
      
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl relative z-10">
        
        {/* Left: Text Content */}
        <div className="text-center lg:text-left space-y-6 lg:w-1/2">
          <div className="space-y-2">
            <h2 className="text-3xl lg:text-4xl text-white font-light ">
              Hello<span className="text-orange-500">.</span>
            </h2>

            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className="w-20 h-1 bg-orange-500"></div>
              <p className="text-2xl lg:text-3xl text-slate-300 font-light">I'm Hammad</p>
            </div>
          </div>

          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
            <span className='text-orange-500'>Mern</span> Stack Developer
          </h1>

             <div className='flex items-center gap-3 justify-center lg:justify-start'>

             
          <button className='text  border-2 p-4 px-5 text-white border-orange-500' >
               Got a project?
          </button>
           <button className='text  p-4 px-5 text-white bg-orange-500 rounded'  >
               My Resume
          </button>
          </div>
        </div>

        {/* Right: Image & Shapes */}
        <div className="relative mt-20 lg:mt-0 lg:w-1/2 flex justify-center sm:w-1/4">
          <div className="relative w-80 h-80 lg:w-96 lg:h-96">
            {/* Glowing Circles Around Image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border-8 border-orange-500/60 shadow-orange-500"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border-6 border-orange-400/50 shadow-orange-500"></div>

            {/* Glow Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-orange-500/5 blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full bg-orange-400/15 blur-2xl"></div>

            <div className="absolute inset-0 bg-orange-500/40 rounded-full blur-2xl scale-110"></div>
            <div className="absolute inset-0 bg-orange-400/20 rounded-full blur-3xl scale-125"></div>

            {/* Profile Image */}
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl z-10">
              <img
                src="https://media.licdn.com/dms/image/v2/D4E03AQHUWlsORdfz4g/profile-displayphoto-shrink_800_800/B4EZZN1cU2HUAc-/0/1745062581683?e=1756944000&v=beta&t=7B2V3OMKhQkZlnh5MeL2cHiXqMPxmnpeK-T7z8GorrA"
                alt="Profile"
                width="384"
                height="384"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

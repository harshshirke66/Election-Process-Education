import { Globe, Vote } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <a href="#" className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-brutalist-blue p-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-none transition-all">
              <Vote className="text-white w-6 h-6" />
            </div>
            <span className="font-black text-xl tracking-tighter uppercase group-hover:text-brutalist-blue transition-colors">E-Process Ed</span>
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#register" className="font-bold uppercase hover:underline decoration-4 underline-offset-4">Register</a>
            <a href="#journey" className="font-bold uppercase hover:underline decoration-4 underline-offset-4">Journey</a>
            <a href="#quiz" className="font-bold uppercase hover:underline decoration-4 underline-offset-4">Quiz</a>
            <a href="#info" className="font-bold uppercase hover:underline decoration-4 underline-offset-4">Infographics</a>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-language-selector'))}
              className="flex items-center gap-2 font-bold uppercase hover:underline decoration-4 underline-offset-4"
              aria-label="Change Language"
            >
              <Globe size={18} />
              <span className="hidden lg:inline">Language</span>
            </button>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-ai-chat'))}
              className="brutal-btn-primary py-2 px-4 text-sm"
            >
              Ask AI
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

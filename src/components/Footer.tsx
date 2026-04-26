import { Globe, MessageSquare, Mail, Vote } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-white border-t-8 border-black pt-12 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="bg-brutalist-blue p-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <Vote className="text-white w-6 h-6" />
              </div>
              <span className="font-black text-2xl tracking-tighter uppercase">E-Process Ed</span>
            </div>
            <p className="font-bold max-w-sm text-lg">
              Empowering citizens through education. Making the democratic process transparent, accessible, and simple for everyone.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="GitHub" className="p-3 border-4 border-black hover:bg-brutalist-blue hover:text-white transition-all shadow-brutal hover:shadow-none">
                <Globe size={24} />
              </a>
              <a href="#" aria-label="Twitter" className="p-3 border-4 border-black hover:bg-brutalist-red hover:text-white transition-all shadow-brutal hover:shadow-none">
                <MessageSquare size={24} />
              </a>
              <a href="#" aria-label="Contact Email" className="p-3 border-4 border-black hover:bg-brutalist-neon hover:text-white transition-all shadow-brutal hover:shadow-none">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-16">
            <div className="flex flex-col gap-4">
              <h4 className="font-black uppercase text-xl">Resources</h4>
              <ul className="flex flex-col gap-2 font-bold underline decoration-2 underline-offset-4">
                <li><a href="https://voters.eci.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:bg-brutalist-blue hover:text-white px-1 transition-colors">NVSP Portal</a></li>
                <li><a href="https://play.google.com/store/apps/details?id=com.eci.citizen" target="_blank" rel="noopener noreferrer" className="hover:bg-brutalist-red hover:text-white px-1 transition-colors">Voter Helpline</a></li>
                <li><a href="https://eci.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:bg-brutalist-neon hover:text-black px-1 transition-colors">ECI Website</a></li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-black uppercase text-xl">Quick Links</h4>
              <ul className="flex flex-col gap-2 font-bold underline decoration-2 underline-offset-4">
                <li><a href="#journey">Journey</a></li>
                <li><a href="#quiz">Quiz</a></li>
                <li><a href="#info">Info</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t-4 border-black flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-black uppercase tracking-tight text-sm">
            © 2026 Election Process Education Assistant. All rights reserved.
          </p>
          <div className="bg-black text-white px-4 py-1 font-bold text-xs uppercase tracking-widest">
            Made for Democracy
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

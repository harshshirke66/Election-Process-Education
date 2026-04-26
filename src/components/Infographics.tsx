import { motion } from 'framer-motion'
import { ShieldCheck, Users, Globe2, Zap } from 'lucide-react'

const data = [
  {
    title: "100% Secure",
    stat: "EVM + VVPAT",
    desc: "A double verification layer ensuring every vote is counted as cast.",
    icon: <ShieldCheck className="w-12 h-12" />,
    color: "bg-brutalist-blue"
  },
  {
    title: "Massive Scale",
    stat: "968M+ Voters",
    desc: "The largest democratic exercise on the planet happening right here in India.",
    icon: <Users className="w-12 h-12" />,
    color: "bg-brutalist-red"
  },
  {
    title: "Universal Access",
    stat: "No Voter Left Behind",
    desc: "Polling stations are set up even for a single voter in remote areas.",
    icon: <Globe2 className="w-12 h-12" />,
    color: "bg-brutalist-neon"
  },
  {
    title: "Fast Results",
    stat: "Digital Counting",
    desc: "EVMs allow for rapid counting and near-instant democratic transition.",
    icon: <Zap className="w-12 h-12" />,
    color: "bg-brutalist-black"
  }
]

const Infographics = () => {
  return (
    <section id="info" className="py-24 bg-white border-b-8 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 mb-16 border-l-8 border-brutalist-red pl-8">
          <h2 className="brutal-heading-lg">Election <br />By The <span className="bg-brutalist-black text-white px-4">Numbers</span></h2>
          <p className="text-xl font-bold max-w-xl uppercase tracking-tighter">Understanding the scale and security of our democratic process.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-4 border-black">
          {data.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ backgroundColor: '#f3f4f6' }}
              className={`p-10 flex flex-col gap-6 border-black ${i !== data.length - 1 ? 'lg:border-r-4' : ''} ${i < 2 ? 'border-b-4 md:border-b-4 lg:border-b-0' : 'md:border-b-4 lg:border-b-0'} ${i === 1 ? 'md:border-r-0 lg:border-r-4' : ''}`}
            >
              <div className={`${item.color} ${item.color === 'bg-brutalist-black' ? 'text-white' : 'text-black'} p-4 border-4 border-black w-fit shadow-brutal`}>
                {item.icon}
              </div>
              <div>
                <h3 className="text-4xl font-black mb-1">{item.stat}</h3>
                <h4 className="text-xl font-black uppercase text-brutalist-blue">{item.title}</h4>
              </div>
              <p className="font-bold text-gray-700 leading-snug">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-brutalist-blue p-8 border-4 border-black shadow-brutal text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h3 className="text-3xl font-black uppercase mb-4 tracking-tight">Ready to check your registration status?</h3>
            <p className="text-xl font-bold opacity-90">Don't wait until the last minute. Ensure your name is on the electoral roll today.</p>
          </div>
          <a 
            href="https://electoralsearch.eci.gov.in/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="brutal-btn-secondary text-2xl whitespace-nowrap px-12 inline-block text-center"
          >
            Check Now
          </a>
        </div>
      </div>
    </section>
  )
}

export default Infographics

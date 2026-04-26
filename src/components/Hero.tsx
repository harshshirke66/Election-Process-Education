import { motion } from 'framer-motion'
import { ArrowRight, HelpCircle } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 border-b-8 border-black">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="grid grid-cols-12 h-full">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-black h-full" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-start gap-8">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-brutalist-neon px-4 py-2 border-4 border-black inline-block shadow-brutal"
          >
            <span className="font-black uppercase text-sm tracking-widest">Election Process Education Assistant</span>
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="brutal-heading-xl"
          >
            Understand <span className="bg-brutalist-blue text-white px-4 inline-block transform -rotate-1">Elections</span> <br />
            in <span className="bg-brutalist-red text-white px-4 inline-block transform rotate-1">Minutes</span>.
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-2xl font-bold max-w-2xl border-l-8 border-brutalist-blue pl-6"
          >
            No more confusion. We break down the complex democratic machinery into simple, 
            interactive steps. Empower your vote with knowledge.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap gap-6 mt-8"
          >
            <a href="#journey" className="brutal-btn-primary flex items-center gap-2 text-xl group">
              Start Journey
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </a>
            <button onClick={() => window.dispatchEvent(new CustomEvent('open-ai-chat'))} className="brutal-btn flex items-center gap-2 text-xl">
              <HelpCircle className="w-6 h-6" />
              Ask AI Assistant
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative blocks */}
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-brutalist-blue border-l-8 border-t-8 border-black -mr-16 -mb-16 hidden lg:block" />
      <div className="absolute right-32 top-10 w-32 h-32 border-8 border-brutalist-red transform rotate-12 hidden lg:block" />
    </section>
  )
}

export default Hero

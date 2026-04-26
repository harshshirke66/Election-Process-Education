import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, UserPlus, Search, IdCard, Calendar, MousePointer2, BarChart3, ChevronRight, X } from 'lucide-react'

const steps = [
  {
    id: 1,
    title: 'Voter Registration',
    icon: <UserPlus />,
    color: 'bg-brutalist-blue',
    description: 'The first step is getting yourself on the electoral roll. You can register online via the NVSP portal or offline by submitting Form 6 to your local Electoral Registration Officer.',
    details: [
      'Must be 18 years old on January 1st of the year.',
      'Must be a resident of the constituency.',
      'Required documents: Age proof, Address proof, and Photograph.'
    ]
  },
  {
    id: 2,
    title: 'Verification',
    icon: <Search />,
    color: 'bg-brutalist-red',
    description: 'Once you apply, a Booth Level Officer (BLO) will visit your residence to verify the information provided in your application form.',
    details: [
      'Verification of address and family details.',
      'Ensuring no duplicate entries exist.',
      'Final approval by the Electoral Registration Officer.'
    ]
  },
  {
    id: 3,
    title: 'Voter ID (EPIC)',
    icon: <IdCard />,
    color: 'bg-brutalist-neon',
    description: 'After successful verification, you are issued an Electors Photo Identity Card (EPIC). This card is your primary identification for voting.',
    details: [
      'EPIC number is unique for every voter.',
      'Can be downloaded digitally (e-EPIC).',
      'Also serves as a valid identity proof across India.'
    ]
  },
  {
    id: 4,
    title: 'Polling Day',
    icon: <Calendar />,
    color: 'bg-brutalist-blue',
    description: 'On the day of the election, head to your designated polling booth. You can find your booth details on the Voter Helpline App.',
    details: [
      'Carry your Voter ID or any alternative ID approved by the Election Commission.',
      'Check your name in the voter list at the booth.',
      'Polling usually happens from 7 AM to 6 PM.'
    ]
  },
  {
    id: 5,
    title: 'Voting (EVM & VVPAT)',
    icon: <MousePointer2 />,
    color: 'bg-brutalist-red',
    description: 'Inside the booth, press the button next to your chosen candidate on the Electronic Voting Machine (EVM).',
    details: [
      'VVPAT machine shows a slip for 7 seconds to confirm your choice.',
      'Your left index finger is marked with indelible ink.',
      'One person, one vote. Secret ballot is maintained.'
    ]
  },
  {
    id: 6,
    title: 'Counting & Results',
    icon: <BarChart3 />,
    color: 'bg-brutalist-neon',
    description: 'After polling, EVMs are sealed and stored in strong rooms. On counting day, votes are tallied in the presence of candidates/agents.',
    details: [
      'EVMs are opened in specific rounds.',
      'Postal ballots are counted first.',
      'The candidate with the most votes is declared the winner.'
    ]
  }
]

const ElectionJourney = () => {
  const [selectedStep, setSelectedStep] = useState<typeof steps[0] | null>(null)

  return (
    <section id="journey" className="py-24 bg-white border-b-8 border-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 mb-16">
          <h2 className="brutal-heading-lg">The Journey of a <br /><span className="text-brutalist-blue">Single Vote</span></h2>
          <p className="text-xl font-bold max-w-xl">Follow the path from registration to result. Click each step to dive deeper into the process.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
              onClick={() => setSelectedStep(step)}
              className="brutal-card cursor-pointer group flex flex-col gap-4 hover:bg-black hover:text-white transition-colors"
            >
              <div className={`w-16 h-16 ${step.color} border-4 border-black flex items-center justify-center text-white shadow-brutal group-hover:shadow-none transition-all`}>
                {React.cloneElement(step.icon as React.ReactElement, { size: 32 })}
              </div>
              <h3 className="text-2xl font-black">{step.id}. {step.title}</h3>
              <p className="font-bold opacity-80 group-hover:opacity-100 line-clamp-2">{step.description}</p>
              <div className="flex items-center gap-2 mt-auto font-black uppercase text-sm">
                Learn More <ChevronRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal / Overlay for details */}
      <AnimatePresence>
        {selectedStep && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="brutal-card max-w-2xl w-full relative bg-white"
            >
              <button 
                onClick={() => setSelectedStep(null)}
                className="absolute top-4 right-4 p-2 border-4 border-black hover:bg-brutalist-red hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 ${selectedStep.color} border-4 border-black flex items-center justify-center text-white shadow-brutal`}>
                   {React.cloneElement(selectedStep.icon as React.ReactElement, { size: 32 })}
                </div>
                <h2 className="text-4xl font-black">{selectedStep.title}</h2>
              </div>

              <div className="space-y-6">
                <p className="text-xl font-bold leading-relaxed">
                  {selectedStep.description}
                </p>

                <div className="bg-black text-white p-6 border-4 border-black">
                  <h4 className="text-xl font-black mb-4 text-brutalist-neon uppercase tracking-widest">Key Points:</h4>
                  <ul className="space-y-3">
                    {selectedStep.details.map((detail, i) => (
                      <li key={i} className="flex gap-3 items-start font-bold">
                        <CheckCircle2 className="text-brutalist-neon shrink-0 mt-1" size={20} />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4">
                  <button className="brutal-btn-primary flex-1">Official Portal</button>
                  <button className="brutal-btn flex-1" onClick={() => setSelectedStep(null)}>Close</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default ElectionJourney

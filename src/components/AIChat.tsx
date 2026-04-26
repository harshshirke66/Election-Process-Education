import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, Send, X, Bot, User, Sparkles } from 'lucide-react'

const preDefinedPrompts = [
  "How do I register to vote?",
  "What is VVPAT?",
  "What documents do I need?",
  "How are votes counted?"
]

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', text: string }[]>([
    { role: 'assistant', text: "Hello! I'm your Election Education Assistant. Ask me anything about the voting process!" }
  ])
  const [inputValue, setInputValue] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const handleSend = (text?: string) => {
    const messageText = text || inputValue
    if (!messageText.trim()) return

    setMessages(prev => [...prev, { role: 'user', text: messageText }])
    setInputValue('')

    // Mock AI Response
    setTimeout(() => {
      let response = "That's a great question! In the context of Indian elections, this usually involves coordination between the Election Commission and local authorities. For specific details, you might want to check the NVSP portal."
      
      if (messageText.toLowerCase().includes("register")) {
        response = "To register, you need to fill Form 6. You can do this on the NVSP portal or through the Voter Helpline App. You'll need age proof, address proof, and a photo."
      } else if (messageText.toLowerCase().includes("vvpat")) {
        response = "VVPAT stands for Voter Verified Paper Audit Trail. It's an independent system attached to the EVM that allows voters to verify their vote has been cast correctly."
      }

      setMessages(prev => [...prev, { role: 'assistant', text: response }])
    }, 1000)
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-[60] brutal-btn-primary p-4 rounded-none shadow-brutal-lg flex items-center gap-3"
      >
        <MessageSquare size={32} />
        <span className="font-black hidden md:inline">ASK AI ASSISTANT</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            className="fixed bottom-8 right-8 z-[70] w-[90vw] md:w-[450px] h-[600px] brutal-card flex flex-col p-0 overflow-hidden shadow-brutal-lg"
          >
            {/* Header */}
            <div className="bg-brutalist-blue text-white p-6 border-b-4 border-black flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="bg-white p-2 border-2 border-black">
                  <Bot className="text-black" size={24} />
                </div>
                <div>
                  <h3 className="font-black uppercase text-xl leading-none">Election AI</h3>
                  <span className="text-xs font-bold uppercase tracking-widest text-brutalist-neon">Online & Ready</span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 p-2 border-2 border-transparent hover:border-white transition-all"
              >
                <X size={24} />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 bg-gray-50 space-y-6 custom-scrollbar"
            >
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`
                    max-w-[85%] p-4 border-4 border-black font-bold
                    ${m.role === 'user' 
                      ? 'bg-brutalist-neon shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' 
                      : 'bg-white shadow-[4px_4px_0px_0px_rgba(0,0,255,0.2)]'}
                  `}>
                    <div className="flex items-center gap-2 mb-2 opacity-60 text-xs uppercase font-black">
                      {m.role === 'user' ? <User size={12} /> : <Bot size={12} />}
                      {m.role === 'user' ? 'You' : 'Assistant'}
                    </div>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer / Input */}
            <div className="p-6 border-t-4 border-black bg-white">
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {preDefinedPrompts.map(p => (
                    <button 
                      key={p}
                      onClick={() => handleSend(p)}
                      className="text-xs font-black uppercase p-2 border-2 border-black hover:bg-brutalist-blue hover:text-white transition-colors"
                    >
                      {p}
                    </button>
                  ))}
                </div>
              )}
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about voting..."
                  className="flex-1 p-3 border-4 border-black font-bold focus:outline-none focus:ring-0 placeholder:uppercase"
                />
                <button 
                  onClick={() => handleSend()}
                  className="bg-brutalist-red text-white p-3 border-4 border-black shadow-brutal hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                >
                  <Send size={24} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default AIChat

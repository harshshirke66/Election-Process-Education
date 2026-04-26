import { useEffect } from 'react'
import { Shield, Lock, Eye, Server } from 'lucide-react'

const policies = [
  {
    title: "1. Data Collection",
    desc: "We DO NOT collect, store, or sell any personally identifiable information (PII). This platform is purely educational. Your interactions remain local to your browser.",
    icon: Eye,
    color: "bg-brutalist-blue text-white",
  },
  {
    title: "2. Local Storage",
    desc: "We use browser Local Storage solely to remember your preferred language settings (e.g., English, Hindi). We do not use tracking cookies or third-party analytics.",
    icon: Server,
    color: "bg-brutalist-red text-white",
  },
  {
    title: "3. AI Chatbot Privacy",
    desc: "Our AI Assistant is powered by the Google Gemini API. Your queries are sent to Google for processing, but we do not log or save your chat history on any database.",
    icon: Shield,
    color: "bg-brutalist-neon text-black",
  },
  {
    title: "4. External Links",
    desc: "This site contains direct links to official government websites (e.g., eci.gov.in). Once you leave our site, you are subject to the privacy policies of those respective official platforms.",
    icon: Lock,
    color: "bg-white text-black",
  }
]

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16">
          <div className="bg-black px-6 py-2 inline-block mb-6 shadow-[8px_8px_0px_0px_rgba(57,255,20,1)] transform -rotate-1">
            <span className="font-black uppercase tracking-widest text-2xl text-white">Legal & Privacy</span>
          </div>
          <h1 className="brutal-heading-lg text-black mb-8 border-b-8 border-black pb-4">
            PRIVACY <span className="text-brutalist-red">POLICY</span>
          </h1>
          <p className="text-3xl font-bold border-l-8 border-brutalist-blue pl-6 leading-tight">
            We believe in complete transparency. Our primary goal is education, not data collection. Here is exactly how your data is handled.
          </p>
        </div>

        {/* Policy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {policies.map((policy, index) => {
            const Icon = policy.icon
            return (
              <div 
                key={index} 
                className={`p-8 border-8 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all ${policy.color}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white border-4 border-black text-black inline-block">
                    <Icon size={32} strokeWidth={3} />
                  </div>
                  <h2 className="font-black text-2xl uppercase tracking-tighter">{policy.title}</h2>
                </div>
                <p className="font-bold text-xl leading-relaxed opacity-95">
                  {policy.desc}
                </p>
              </div>
            )
          })}
        </div>

        {/* Footer Note */}
        <div className="bg-gray-100 p-8 border-4 border-black border-dashed text-center">
          <h3 className="font-black text-2xl uppercase mb-4">Have Questions?</h3>
          <p className="font-bold text-lg mb-6">
            If you have any questions about this Privacy Policy, please contact the project maintainers.
          </p>
          <a href="#" className="brutal-btn-primary inline-block text-xl">
            Return to Home
          </a>
        </div>

      </div>
    </div>
  )
}

export default PrivacyPolicy

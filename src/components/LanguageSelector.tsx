import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe } from 'lucide-react'

const languages = [
  { code: 'en', name: 'English', native: 'English' },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
  { code: 'bn', name: 'Bengali', native: 'বাংলা' },
  { code: 'te', name: 'Telugu', native: 'తెలుగు' },
  { code: 'mr', name: 'Marathi', native: 'मराठी' },
  { code: 'ta', name: 'Tamil', native: 'தமிழ்' },
  { code: 'gu', name: 'Gujarati', native: 'ગુજરાતી' },
  { code: 'ur', name: 'Urdu', native: 'اردو' },
  { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ' },
  { code: 'or', name: 'Odia', native: 'ଓଡ଼ିଆ' },
  { code: 'ml', name: 'Malayalam', native: 'മലയാളം' },
  { code: 'pa', name: 'Punjabi', native: 'ਪੰਜਾਬੀ' },
]

const applyTranslationCookie = (code: string) => {
  if (code === 'en') {
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`
  } else {
    document.cookie = `googtrans=/en/${code}; path=/;`
    document.cookie = `googtrans=/en/${code}; path=/; domain=${window.location.hostname};`
  }
}

export const LanguageSelector = ({ onSelect }: { onSelect: (lang: string) => void }) => {
  const [isOpen, setIsOpen] = useState(true)

  const handleSelect = (code: string) => {
    localStorage.setItem('selectedLanguage', code)
    applyTranslationCookie(code)

    setIsOpen(false)
    setTimeout(() => {
      onSelect(code)
      window.location.reload()
    }, 300)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 50, opacity: 0 }}
            className="bg-white border-8 border-black max-w-4xl w-full p-8 md:p-12 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] max-h-[90vh] flex flex-col"
          >
            <div className="flex flex-col items-center mb-8 md:mb-12 text-center">
              <div className="bg-brutalist-neon p-4 border-4 border-black mb-6 transform -rotate-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Globe size={48} />
              </div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
                Choose Your Language
              </h2>
              <p className="text-xl md:text-2xl font-bold border-l-8 border-brutalist-red pl-4 text-left max-w-2xl mx-auto">
                Select your preferred language to begin the interactive election education journey.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-y-auto custom-scrollbar p-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleSelect(lang.code)}
                  className="group relative bg-gray-100 border-4 border-black p-4 text-left transition-all hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:bg-brutalist-blue focus:outline-none"
                >
                  <div className="flex flex-col gap-2">
                    <span className="text-2xl font-black group-hover:text-white">
                      {lang.native}
                    </span>
                    <span className="text-sm font-bold uppercase tracking-widest text-gray-500 group-hover:text-brutalist-neon">
                      {lang.name}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

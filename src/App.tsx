import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ElectionJourney from './components/ElectionJourney'
import Quiz from './components/Quiz'
import Infographics from './components/Infographics'
import AIChat from './components/AIChat'
import Footer from './components/Footer'
import { LanguageSelector } from './components/LanguageSelector'

function App() {
  const [languageReady, setLanguageReady] = useState(() => {
    return !!localStorage.getItem('selectedLanguage')
  })

  useEffect(() => {
    const handleOpenLanguageSelector = () => setLanguageReady(false)
    window.addEventListener('open-language-selector', handleOpenLanguageSelector)
    return () => window.removeEventListener('open-language-selector', handleOpenLanguageSelector)
  }, [])

  const handleLanguageSelect = (lang: string) => {
    console.log(`Language selected: ${lang}`) // Placeholder for actual i18n logic
    setLanguageReady(true)
  }

  return (
    <>
      {!languageReady && <LanguageSelector onSelect={handleLanguageSelect} />}
      {languageReady && (
        <div className="min-h-screen">
          <Navbar />
          <main>
            <Hero />
            <ElectionJourney />
            <Quiz />
            <Infographics />
          </main>
          <AIChat />
          <Footer />
        </div>
      )}
    </>
  )
}

export default App

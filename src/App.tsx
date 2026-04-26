import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import VoterRegistration from './components/VoterRegistration'
import ElectionJourney from './components/ElectionJourney'
import Quiz from './components/Quiz'
import Infographics from './components/Infographics'
import AIChat from './components/AIChat'
import Footer from './components/Footer'
import { LanguageSelector } from './components/LanguageSelector'
import PrivacyPolicy from './components/PrivacyPolicy'

function App() {
  const [languageReady, setLanguageReady] = useState(() => {
    return !!localStorage.getItem('selectedLanguage')
  })
  const [currentHash, setCurrentHash] = useState(window.location.hash)

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash)
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    // When currentHash changes, wait for React to render the DOM, then scroll
    if (currentHash === '#privacy' || currentHash === '' || currentHash === '#') {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'instant' })
      }, 10)
    }
  }, [currentHash])

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
          {currentHash === '#privacy' ? (
            <PrivacyPolicy />
          ) : (
            <main>
              <Hero />
              <VoterRegistration />
              <ElectionJourney />
              <Quiz />
              <Infographics />
            </main>
          )}
          <AIChat />
          <Footer />
        </div>
      )}
    </>
  )
}

export default App

import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ElectionJourney from './components/ElectionJourney'
import Quiz from './components/Quiz'
import Infographics from './components/Infographics'
import AIChat from './components/AIChat'
import Footer from './components/Footer'

function App() {
  return (
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
  )
}

export default App

import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ElectionJourney from './components/ElectionJourney'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ElectionJourney />
        {/* Other sections will be added here */}
      </main>
    </div>
  )
}

export default App

import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        {/* Other sections will be added here */}
      </main>
    </div>
  )
}

export default App

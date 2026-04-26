import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy, RotateCcw, CheckCircle2, XCircle } from 'lucide-react'

const questions = [
  {
    question: "What is the minimum age required to vote in India?",
    options: ["16 Years", "18 Years", "21 Years", "25 Years"],
    answer: 1,
    explanation: "As per the 61st Amendment Act, 1988, the voting age was reduced from 21 to 18 years."
  },
  {
    question: "What does VVPAT stand for?",
    options: [
      "Voter Verified Paper Audit Trail",
      "Voter Verified Paper Account Trail",
      "Voter Validated Paper Audit Trail",
      "Voter Verified Paper Audit Ticket"
    ],
    answer: 0,
    explanation: "VVPAT allows voters to verify that their vote was cast correctly."
  },
  {
    question: "Which ink is used to mark the finger of a voter?",
    options: ["Permanent Ink", "Indelible Ink", "Surgical Ink", "Neon Ink"],
    answer: 1,
    explanation: "Indelible ink containing silver nitrate is used to prevent multiple voting."
  },
  {
    question: "How long can a VVPAT slip be seen by a voter?",
    options: ["5 Seconds", "7 Seconds", "10 Seconds", "12 Seconds"],
    answer: 1,
    explanation: "The VVPAT slip is visible through a glass window for 7 seconds before falling into a sealed box."
  },
  {
    question: "Who appoints the Chief Election Commissioner of India?",
    options: ["Prime Minister", "President of India", "Chief Justice of India", "Parliament"],
    answer: 1,
    explanation: "The Chief Election Commissioner and other Election Commissioners are appointed by the President of India."
  }
]

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (progressRef.current) {
      const progress = Math.round(((currentQuestion + 1) / questions.length) * 100)
      progressRef.current.style.setProperty('--progress-width', `${progress}%`)
      progressRef.current.setAttribute('aria-valuenow', progress.toString())
    }
  }, [currentQuestion])

  const handleAnswer = (index: number) => {
    if (isAnswered) return
    setSelectedOption(index)
    setIsAnswered(true)
    if (index === questions[currentQuestion].answer) {
      setScore(score + 1)
    }
  }

  const nextQuestion = () => {
    const next = currentQuestion + 1
    if (next < questions.length) {
      setCurrentQuestion(next)
      setSelectedOption(null)
      setIsAnswered(false)
    } else {
      setShowResult(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowResult(false)
    setSelectedOption(null)
    setIsAnswered(false)
  }

  return (
    <section id="quiz" className="py-24 bg-brutalist-black text-white border-b-8 border-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 mb-12 text-center items-center">
          <div className="bg-brutalist-red px-4 py-2 border-4 border-white inline-block shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
            <span className="font-black uppercase text-sm tracking-widest">Test Your Knowledge</span>
          </div>
          <h2 className="brutal-heading-lg text-white">Election <span className="text-brutalist-neon">Quiz</span></h2>
        </div>

        <div className="brutal-card bg-white text-black p-8 md:p-12">
          {!showResult ? (
            <div className="space-y-8">
              <div className="flex justify-between items-center border-b-4 border-black pb-4">
                <span className="font-black uppercase tracking-tighter text-xl">Question {currentQuestion + 1}/{questions.length}</span>
                <div 
                  ref={progressRef}
                  className="brutal-progress"
                  role="progressbar"
                  aria-label="Quiz Progress"
                >
                  <div className="brutal-progress-bar" />
                </div>
              </div>

              <h3 className="text-3xl font-black leading-tight">
                {questions[currentQuestion].question}
              </h3>

              <div className="grid grid-cols-1 gap-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={isAnswered}
                    className={`
                      p-6 text-left text-xl font-bold border-4 border-black transition-all
                      ${!isAnswered ? 'hover:bg-brutalist-blue hover:text-white hover:translate-x-1' : ''}
                      ${isAnswered && index === questions[currentQuestion].answer ? 'bg-brutalist-neon' : ''}
                      ${isAnswered && selectedOption === index && index !== questions[currentQuestion].answer ? 'bg-brutalist-red text-white' : ''}
                      ${selectedOption === index ? 'shadow-none translate-x-1' : 'shadow-brutal'}
                    `}
                  >
                    <div className="flex justify-between items-center">
                      <span>{option}</span>
                      {isAnswered && index === questions[currentQuestion].answer && <CheckCircle2 size={24} />}
                      {isAnswered && selectedOption === index && index !== questions[currentQuestion].answer && <XCircle size={24} />}
                    </div>
                  </button>
                ))}
              </div>

              <AnimatePresence>
                {isAnswered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gray-100 p-6 border-4 border-black border-dashed"
                  >
                    <p className="font-bold italic">
                      <span className="font-black uppercase">Did you know?</span> {questions[currentQuestion].explanation}
                    </p>
                    <button 
                      onClick={nextQuestion}
                      className="brutal-btn-primary w-full mt-6 text-xl"
                    >
                      {currentQuestion === questions.length - 1 ? 'See Results' : 'Next Question'}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <div className="text-center space-y-8 py-8">
              <div className="inline-block p-8 bg-brutalist-neon border-8 border-black shadow-brutal transform -rotate-2">
                <Trophy size={80} className="mx-auto mb-4" />
                <h3 className="text-6xl font-black">SCORE: {score}/{questions.length}</h3>
              </div>
              
              <p className="text-2xl font-bold">
                {score === questions.length ? "Perfect! You're an Election Expert! 🏆" : 
                 score >= questions.length / 2 ? "Great job! You know your stuff! 👍" : 
                 "Keep learning! Knowledge is power. 📚"}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <button onClick={resetQuiz} className="brutal-btn-primary flex items-center justify-center gap-2 text-xl">
                  <RotateCcw size={24} /> Try Again
                </button>
                <a href="#journey" className="brutal-btn flex items-center justify-center gap-2 text-xl">
                  Review Journey
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Quiz

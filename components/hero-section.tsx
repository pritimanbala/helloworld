'use client'

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

// Typing animation component
const TypingText = ({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true)
      let currentIndex = 0
      const typeInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1))
          currentIndex++
        } else {
          clearInterval(typeInterval)
        }
      }, 15) // Reduced from 30ms to 15ms for faster typing
      return () => clearInterval(typeInterval)
    }, delay)
    return () => clearTimeout(timer)
  }, [text, delay])

  return (
    <span className={className}>
      {displayedText}
      {isTyping && displayedText.length < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  )
}

export function HeroSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const headerY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const headerOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-background flex flex-col" 
      style={{ fontFamily: '"Courier New", monospace' }}
    >
      {/* MATLAB Header */}
      <motion.div 
        style={{ y: headerY, opacity: headerOpacity }}
        className="bg-primary text-primary-foreground px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between border-b-4 border-primary"
      >
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="text-xl sm:text-2xl font-bold">⬚</div>
          <div>
            <h1 className="text-lg sm:text-3xl font-bold">INDUJAA RAJKUMAR</h1>
            <p className="text-xs sm:text-sm opacity-90 hidden sm:block">ASPIRIING CHEMICAL ENGINEERING  DEPARTMENT LEGISLATOR</p>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col lg:flex-row flex-1 h-[calc(100vh-88px)]"
      >
        {/* Left Sidebar */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full lg:w-64 lg:h-full bg-card border-b-4 lg:border-r-4 lg:border-b-0 border-primary p-4 sm:p-6 space-y-4 sm:space-y-6 overflow-y-auto"
        >
          {/* Profile Image */}
          <div className="border-2 border-muted rounded-lg p-3 bg-muted/30">
            <div className="w-32 sm:w-full aspect-square mx-auto rounded-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center overflow-hidden border-2 border-accent">
              <div className="w-full h-full bg-muted flex items-center justify-center text-4xl sm:text-5xl">
                👤
              </div>
            </div>
            <div className="text-xs text-accent mt-3 font-bold text-center sm:text-left">📁 Insti_CH24</div>
          </div>

          {/* Vision Section */}
          <div className="hidden lg:block">
            <h2 className="text-accent font-bold text-lg mb-3 border-b-2 border-accent pb-2">VISION</h2>
            <ul className="text-xs text-foreground/80 space-y-2 leading-relaxed">
              <li>• To transform our department into a collaborative hub of synergy, where opportunities are accessible to all.</li>
              <li>• To establish a new institutional standard by leveraging our collective strength into a clear roadmap for sustainable success.</li>
            </ul>
          </div>

          {/* Credentials Section */}
          <div>
            <h2 className="text-accent font-bold text-sm sm:text-lg mb-3 border-b-2 border-accent pb-2">CREDENTIALS</h2>
            <ul className="text-xs text-foreground space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">📁</span>
                <div>
                  <div className="font-bold">Research Intern</div>
                  <div className="text-foreground/70">Ultramarine & Pigments Ltd.</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">📁</span>
                <div>
                  <div className="font-bold">Founding member</div>
                  <div className="text-foreground/70">Kartavya (ISB)</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">📁</span>
                <div>
                  <div className="font-bold">Mentor</div>
                  <div className="text-foreground/70">Team Saathi</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">📁</span>
                <div>
                  <div className="font-bold">Coordinator</div>
                  <div className="text-foreground/70">OnIP Shaastra</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">📁</span>
                <div>
                  <div className="font-bold">Manager</div>
                  <div className="text-foreground/70">CSR E-Cell</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-accent font-bold text-sm sm:text-lg mb-3 border-b-2 border-accent pb-2">CONTACT</h2>
            <div className="text-xs text-foreground space-y-2">
              <p className="font-bold">Indujaa Rajkumar</p>
              <p>CH24B009</p>
              <p>H-700, Sharavathi Hostel</p>
              <p>Ph: 9003025969</p>
              <p className="text-accent hover:underline cursor-pointer break-all">Ch24b009@smail.iitm.ac.in</p>
            </div>
          </div>
        </motion.div>

        {/* Right Content Area */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex-1 lg:h-full bg-background p-4 sm:p-6 overflow-y-auto"
        >
          {/* File Tab */}
          <div className="bg-muted border-b border-muted mb-4 p-2 sm:p-3 flex items-center gap-2 overflow-x-auto">
            <span className="text-accent">≡</span>
            <span className="text-foreground font-mono text-xs sm:text-sm whitespace-nowrap">manifesto_chemDL.mlx</span>
          </div>

          {/* Terminal Content */}
          <div className="space-y-3 sm:space-y-4 font-mono text-xs sm:text-sm">
            {/* Section 1 */}
            <div>
              <p className="text-accent font-bold">
                <TypingText text="%% Reconstructing ChES into Mini Clubs" delay={200} />
              </p>
              <p className="text-blue-400 mt-2">
                <TypingText text="% Innovation & Research Cell;" delay={600} />
              </p>
              <ul className="text-foreground/80 space-y-1 ml-4 mt-2">
                <li><TypingText text="• Creating a collaborative working environment where students can propose project/product ideas with necessary feasibility checks and work on them with mutual interest groups." delay={800} /></li>
                <li><TypingText text="• Creating a repository of problem statements from professors that can be taken up as hands-on lab experience." delay={1400} /></li>
              </ul>
            </div>

            {/* Section 2 */}
            <div>
              <p className="text-blue-400 mt-4 font-bold">
                <TypingText text="% ChemE Career Council;" delay={2000} />
              </p>
              <ul className="text-foreground/80 space-y-1 ml-4 mt-2">
                <li><TypingText text="• Collaboration with core Placement & Internship cell to ensure outreach towards projects and pre-internship opportunities in the entrepreneurial workspace." delay={2200} /></li>
                <li><TypingText text="• Building a database and consolidating opportunities for global engagement and SemEx opportunities." delay={2800} /></li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <p className="text-blue-400 mt-4 font-bold">
                <TypingText text="% Departmental Engagement;" delay={3400} />
              </p>
              <ul className="text-foreground/80 space-y-1 ml-4 mt-2">
                <li><TypingText text="• Organising department activities and competitions for bonding, like Freshie Induction, Freshie night, Ethnic night, and Intra-Departmental Tournaments." delay={3600} /></li>
                <li><TypingText text="• Conducting workshops and Industrial Insight Lecture series to bridge theoretical and practical learning." delay={4200} /></li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <p className="text-accent font-bold mt-4">
                <TypingText text="%% ChemE Portal" delay={4800} />
              </p>
              <ul className="text-foreground/80 space-y-1 ml-4 mt-2">
                <li><TypingText text="• Centralize senior's data regarding Electives, PoRs, Academic Projects, Interns & Placements, to aid in meaningful connections and decision making." delay={5000} /></li>
                <li><TypingText text="• Incorporate all SemEx & IV applications, Academic drives including video fundaes of P&I and Projects." delay={5600} /></li>
                <li><TypingText text="• Integrating a detailed timeline for department engagement activities and updates on ongoing professor projects." delay={6200} /></li>
              </ul>
            </div>

            {/* Section 5 */}
            <div>
              <p className="text-accent font-bold mt-4">
                <TypingText text="%% Enhancing Student Welfare and Experience" delay={6800} />
              </p>
              <ul className="text-foreground/80 space-y-1 ml-4 mt-2">
                <li><TypingText text="• Organizing an Open House wherein scholars give guided lab tours focused towards the freshies induction." delay={7000} /></li>
                <li><TypingText text="• Arrange Industrial visits for applied learning experience & host entrepreneurial sessions by ChemE startup founders and faculty entrepreneurs." delay={7600} /></li>
                <li><TypingText text="• Conducting informal nights post quizzes and establish a clear fundae timetable in collaboration with P&I." delay={8200} /></li>
                <li><TypingText text="• Ensuring the renovation of MSB's lobby to convert it into a group discussion & collaboration forum." delay={8800} /></li>
              </ul>
            </div>
          </div>

          {/* Command Window */}
          <div className="mt-6 sm:mt-8 bg-card border-2 border-muted p-3 sm:p-4 rounded">
            <p className="text-blue-400 font-bold text-xs sm:text-sm">Command Window</p>
            <p className="text-accent mt-2 text-xs sm:text-sm">{'>>'} status</p>
            <p className="text-foreground/70 text-xs sm:text-sm">Department system ready.</p>
            <p className="text-foreground/70 text-xs sm:text-sm">Awaiting Execution.</p>
          </div>

          {/* Documents Section */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Manifesto Box */}
            <div className="bg-card border-2 border-accent p-4 rounded hover:bg-card/80 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                
                <h3 className="text-accent font-bold text-md sm:text-xl">Manifesto</h3>
              </div>
              <a href="https://drive.google.com/file/d/1ET7p9bheRihfVfFHX_YDdgCGjxDCecN1/view" className="text-accent hover:underline text-xs mt-3 inline-block">Click Here ↗</a>
            </div>

            {/* Feasibility Report Box */}
            <div className="bg-card border-2 border-accent p-4 rounded hover:bg-card/80 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                
                <h3 className="text-accent font-bold text-md sm:text-xl">Feasibility Report</h3>
              </div>
              <a href="https://drive.google.com/file/d/1jYiZ9jZ0jXbm_QaN62aCneQSsChf2IRw/view" className="text-accent hover:underline text-xs mt-3 inline-block">Click Here ↗</a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

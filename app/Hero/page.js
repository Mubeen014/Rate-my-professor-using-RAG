'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Hero = () => {
  return (

    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-gradient-to-b from-[#00695c] to-[#002d2a] min-h-screen flex flex-col items-center justify-start pt-24 text-white"
    >
        <header id='home' className="bg-transparent p-4 flex justify-center items-center pb-5 ">
    <motion.div 
      className="flex items-center space-x-2 bg-[#1A1A1A] rounded-full px-4 py-2 w-fit"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-2 h-2 bg-[#38E991] rounded-full"></div>
      <span className="text-[#38E991] font-semibold">Your AI Accelerator</span>
    </motion.div>
  </header>
      <motion.h1 
        className="text-7xl font-bold mb-4"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        Rate My Professor
        
      </motion.h1>
      <motion.h1 
        className="text-7xl font-bold mb-4"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        Efficiency with Instant Answers
        
      </motion.h1>
      <motion.p 
        className="text-xl mb-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        App to get to know about your teachers
      </motion.p>
      <div className="flex space-x-4">
        <motion.button 
          className="bg-[#19a08e] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#138f7f] shadow-md hover:shadow-lg transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
            <Link href='/chatbot'>
         Try ProfIn for free
      </Link>
          
        </motion.button>
        
      </div>
    </motion.div>
  )
}

export default Hero
'use client'
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-[#092923] text-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 md:mb-0"
        >
          <h2 className="text-2xl font-bold mb-4">ProfIn</h2>
          <p className="text-sm max-w-md mb-4">Your ultimate AI-powered assistant for seamless collaboration, instant knowledge on professors, and comparison at its finest.</p>
          <p className="text-xs">© 2024 ProfIn</p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16">
          
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4">Follow Us On:</h3>
            <ul className="space-y-2">
              {['X (Twitter)', 'Instagram', 'LinkedIn', 'Youtube'].map((item, index) => (
                <motion.li 
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <a href="#" className="hover:underline">{item}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
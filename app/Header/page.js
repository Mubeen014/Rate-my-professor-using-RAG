'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full p-4 bg-[#000000] bg-opacity-50 shadow-md z-50"
    >
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-bold"
        >
            <Link href='/'>
          Prof<span className="text-green-500">In</span>
          </Link>
        </motion.div>
        <ul className="flex space-x-4">
        <li><a href="#product" className="hover:text-green-300">Product</a></li>
          <li><a href="#features" className="hover:text-green-300">Features</a></li>
          
          <li><a href='/chatbot' className="bg-[#35b59d] text-white px-4 py-2 rounded-full hover:bg-[#138f7f] shadow-md hover:shadow-lg">Try Now</a></li>
        </ul>
      </nav>
    </motion.header>
  );
}

export default Header;

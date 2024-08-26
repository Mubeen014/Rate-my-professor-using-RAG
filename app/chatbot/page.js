'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import Link from 'next/link';
 // Import icons

export default function Chatbot() {
  const [text, setText] = useState('');
  const [result, setResult] = useState([]);
  const [isDarkTheme, setIsDarkTheme] = useState(true); // State to manage the theme

  const handleSubmit = async () => {

    if (!text.trim()) {
      alert("The message cannot be empty");
      return;
    }    

    const userMessage = {
      id: result.length,
      text: text,
      sender: "user"
    };

    setText('');
    setResult(prevResult => [...prevResult, userMessage]);

    const response = await fetch('/api/process', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });

    const data = await response.json();
    console.log(data.result);

    const formattedResult = Array.isArray(data.result) ? data.result : [{
      id: result.length + 1, // Adjust ID to avoid conflicts
      text: data.result, // Assuming it's just a string message
      sender: "bot"
    }];

    setResult(prevResult => [...prevResult, ...formattedResult]);
    
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent the default action (e.g., form submission)
      handleSubmit(); // Call handleSubmit when Enter is pressed
    }
  };
  

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`flex h-screen ${isDarkTheme ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Sidebar */}
      <div className={`w-64 p-4 ${isDarkTheme ? 'bg-gray-800' : 'bg-gray-200'}`}>
        <div className="flex justify-between items-center mb-6">
          <h1 className={`text-2xl font-bold ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>Prof<span className="text-green-500">In</span></h1>
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className={`w-4 h-4 rounded-full ${isDarkTheme ? 'bg-gray-400' : 'bg-gray-600'}`}
          />
        </div>
        <div className="space-y-2">
          <div className={`rounded p-2 ${isDarkTheme ? 'bg-green-700' : 'bg-green-500'}`}>Algebra Dept</div>
          <div className={`rounded p-2  ${isDarkTheme ? 'bg-green-700' : 'bg-green-500'}`}>Philosophy Dept</div>
          <div className={`rounded p-2 ${isDarkTheme ? 'bg-green-700' : 'bg-green-500'}`}>Psychology Dept</div>
          <div className={`rounded p-2 ${isDarkTheme ? 'bg-green-700' : 'bg-green-500'}`}>Organic Chemistry Dept</div>
          <div className={`rounded p-2 ${isDarkTheme ? 'bg-green-700' : 'bg-green-500'}`}>Physics Dept</div>
        </div>
      </div>
      
      {/* Main chat area */}
      <div className="pt-24 flex-1 flex flex-col">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
  {result.map((message, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className={`max-w-[50%] ${message.sender === 'user' ? 'ml-auto ' : ''} ${message.sender === 'user' ? (isDarkTheme ? 'bg-green-600' : 'bg-green-500') : (isDarkTheme ? 'bg-gray-700' : 'bg-gray-300')} rounded-lg p-2 text-sm`}
    >
      {message.text ? message.text : "No message text available"}
    </motion.div>
  ))}
</div>
        <div className={`p-4 ${isDarkTheme ? 'bg-gray-800' : 'bg-gray-200'}`}>
          <div className="flex items-center bg-gray-700 rounded-full">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => handleKeyDown(e)}
              placeholder="Message Chatin..."
              className={`flex-1 bg-transparent p-3 rounded-l-full focus:outline-none ${isDarkTheme ? 'text-white' : 'text-white'}`}
            />
            <button
              onClick={handleSubmit}
              className={`bg-green-600 text-white rounded-full p-2 m-1 ${isDarkTheme ? '' : 'bg-green-500'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
        {/* Theme Toggle Button */}
        <div className="absolute top-4 right-4">
          <motion.button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${isDarkTheme ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'}`}
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            {isDarkTheme ? (
              <SunIcon className="h-6 w-6" />
            ) : (
              <MoonIcon className="h-6 w-6" />
            )}
          </motion.button>
          
        </div>
        <div className="absolute top-4 right-20">
        <motion.button 
          className="bg-[#19a08e] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#138f7f] shadow-md hover:shadow-lg transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
            <Link href='/'>
         Home
      </Link>
          
        </motion.button>
        </div>
      </div>
    </div>
  );
}

{/* <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text here"
      />
      <button onClick={handleSubmit}>Submit Question</button>
      <ul>
      {result}
      </ul>
    </div> */}
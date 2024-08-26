// add product
import { motion } from 'framer-motion'
import Link from 'next/link';
import Image from 'next/image';

const Product = () => {
  return (
    <div>
    <header id='product' className="bg-[#002d2a] p-4 flex justify-center items-center ">
    <motion.div 
      className="flex items-center space-x-2 bg-[#1A1A1A] rounded-full px-4 py-2 w-fit"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-2 h-2 bg-[#38E991] rounded-full"></div>
      <span className="text-[#38E991] font-semibold">Integration</span>
    </motion.div>
  </header>
  <div className="bg-[#002d2a] flex justify-center px-10 py-2">
    
    <Image
      src="/Images/productimg.png"
      alt="Product Image"
      width={1000}   /* Replace with the actual width of your image */
      height={1000}  /* Replace with the actual height of your image */
      className="block border-4 border-white round-lg" /* Add border with thickness and color */
    />
  </div>
  </div>
  );
};
export default Product;
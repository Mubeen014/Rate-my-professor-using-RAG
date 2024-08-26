import { motion } from 'framer-motion';
import { FaLightbulb, FaLaptopCode, FaChartLine, FaUserCog, FaCogs, FaLock } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const AbstractShape = () => {
    return (
      <motion.div
        className="relative w-32 h-32"  // Set size for the shape container
        whileHover={{ rotateY: 20, rotateX: 20, scale: 1.1 }}  // Example hover effect
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="absolute inset-0">
          <motion.div
            className="w-full h-full bg-[#00695c] border-4 border-[#66ff66] rounded-lg"
            style={{
              transformStyle: 'preserve-3d',
              perspective: '1000px'
            }}
          >
            <motion.div
              className="absolute inset-0"
              style={{
                transform: 'rotateX(30deg) rotateY(30deg)'
              }}
            >
              <div className="w-full h-full bg-gradient-to-r from-[#00695c] via-[#004d40] to-[#00332e] rounded-lg">
                {/* Inner shape content or more complex 3D transformations */}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    );
  };

const featureData = [
  {
    icon: <FaLightbulb />,
    title: "Unlock Instant Knowledge",
    description: "Get instant answers with ProfIn. Boost your productivity by obtaining information quickly."
  },
  {
    icon: <FaLaptopCode />,
    title: "Stay Tech-Savvy with Ease",
    description: "Get ahead in tech with ProfIn's assistance. Troubleshoot, code, and stay updated effortlessly."
  },
  {
    icon: <FaChartLine />,
    title: "Clearer, Easier Decisions",
    description: "Gain confidence in your decision-making with ProfIn's insights for personal or business choices."
  },
  {
    icon: <FaUserCog />,
    title: "Tailored to You",
    description: "Experience a personalized user journey and receive customized recommendations with ProfIn."
  },
  {
    icon: <FaCogs />,
    title: "Adapt to Your Workflow",
    description: "Integrate ProfIn into your workflow and elevate your daily routine with its efficient and organized features."
  },
  {
    icon: <FaLock />,
    title: "Secure Conversations",
    description: "Communicate with confidence. Your conversations are private and secure with ProfIn's end-to-end encryption."
  }
];

const FeatureCard = ({ icon, title, description }) => (
    <motion.div 
      className="bg-[#092923] p-6 rounded-lg border-2 border-[#35b59d]"  /* Updated card color to green */
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="text-[#35b59d] mb-4 text-3xl">{icon}</div>  
      <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );

const FeaturesSection = () => (
    <div>
  <section className="bg-[#002d2a] text-white py-16">
    <div className="container bg#00695c mx-auto px-4">
    <header id='features' className="bg-transparent p-4 flex justify-center items-center pb-5 ">
    <motion.div 
      className="flex items-center space-x-2 bg-[#1A1A1A] rounded-full px-4 py-2 w-fit"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-2 h-2 bg-[#38E991] rounded-full"></div>
      <span className="text-[#38E991] font-semibold">Exemplary Features</span>
    </motion.div>
  </header>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-center mb-4">
          Claim Remarkable Benefits With Our Advanced Features
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Discover a smarter way to connect, collaborate, and succeed with Chatin's features and the profound benefits it brings to your daily life and work.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featureData.map((feature, index) => (
          <FeatureCard 
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  </section>
  <section className="bg-gradient-to-b from-[#002d2a] to-[#00695c] text-white py-16 ">
  <div className="flex flex-col mx-20 px-4 my-20 border-2 border-white rounded-lg">
    <div className='justify-center items-center pt-500'>
    <h1 className="text-6xl font-bold  text-center mb-4 mt-10">
      Experience The Power 
    </h1>
    <h1 className="text-6xl font-bold text-center mt-10">
      ProfIn Today
    </h1>
    <h3 className="text-md text-center mt-5">
    Unlock seamless collaboration, instant knowledge, 
    and more for free.
    </h3>
    <div className="flex justify-center items-center pt-10">
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
  
    </div>
    <div className="flex justify-start px-10 py-2">
      <Image
        src="/Images/3d.png"
        alt="Product Image"
        width={200}  // Ensure width matches the actual image width
        height={200} // Ensure height matches the actual image height
        className="block " // Add border with thickness, color, and rounded corners
        style={{ top: '-50px' }} // Adjust top value to move the image up
      />
    </div>
    <div className="flex justify-end pt-1520">
      <Image
        src="/Images/3d.png"
        alt="Product Image"
        width={200}  // Ensure width matches the actual image width
        height={200} // Ensure height matches the actual image height
        className="block " // Add border with thickness, color, and rounded corners
        style={{ top: '-90px' }} // Adjust top value to move the image up
      />
    </div>
    </div>
</section>
</div>
);

export default FeaturesSection;
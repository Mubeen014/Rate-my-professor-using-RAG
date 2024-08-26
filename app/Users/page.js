import { motion } from 'framer-motion';
import { 
  CodeIcon, 
  DeviceMobileIcon, 
  ServerIcon, 
  CloudIcon, 
  DatabaseIcon 
} from '@heroicons/react/outline';

const brands = [
  { id: 1, name: 'Coding', Icon: CodeIcon },
  { id: 2, name: 'Mobile', Icon: DeviceMobileIcon },
  { id: 3, name: 'Server', Icon: ServerIcon },
  { id: 4, name: 'Cloud', Icon: CloudIcon },
  { id: 5, name: 'Database', Icon: DatabaseIcon },
];

const Users = () => {
  return (
    <div className="bg-[#002d2a] py-12">
      <h2 className="text-center text-gray-300 text-3xl font-bold mb-8">
        Supported Features
      </h2>
      <div className="overflow-hidden">
        <motion.div 
          className="flex"
          initial={{ x: '-100%' }}
          animate={{ x: '0%' }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...brands, ...brands].map((brand, index) => (
            <div key={index} className="flex-none flex-shrink-0 mx-32 text-center">
              <brand.Icon className="w-20 h-20 mx-auto text-white" />
              <p className="text-white mt-2">{brand.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Users;

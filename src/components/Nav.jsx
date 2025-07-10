import { motion } from "framer-motion";

function Nav() {
  return (
    <nav className="flex justify-between items-center pt-6 sm:pt-4 bg-black text-white shadow container mx-auto px-4 md:px-6 top-0 left-0 w-full z-50">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <img
          src="/Instagram post - 3.png"
          alt="Logo"
          className="h-[40px] md:h-[60px] w-[200px] md:w-[360px] p-2 pl-6 md:pl-20 rounded-tr-full rounded-br-full bg-white"
        />
      </motion.div>
      
      <motion.button 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white text-black font-source rounded-full px-4 py-2 h-[45px] w-[100px] md:h-[60px] md:w-[146px] hover:bg-gray-200 transition"
      >
        Contact
      </motion.button>
    </nav>
  );
}

export default Nav;

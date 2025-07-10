import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="bg-[url('/pattern.png')] bg-no-repeat bg-left-bottom bg-black h-[600px] md:h-screen  flex items-center justify-end text-center px-4 pt-20 container mx-auto">
      <div className="px-4 md:px-6 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-stalinist text-white text-right md:w-[1093px] md:h-[132px]"
        >
          Designed with <span className="text-red-500">intent.</span> Developed with <br className="hidden md:block" />
          <span className="text-red-500">precision.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="mt-4 md:mt-6 text-sm md:text-lg font-source text-gray-300 text-right"
        >
          At <span className="text-white font-source">Creofyx</span>, I design what I love and build what I believe in.
          <br className="hidden md:block" />
          Clean visuals, smooth code, and stories that stick.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <ul className="flex justify-end items-center mt-6 md:mt-8 gap-0 md:gap-4">
            <li><img src="/LinkedIn.png" alt="LinkedIn" className="h-6 md:h-8" /></li>
            <li><img src="/Behance.png" alt="Behance" className="h-6 md:h-8" /></li>
            <li><img src="/Instagram.png" alt="Instagram" className="h-6 md:h-8" /></li>
            <li><img src="/GitHub.png" alt="GitHub" className="h-6 md:h-8" /></li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

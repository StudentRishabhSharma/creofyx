import { motion } from "framer-motion";

function About() {
  return (
    <div className="flex flex-col md:flex-row container mx-auto px-4 sm:px-6 justify-end mt-[100px] sm:mt-[200px] mb-[100px] sm:mb-[200px]">
      
      {/* Title Section */}
      <div className="mb-8 md:mb-0 md:mr-6">
        <div className="bg-green-500 h-[12px] sm:h-[24px] w-[180px] sm:w-[458px] mx-auto md:ml-[40%] md:mr-[-80%] mb-[-10px] z-10 relative"></div>
        <h1 className="text-[36px] sm:text-[96px] leading-[90%] sm:leading-[73%] font-stalinist text-center md:text-left md:ml-[40%] md:mr-[-80%] z-10 relative">
          WHO I <br /> AM?
        </h1>
      </div>

      {/* Main Content Box */}
      <div className="w-full">
        <div className="flex flex-col md:flex-row bg-black text-white w-full h-auto md:h-[311px]">
          
          {/* Image */}
          <div className="w-full md:w-[45%] flex justify-center items-center">
            <img
              src="/Anime-boy.png"
              alt="About me"
              className="w-full md:h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-[100%] bg-green-500 flex justify-center items-center p-6 sm:p-10 font-source text-white text-sm sm:text-base text-center md:text-left">
            <p>
              Hi, I’m Rishab Sharma, the designer behind Creofyx—my personal
              brand and creative portfolio. I specialize in visual design,
              branding, and UI/UX, blending artistic vision with user-focused
              strategy to bring meaningful ideas to life.
            </p>
          </div>
        </div>

        {/* Bottom Text Box */}
        <div className="flex justify-start items-center">
          <h2 className="bg-white text-lg sm:text-xl font-stalinist text-black w-full pl-[20px] sm:pl-[50px] pt-[20px] pb-[20px] text-center md:text-left">
            {'Want to know more'}
          </h2>
        </div>

        {/* Contact Button */}
        <motion.button
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white h-[50px] sm:h-[60px] w-[130px] sm:w-[146px] font-source text-black px-4 py-2 mt-6 rounded-full hover:bg-gray-200 transition mx-auto md:mx-0"
        >
          Contact
        </motion.button>
      </div>
    </div>
  );
}

export default About;

function Projects() {
  return (
    <section className="bg-black container mx-auto px-4 sm:px-6 mt-[100px] sm:mt-[200px] mb-[100px] sm:mb-[200px]">
      
      {/* Heading */}
      <div className="text-left">
        <div className="justify-center sm:items-end flex flex-col items-center sm:flex sm:flex-col sm:items-end">
          <div className="bg-red-500 h-[12px] sm:h-[24px] w-[200px] sm:w-[912px] mb-[-10px] sm:mb-[-20px]"></div>
          <h2 className="text-[36px] sm:text-[96px] leading-[90%] sm:leading-[73%] font-stalinist text-center sm:text-right">
            PROJECTS
          </h2>
        </div>
      </div>

      {/* Boxes and Description */}
      <div className="flex flex-col-reverse sm:flex-row justify-start  sm:mt-0">
        
        {/* Project Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 p-0">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-[200px] sm:h-[250px] md:h-[280px] lg:h-[324px] w-[200px] sm:w-[250px] md:w-[280px] lg:w-[325px] bg-gray-800 text-white p-10 rounded-[40%] sm:rounded-[40%] flex items-center justify-center"
            >
              Box {index + 1}
            </div>
          ))}
        </div>

        {/* Side Text */}
        <div className="w-full sm:w-1/4 mt-10 sm:mt-5 sm:ml-10">
          <p className="text-base sm:text-lg font-source text-center sm:text-left text-gray-400">
            I believe in the power of design and technology to transform ideas
            into reality. My purpose is to create meaningful experiences that
            resonate with people and make a positive impact on their lives.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;

function Services() {
  return (
    <div className="flex flex-col container mx-auto px-4 sm:px-6 mt-[100px] sm:mt-[200px] mb-[100px] sm:mb-[200px]">
      
      {/* Title Strip */}
      <div className="bg-blue-500 h-[12px] sm:h-[24px] w-[200px] sm:w-[854px] mb-[-10px] sm:mb-[-20px] mx-auto sm:mx-0"></div>
      
      {/* Heading */}
      <h1 className="text-[36px] sm:text-[96px] font-stalinist leading-[90%] sm:leading-[73%] text-center sm:text-left">
        SERVICES
      </h1>
      
      {/* Services Grid */}
      <div className="flex flex-col justify-center items-center w-full mt-10 space-y-8 sm:space-y-0 sm:space-x-0">
        <div className="w-full sm:w-[40%] p-4 text-center sm:text-left">
          <h2 className="font-bold text-xl font-stalinist">>> UI/UX Design</h2>
          <p className="font-source text-red-500 mt-2">
            Website and Mobile App UI <br />
            Wireframing & Prototyping (Figma) <br />
            UX Research (basic flows, persona building) <br />
            Design Systems & Style Guides
          </p>
        </div>

        <div className="w-full sm:w-[40%] p-4 text-center sm:text-left">
          <h2 className="font-bold text-xl font-stalinist">>> Branding & Visual Identity</h2>
          <p className="font-source text-green-500 mt-2">
            Logo Design <br />
            Color Palette & Typography <br />
            Brand Guidelines <br />
            Social Media Creatives & Post Templates
          </p>
        </div>

        <div className="w-full sm:w-[40%] p-4 text-center sm:text-left">
          <h2 className="font-bold text-xl font-stalinist">>> Frontend Development</h2>
          <p className="font-source text-blue-500 mt-2">
            Responsive Website Development <br />
            React-based Web Interfaces <br />
            HTML, CSS, JavaScript, Tailwind CSS Integration <br />
            Design-to-Code Conversions (Figma to Web)
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;

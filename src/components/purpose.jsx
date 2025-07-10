function Purpose() {
  return (
    <section className="container mx-auto px-4 sm:px-6 md:px-8">
      <div className="text-left">
        <div className="justify-start">
          <div className="bg-red-500 h-[16px] sm:h-[20px] md:h-[24px] w-[200px] sm:w-[400px] md:w-[821px] mb-[-12px] sm:mb-[-16px] md:mb-[-20px]"></div>
          <div>
            <h2 className="text-[36px] sm:text-[56px] md:text-[72px] lg:text-[96px] leading-[90%] sm:leading-[80%] md:leading-[73%] text-left font-stalinist">
              PURPOSE <br /> OF CREOFYX
            </h2>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-end gap-8">
        {/* Left Paragraph */}
        <div className="lg:w-1/4 mt-5 lg:mr-10">
          <p className="text-base sm:text-lg font-source text-left text-gray-700">
            I believe in the power of design and technology to transform ideas into reality. My purpose is to create meaningful experiences that resonate with people and make a positive impact on their lives.
          </p>
        </div>

        {/* Grid Boxes */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 p-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-[200px] sm:h-[250px] md:h-[280px] lg:h-[324px] w-[200px] sm:w-[250px] md:w-[280px] lg:w-[325px] bg-gray-800 text-white p-6 rounded-[40%] flex items-center justify-center text-center"
            >
              Box {i + 1}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Purpose;

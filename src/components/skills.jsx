function Skills() {
  return (
    <div className="bg-[url('/pattern2.png')] container mx-auto px-4 sm:px-6 bg-no-repeat bg-right-top bg-[position:right_0px_top_-100px] mt-[100px] sm:mt-[200px] mb-[100px] sm:mb-[200px]">
      {/* Title Section */}
      <div className="justify-center">
        <div className="bg-green-500 h-[12px] sm:h-[24px] w-[180px] sm:w-[779px] mb-[-10px] sm:mb-[-20px]"></div>
        <h2 className="text-[36px] sm:text-[96px] leading-[90%] sm:leading-[73%] font-stalinist">
          DESIGN &<br />
          DEV <br />
          TOOLKIT
        </h2>
      </div>

      {/* Content Section */}
      <div className="flex flex-col sm:flex-row justify-start sm:mt-0 mt-10">
        
        {/* Rotated Title */}
        <div className="text-center sm:block hidden">
          <h1 className="bg-white text-black w-[500px] h-[36px] mt-[320px] -rotate-90 font-stalinist text-xl pt-1 mr-[-200px]">
            From Design to Deploy
          </h1>
        </div>

        {/* Grid of Tools */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-[80px] mt-4 sm:mt-0">

          {/* Tools List */}
          {[
            {
              title: "Figma",
              text: "For wireframing, prototyping, and crafting clean UI/UX designs with user-first thinking.",
            },
            {
              title: "Photoshop",
              text: "To design high-quality visual assets, posters, branding elements, and creative compositions.",
            },
            {
              title: "HTML5",
              text: "The structural backbone of my web projects, ensuring semantic, accessible, and well-organized markup.",
            },
            {
              title: "Tailwind CSS",
              text: "Styling responsive, modern layouts efficiently using utility-first CSS and clean custom styles.",
            },
            {
              title: "Javascript",
              text: "For adding interactivity, DOM manipulation, and dynamic functionality to my web applications.",
            },
            {
              title: "React",
              text: "To build modular, scalable, and responsive frontend interfaces with reusable components and smooth UI behavior.",
            },
            {
              title: "Git",
              text: "To host, share, and collaborate on projects, as well as showcase my code publicly for potential clients or employers.",
            },
          ].map((tool, index) => (
            <div
              key={index}
              className="h-auto sm:h-[104px] w-full sm:w-[312px] text-white p-6 sm:p-10 rounded-[30%] sm:rounded-[40%] "
            >
              <h3 className="text-lg sm:text-xl font-bold font-stalinist">{tool.title}</h3>
              <p className="font-source text-sm sm:text-base">{tool.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;

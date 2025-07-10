function Contact() {
  return (
    <div className="  px-4 sm:px-6">
      {/* Blue Strip */}
      <div className="bg-blue-500 h-[12px] sm:h-[24px] w-[200px] sm:w-[854px] mb-[-10px] sm:mb-[-20px] mx-auto"></div>

      {/* Heading */}
      <h2 className="text-[36px] sm:text-[96px] text-center leading-[90%] sm:leading-[73%] font-stalinist">
        Let’s Build <br />Together
      </h2>

      {/* Form */}
      <form className="mt-4 flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 gap-4 w-full max-w-[90%] sm:max-w-[883px]">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 font-source text-[#D9D9D9] bg-[#424242] h-[50px] sm:h-[63px] rounded-full w-full"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 font-source text-[#D9D9D9] bg-[#424242] h-[50px] sm:h-[63px] rounded-full w-full"
          />
          <textarea
            placeholder="Your Message"
            className="p-4 font-source text-[#D9D9D9] bg-[#424242] h-[150px] sm:h-[207px] rounded-[30px] sm:rounded-[47px] w-full"
            rows="4"
          ></textarea>

          <button
            type="submit"
            className="bg-white font-source text-black p-4 rounded-full text-[14px] w-[146px] h-[50px] sm:h-[59px] mx-auto"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;

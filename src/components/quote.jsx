import { div } from "framer-motion/client";

function Quote() {
  return (
    <div className="flex flex-col items-center justify-center bg-black-0 text-white font-source text-xl p-10 rounded-full mt-[100px] border-4 border-dashed border-white">
      <h1>"Design is not just what it looks like and feels like. Design is how it works."</h1>
      <p>- Steve Jobs</p>
    </div>
  );
}

export default Quote;

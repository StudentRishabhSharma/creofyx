function Images() {
  return (
    <div className="relative overflow-hidden w-full mt-[100px] mb-[100px] md:mt-[250px] md:mb-[200px] h-[240px]">
      <div className="animate-marquee flex w-max ">
        {/* 1st set of images */}
        <img src="/mask-group.jpg" alt="1" className="h-60 w-auto" />
        <img src="/anime-girl.jpg" alt="2" className="h-60 w-auto" />
        <img src="/anime-2.jpg" alt="3" className="h-60 w-auto" />

        {/* 2nd set of same images to allow smooth looping */}
        <img src="/mask-group.jpg" alt="4" className="h-60 w-auto" />
        <img src="/anime-girl.jpg" alt="5" className="h-60 w-auto" />
        <img src="/anime-2.jpg" alt="6" className="h-60 w-auto" />
      </div>
    </div>
  );
}

export default Images;

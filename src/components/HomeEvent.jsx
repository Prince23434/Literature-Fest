import { useEffect, useState } from "react";
import { LuCircleArrowLeft, LuCircleArrowRight } from "react-icons/lu";

import homeImg from "../assets/1.webp";
import homeImg2 from "../assets/2.webp";
import homeImg3 from "../assets/3.webp";

const HomeEvent = () => {
  // desktop index (groups of 3)
  const [indexDesktop, setIndexDesktop] = useState(0);
  const totalGroups = 2; // 6 images / 3 per group = 2 groups

  // mobile index (single image at a time)
  const [indexMobile, setIndexMobile] = useState(0);
  const totalImages = 6; // 6 total images

  // auto-slide for desktop
  useEffect(() => {
    const interval = setInterval(() => {
      setIndexDesktop((prev) => (prev + 1) % totalGroups);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  // auto-slide for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setIndexMobile((prev) => (prev + 1) % totalImages);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const handlePrevDesktop = () => {
    setIndexDesktop((prev) => (prev - 1 + totalGroups) % totalGroups);
  };
  const handleNextDesktop = () => {
    setIndexDesktop((prev) => (prev + 1) % totalGroups);
  };

  const handlePrevMobile = () => {
    setIndexMobile((prev) => (prev - 1 + totalImages) % totalImages);
  };
  const handleNextMobile = () => {
    setIndexMobile((prev) => (prev + 1) % totalImages);
  };

  return (
    <div className="bg-[#e8b9b0] pb-10">
      {/* Title */}
      <div>
        <p className='myText text-[#a46666] text-3xl sm:text-5xl font-light tracking-wider text-center pt-9'>
          Literature Fest
        </p>

        <div className='flex mt-[-0.7rem] md:ml-[30.3rem] mb-1'>
          <div className='taper-line mt-[1rem]'></div>
          <p className='text-[#a46666] font-crimson text-3xl '>2K25</p>
          <div className='taper-line mt-[1rem]'></div>
        </div>

        <p className='myText text-[#a46666] text-3xl sm:text-5xl font-light tracking-wider text-center mt-[-1.1rem]'>
          EVENTS
        </p>
      </div>

      {/* ===== Desktop Carousel (3 at a time) ===== */}
      <div className="relative w-10/12 mx-auto overflow-hidden hidden md:block">
        {/* Left button */}
        <button
          onClick={handlePrevDesktop}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#b0dfe8] w-[51px] h-[51px] rounded-full flex items-center justify-center z-10"
        >
          <LuCircleArrowLeft className="text-white w-[40px] h-[40px]" />
        </button>

        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${indexDesktop * 100}%)`,
            width: `${totalGroups * 100}%`,
          }}
        >
          {/* Group 1 */}
          <div className="flex justify-center gap-6 w-full flex-shrink-0 -translate-x-157">
            <div className="relative text-white">
              <img src={homeImg} className="w-[360px] h-[450px] rounded-lg mt-[5rem]" />
              <div className="absolute z-[14] top-40 left-20 text-5xl fancy-script1 text-center">Kavi <br/>Sammelan</div>
              <div className="absolute z-[14] bottom-26 text-2xl left-12 fancy-script2 text-center w-[270px]">An evening of poetry where poets share their heartfelt poetries and shayris. Come listen, smile and enjoy.</div>
            </div>
            <div className="relative text-white">
              <img src={homeImg2} className="w-[360px] h-[450px] rounded-lg" />
              <div className="absolute z-[14] top-25 left-20 text-5xl fancy-script1 text-center">Inaugural  <br/>Parade</div>
              <div className="absolute z-[14] bottom-46 text-2xl left-10 fancy-script2 text-center w-[270px]">The grand start of our fest with music and cheers. A fun way to begin the celebration.</div>
            </div>
            <div className="relative text-white">
              <img src={homeImg3} className="w-[360px] h-[450px] rounded-lg mt-[5rem]" />
              <div className="absolute z-[14] top-40 left-28 text-5xl fancy-script1 text-center">Garba <br/>Night </div>
              <div className="absolute z-[14] bottom-26 text-2xl left-10 fancy-script2 text-center w-[270px]">Come witness the feminine devine, with a twist of garba and dandiya in this festive season.</div>
            </div>
          </div>

          {/* Group 2 */}
          <div className="flex justify-center gap-6 w-full flex-shrink-0 -translate-x-157">
            <div className="relative text-white">
              <img src={homeImg} className="w-[360px] h-[450px] rounded-lg mt-[5rem]" />
              <div className="absolute z-[14] top-40 left-20 text-5xl fancy-script1 text-center">Panel  <br/>Discussion </div>
              <div className="absolute z-[14] bottom-26 text-2xl left-12 fancy-script2 text-center w-[270px]">Talk. Listen. Discuss, thriving topics with writers and speakers. Let's talk it out!!</div>
            </div>
            <div className="relative text-white">
              <img src={homeImg2} className="w-[360px] h-[450px] rounded-lg" />
              <div className="absolute z-[14] top-25 left-27 text-5xl fancy-script1 text-center">Book  <br/>Launch </div>
              <div className="absolute z-[14] bottom-46 text-2xl left-10 fancy-script2 text-center w-[270px]"> See new books being introduced by their authors. A happy moment for every reader.</div>
            </div>
            <div className="relative text-white">
              <img src={homeImg3} className="w-[360px] h-[450px] rounded-lg mt-[5rem]" />
              <div className="absolute z-[14] top-40 left-18 text-5xl fancy-script1 text-center">Guest  <br/>Performer </div>
              <div className="absolute z-[14] bottom-26 text-2xl left-10 fancy-script2 text-center w-[270px]"> A special show by a surprise guest. Sit back and enjoy the performance.</div>
            </div>
          </div>
        </div>

        {/* Right button */}
        <button
          onClick={handleNextDesktop}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#b0dfe8] w-[51px] h-[51px] rounded-full flex items-center justify-center z-10"
        >
          <LuCircleArrowRight className="text-white w-[40px] h-[40px]" />
        </button>
      </div>

      {/* ===== Mobile Carousel (1 at a time) ===== */}
      <div className="relative w-11/12 mx-auto overflow-hidden flex md:hidden">
        {/* Left button */}
        <button
          onClick={handlePrevMobile}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#b0dfe8] w-[40px] h-[40px] rounded-full flex items-center justify-center z-10"
        >
          <LuCircleArrowLeft className="text-white w-[28px] h-[28px]" />
        </button>

        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${indexMobile * 100}%)`,
            width: `${totalImages * 100}%`,
          }}
        >
          {/* Each image is its own slide */}
          <div className="flex-shrink-0 w-full flex justify-center relative text-white">
            <img src={homeImg} className="w-[80%] h-[400px] rounded-lg -translate-x-1" />
              <div className="absolute z-[14] top-20 left-23 text-4xl fancy-script1 text-center">Inaugural  <br/>Parade</div>
              <div className="absolute z-[14] bottom-12 text-2xl left-17 fancy-script2 text-center w-[180px]">The grand start of our fest with music and cheers. A fun way to begin the celebration.</div>
          </div>
          <div className="flex-shrink-0 w-full flex justify-center relative text-white">
            <img src={homeImg2} className="w-[80%] h-[400px] rounded-lg" />
              <div className="absolute z-[14] top-18 left-22 text-4xl fancy-script1 text-center">Kavi <br/>Sammelan</div>
              <div className="absolute z-[14] bottom-8 text-2xl left-17 fancy-script2 text-center w-[180px]">An evening of poetry where poets share their heartfelt poetries and shayris. Come listen, smile and enjoy.</div>
          </div>
          <div className="flex-shrink-0 w-full flex justify-center relative text-white">
            <img src={homeImg3} className="w-[80%] h-[400px] rounded-lg translate-x-1" />
              <div className="absolute z-[14] top-20 left-23 text-4xl fancy-script1 text-center">Guest  <br/>Performer </div>
              <div className="absolute z-[14] bottom-16 text-2xl left-18 fancy-script2 text-center w-[180px]"> A special show by a surprise guest. Sit back and enjoy the performance.</div>
          </div>
          <div className="flex-shrink-0 w-full flex justify-center relative text-white">
            <img src={homeImg} className="w-[80%] h-[400px] rounded-lg -translate-x-1" />
              <div className="absolute z-[14] top-20 left-22 text-4xl fancy-script1 text-center">Panel  <br/>Discussion </div>
              <div className="absolute z-[14] bottom-12 text-2xl left-17 fancy-script2 text-center w-[180px]">Talk. Listen. Discuss, thriving topics with writers and speakers. Let's talk it out!!</div>
          </div>
          <div className="flex-shrink-0 w-full flex justify-center relative text-white">
            <img src={homeImg2} className="w-[80%] h-[400px] rounded-lg " />
              <div className="absolute z-[14] top-20 left-27.5 text-4xl fancy-script1 text-center">Book  <br/>Launch </div>
              <div className="absolute z-[14] bottom-12 text-2xl left-17 fancy-script2 text-center w-[180px]"> See new books being introduced by their authors. A happy moment for every reader.</div>
          </div>
          <div className="flex-shrink-0 w-full flex justify-center relative text-white">
            <img src={homeImg3} className="w-[80%] h-[400px] rounded-lg translate-x-1" />
              <div className="absolute z-[14] top-20 left-30 text-4xl fancy-script1 text-center">Garba <br/>Night </div>
              <div className="absolute z-[14] bottom-12 text-2xl left-18 fancy-script2 text-center w-[180px]">Come witness the feminine devine, with a twist of garba and dandiya in this festive season.</div>
          </div>
        </div>

        {/* Right button */}
        <button
          onClick={handleNextMobile}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#b0dfe8] w-[40px] h-[40px] rounded-full flex items-center justify-center z-10"
        >
          <LuCircleArrowRight className="text-white w-[28px] h-[28px]" />
        </button>
      </div>
    </div>
  );
};

export default HomeEvent;

import { LuCircleArrowLeft } from "react-icons/lu";
import { LuCircleArrowRight } from "react-icons/lu";
import rap from '../assets/events/rap.png'
import frame from '../assets/events/frame.png'
import open from '../assets/events/open.png'
import writing from '../assets/events/writing.png'
import { useEffect, useState } from "react";

const HomeCompetitions = () => {

  const [indexDesktop, setIndexDesktop] = useState(0);
    const totalGroups = 3; // 6 images / 3 per group = 2 groups
  
    // mobile index (single image at a time)
    const [indexMobile, setIndexMobile] = useState(0);
    const totalImages = 8; // 6 total images
  
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
    <div className='bg-white pb-10'>
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
          Competitions
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
                  <div className="flex justify-center gap-6 w-full flex-shrink-0 -translate-x-315">
                    <div className="relative text-white">
                      <img src={rap} className="w-[360px] h-[450px] rounded-lg mt-[5rem]" />
                    </div>
                    <div className="relative text-white">
                      <img src={frame} className="w-[360px] h-[450px] rounded-lg" />
                    </div>
                    <div className="relative text-white">
                      <img src={open} className="w-[360px] h-[450px] rounded-lg mt-[5rem]" />
                    </div>
                  </div>
        
                  {/* Group 2 */}
                  <div className="flex justify-center gap-6 w-full flex-shrink-0 -translate-x-315">
                    <div className="relative text-white">
                      <img src={writing} className="w-[360px] h-[450px] rounded-lg mt-[5rem]" />
                    </div>
                    <div className="relative text-white">
                      <img src={writing} className="w-[360px] h-[450px] rounded-lg" />
                    </div>
                    <div className="relative text-white">
                      <img src={writing} className="w-[360px] h-[450px] rounded-lg mt-[5rem]" />
                    </div>
                  </div>

                  {/* Group 3 */}
                  <div className="flex justify-center gap-36 w-full flex-shrink-0 -translate-x-315">
                    <div className="relative text-white">
                      <img src={writing} className="w-[360px] h-[450px] rounded-lg mt-[5rem]" />
                    </div>
                    <div className="relative text-white">
                      <img src={writing} className="w-[360px] h-[450px] rounded-lg mt-[5rem]" />
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
                    <img src={rap} className="w-[80%] h-[400px] rounded-lg translate-x-1" />
                  </div>
                  <div className="flex-shrink-0 w-full flex justify-center relative text-white">
                    <img src={frame} className="w-[80%] h-[400px] rounded-lg" />
                  </div>
                  <div className="flex-shrink-0 w-full flex justify-center relative text-white">
                    <img src={open} className="w-[80%] h-[400px] rounded-lg translate-x-1" />
                  </div>
                  <div className="flex-shrink-0 w-full flex justify-center relative text-white">
                    <img src={writing} className="w-[80%] h-[400px] rounded-lg translate-x-2" />
                  </div>
                  <div className="flex-shrink-0 w-full flex justify-center relative text-white">
                    <img src={writing} className="w-[80%] h-[400px] rounded-lg " />
                  </div>
                  <div className="flex-shrink-0 w-full flex justify-center relative text-white">
                    <img src={writing} className="w-[80%] h-[400px] rounded-lg translate-x-1" />
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
  )
}

export default HomeCompetitions
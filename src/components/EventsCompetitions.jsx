import { useEffect, useState } from "react";
import { LuCircleArrowLeft, LuCircleArrowRight } from "react-icons/lu";

import homeImg from "../assets/1.webp";
import homeImg2 from "../assets/2.webp";
import homeImg3 from "../assets/3.webp";
import register from "../assets/register.webp"
import { useNavigate } from "react-router-dom";

const HomeEvent = () => {

  const navigate = useNavigate();

  // desktop index (groups of 3)
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
    <div className="bg-[#f8f4f4] pb-30 -mt-16 md:-mt-9 relative z-10">
      {/* Title */}
      <div>
        <p className='myText text-[#a46666] text-3xl sm:text-5xl font-light tracking-wider text-center pt-9'>
          Literature Fest
        </p>

        <div className='flex mt-[-0.7rem] md:ml-[29.3rem] mb-1'>
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
          <div className="flex justify-center gap-6 w-full flex-shrink-0 -translate-x-315">
            <div className="relative text-white h-[670px]">
              <img src={homeImg} className="w-[360px] h-[450px] rounded-lg mt-[5rem]" />
              <div className="absolute z-[14] top-37 text-5xl fancy-script1 text-center">Kalam  <br/> (Writing Competition)</div>
              <div className="absolute z-[14] bottom-48 text-2xl left-12 fancy-script2 text-center w-[270px]">Unleash your creativity with words and let your pen do the magic. A chance to express, inspire, and make your thoughts immortal.</div>
              <div className="cursor-pointer" onClick={() => window.open("https://forms.gle/sXxajoiwH5KHW5PG6", "_blank")}>
                <img src={register} className="absolute bottom-6 -left-8  scale-175"  />
              </div>
            </div>
            <div className="relative text-white h-[650px]">
              <img src={homeImg2} className="w-[360px] h-[450px] rounded-lg" />
              <div className="absolute z-[14] top-30 left-14.5 text-5xl fancy-script1 text-center">Clash of Bars  <br/> (Rap Battle)</div>
              <div className="absolute z-[14] bottom-66 text-2xl left-10 fancy-script2 text-center w-[270px]">Drop your rhymes, spit your fire, and own the stage. It’s time to prove who’s the real wordsmith of beats and bars.</div>
              <div className="cursor-pointer"  onClick={() => window.open("https://forms.gle/yRHFt7AHLycM96Kv8", "_blank")}>
                <img src={register} className="absolute bottom-20 -left-8  scale-175"  />
              </div>
            </div>
            <div className="relative text-white h-[670px]">
              <img src={homeImg3} className="w-[360px] h-[450px] rounded-lg mt-[5rem]" />
              <div className="absolute z-[14] top-45 left-17 text-5xl fancy-script1 text-center">Aaja Bhidle <br/>(Debate) </div>
              <div className="absolute z-[14] bottom-55 text-2xl left-10 fancy-script2 text-center w-[270px]">Step up with your logic, wit, and courage to clash with ideas. Win not just with words, but with the power of persuasion.</div>
              <div className="cursor-pointer"  onClick={() => window.open("https://forms.gle/fkcJA7zKiDXcAZnX8", "_blank")}>
                <img src={register} className="absolute bottom-[23px] -left-11  scale-175"  />
              </div>
            </div>
          </div>

          {/* Group 2 */}
          <div className="flex justify-center gap-6 w-full flex-shrink-0 -translate-x-315">
            <div className="relative text-white h-[650px]">
              <img src={homeImg} className="w-[360px] h-[450px] rounded-lg mt-[5rem]" />
              <div className="absolute z-[14] top-40 left-16 text-5xl fancy-script1 text-center">Wah Wah   <br/>Kya Baat Hai <br /> (Open Mic)</div>
              <div className="absolute z-[14] bottom-43 text-2xl left-12 fancy-script2 text-center w-[270px]">Be it poetry, stand-up, or a heartfelt story—this stage is yours. Shine under the spotlight and let the audience say, “Wah Wah Kya Baat Hai!”</div>
              <div className="cursor-pointer"  onClick={() => window.open("https://forms.gle/XCGtkpEdLQJGNjXP8", "_blank")}>
                <img src={register} className="absolute bottom-1 -left-8  scale-175"  />
              </div>
            </div>
            <div className="relative text-white h-[650px]">
              <img src={homeImg2} className="w-[360px] h-[450px] rounded-lg" />
              <div className="absolute z-[14] top-25 left-22 text-5xl fancy-script1 text-center">Antakshri </div>
              <div className="absolute z-[14] bottom-76 text-2xl left-10 fancy-script2 text-center w-[270px]">Where music, fun, and nostalgia come alive! Sing your heart out and let the rhythm of melodies decide the winner.</div>
              <div className="cursor-pointer"  onClick={() => window.open("https://forms.gle/JXWPqJ61cShzNSkf6", "_blank")}>
                <img src={register} className="absolute bottom-20 -left-8  scale-175"  />
              </div>
            </div>
            <div className="relative text-white h-[650px]">
              <img src={homeImg3} className="w-[360px] h-[450px] rounded-lg mt-[5rem]" />
              <div className="absolute z-[14] top-40 left-18 text-5xl fancy-script1 text-center">Sukkon-E-  <br/>Shaam <br/>(Mushaira)</div>
              <div className="absolute z-[14] bottom-42 text-2xl left-10 fancy-script2 text-center w-[270px]">An evening of soulful poetry, laughter, and emotions. Celebrate the beauty of Urdu and Hindi verses under one roof.</div>
              <div className="cursor-pointer"  onClick={() => window.open("https://forms.gle/TsTFg8vmLb6wtkje6", "_blank")}>
                <img src={register} className="absolute bottom-[3px] -left-11 scale-175"  />
              </div>
            </div>
          </div>

          {/* Group 3 */}
          <div className="flex justify-center gap-46 w-full flex-shrink-0 -translate-x-315">
            <div className="relative text-white h-[650px]">
              <img src={homeImg} className="w-[360px] h-[450px] rounded-lg mt-[5rem]" />
              <div className="absolute z-[14] top-40 left-35 text-5xl fancy-script1 text-center">Vlog   <br/>Fest </div>
              <div className="absolute z-[14] bottom-52 text-2xl left-12 fancy-script2 text-center w-[270px]">Showcase your creativity behind the lens and storytelling on screen. Capture the world your way and let your vlog steal the spotlight.</div>
              <div className="cursor-pointer" onClick={() => window.open("https://forms.gle/PNTBcDZE7G5qVNmX9", "_blank")}>
                <img src={register} className="absolute bottom-[3px] -left-8  scale-175"  />
              </div>
            </div>
            <div className="relative text-white h-[650px]">
              <img src={homeImg3} className="w-[360px] h-[450px] rounded-lg mt-[5rem]" />
              <div className="absolute z-[14] top-40 left-26 text-5xl fancy-script1 text-center">Frame <br/>Clickers </div>
              <div className="absolute z-[14] bottom-50 text-2xl left-10 fancy-script2 text-center w-[270px]">One click, endless stories! Bring your vision to life through photography and frame the moments that speak louder than words.</div>
              <div className="cursor-pointer"  onClick={() => window.open("https://forms.gle/NqX8wCpRUAhiKEiZ7", "_blank")}>
                <img src={register} className="absolute bottom-[3px] -left-11 scale-175"  />
              </div>
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
          <div className="flex-shrink-0 w-full flex justify-center relative text-white h-[515px]">
            <img src={homeImg} className="w-[90%] h-[400px] rounded-lg -translate-x-1" />
              <div className="absolute z-[14] top-14 left-11 text-4xl fancy-script1 text-center w-[230px]">Kalam  <br/> (Writing Competition)</div>
              <div className="absolute z-[14] bottom-36 text-2xl left-12 fancy-script2 text-center w-[230px]">Unleash your creativity with words and let your pen do the magic. A chance to express, inspire, and make your thoughts immortal.</div>
              <div className="cursor-pointer"  onClick={() => window.open("https://forms.gle/sXxajoiwH5KHW5PG6", "_blank")}>
                <img src={register} className="absolute bottom-[19px] -left-8  scale-150"  />
              </div>
          </div>
          <div className="flex-shrink-0 w-full flex justify-center relative text-white h-[515px]">
            <img src={homeImg2} className="w-[90%] h-[400px] rounded-lg" />
              <div className="absolute z-[14] top-20 left-18 text-4xl fancy-script1 text-center">Clash of Bars  <br/> (Rap Battle)</div>
              <div className="absolute z-[14] bottom-42 text-2xl left-11 fancy-script2 text-center w-[230px]">Drop your rhymes, spit your fire, and own the stage. It’s time to prove who’s the real wordsmith of beats and bars.</div>
              <div className="cursor-pointer"  onClick={() => window.open("https://forms.gle/yRHFt7AHLycM96Kv8", "_blank")}>
                <img src={register} className="absolute bottom-[19px] -left-8  scale-150"  />
              </div>
          </div>
          <div className="flex-shrink-0 w-full flex justify-center relative text-white h-[515px]">
            <img src={homeImg3} className="w-[90%] h-[400px] rounded-lg translate-x-1" />
              <div className="absolute z-[14] top-20 left-21.5 text-4xl fancy-script1 text-center">Aaja Bhidle <br/>(Debate) </div>
              <div className="absolute z-[14] bottom-46 text-2xl left-12 fancy-script2 text-center w-[230px]">Step up with your logic, wit, and courage to clash with ideas. Win not just with words, but with the power of persuasion.</div>
              <div className="cursor-pointer"  onClick={() => window.open("https://forms.gle/fkcJA7zKiDXcAZnX8", "_blank")}>
                <img src={register} className="absolute bottom-[19px] -left-8  scale-150"  />
              </div>
          </div>
          <div className="flex-shrink-0 w-full flex justify-center relative text-white h-[515px]">
            <img src={homeImg} className="w-[90%] h-[400px] rounded-lg -translate-x-1" />
              <div className="absolute z-[14] top-14 left-18 text-4xl fancy-script1 text-center">Wah Wah   <br/>Kya Baat Hai <br /> (Open Mic)</div>
              <div className="absolute z-[14] bottom-37 text-2xl left-11.5 fancy-script2 text-center w-[230px]">Be it poetry, stand-up, or a heartfelt story—this stage is yours. Shine under the spotlight and let the audience say, “Wah Wah Kya Baat Hai!”</div>
              <div className="cursor-pointer"  onClick={() => window.open("https://forms.gle/XCGtkpEdLQJGNjXP8", "_blank")}>
                <img src={register} className="absolute bottom-[19px] -left-8  scale-150"  />
              </div>
          </div>
          <div className="flex-shrink-0 w-full flex justify-center relative text-white h-[515px]">
            <img src={homeImg2} className="w-[90%] h-[400px] rounded-lg " />
              <div className="absolute z-[14] top-24 left-23 text-4xl fancy-script1 text-center">Antakshri</div>
              <div className="absolute z-[14] bottom-46 text-2xl left-11.5 fancy-script2 text-center w-[230px]">Where music, fun, and nostalgia come alive! Sing your heart out and let the rhythm of melodies decide the winner.</div>
              <div className="cursor-pointer"  onClick={() => window.open("https://forms.gle/JXWPqJ61cShzNSkf6", "_blank")}>
                <img src={register} className="absolute bottom-[19px] -left-8  scale-150"  />
              </div>
          </div>
          <div className="flex-shrink-0 w-full flex justify-center relative text-white h-[515px]">
            <img src={homeImg3} className="w-[90%] h-[400px] rounded-lg translate-x-1" />
              <div className="absolute z-[14] top-18 left-21 text-4xl fancy-script1 text-center">Sukkon-E-  <br/>Shaam <br/>(Mushaira)</div>
              <div className="absolute z-[14] bottom-39 text-2xl left-11.5 fancy-script2 text-center w-[230px]">An evening of soulful poetry, laughter, and emotions. Celebrate the beauty of Urdu and Hindi verses under one roof.</div>
              <div className="cursor-pointer"  onClick={() => window.open("https://forms.gle/TsTFg8vmLb6wtkje6", "_blank")}>
                <img src={register} className="absolute bottom-[19px] -left-8  scale-150"  />
              </div>
          </div>
          <div className="flex-shrink-0 w-full flex justify-center relative text-white h-[515px]">
            <img src={homeImg} className="w-[90%] h-[400px] rounded-lg -translate-x-0.5" />
              <div className="absolute z-[14] top-16 left-33 text-4xl fancy-script1 text-center">Vlog   <br/>Fest </div>
              <div className="absolute z-[14] bottom-44 text-2xl left-11.5 fancy-script2 text-center w-[230px]">Showcase your creativity behind the lens and storytelling on screen. Capture the world your way and let your vlog steal the spotlight.</div>
              <div className="cursor-pointer"  onClick={() => window.open("https://forms.gle/PNTBcDZE7G5qVNmX9y", "_blank")}>
                <img src={register} className="absolute bottom-[19px] -left-8  scale-150"  />
              </div>
          </div>
          <div className="flex-shrink-0 w-full flex justify-center relative text-white h-[515px]">
            <img src={homeImg2} className="w-[90%] h-[400px] rounded-lg translate-x-0.5" />
              <div className="absolute z-[14] top-19 left-28 text-4xl fancy-script1 text-center">Frame <br/>Clickers </div>
              <div className="absolute z-[14] bottom-46 text-2xl left-11.5 fancy-script2 text-center w-[230px]">One click, endless stories! Bring your vision to life through photography and frame the moments that speak louder than words.</div>
              <div className="cursor-pointer"  onClick={() => window.open("https://forms.gle/NqX8wCpRUAhiKEiZ7", "_blank")}>
                <img src={register} className="absolute bottom-[19px] -left-8  scale-150"  />
              </div>
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

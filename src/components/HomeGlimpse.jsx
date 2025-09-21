import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import glip1 from '../assets/glimpse1.png'
import glip2 from '../assets/glimpse2.png'
import glip3 from '../assets/glimpse3.png'
import InstagramEmbed from "../data/InstagramEmbed";

const HomeGlimpse = () => {

    const images = [glip1, glip2, glip3];

    const reelUrls = [
        "https://www.instagram.com/reel/DOvZMPQEQ7v/?igsh=ZXdtZmdpZWI4NGl3",
        "https://www.instagram.com/reel/DOy5J58kmFs/?igsh=MTE1ZXJwYWFyOHFnYw==",
        "https://www.instagram.com/reel/DOYA73EEalt/?igsh=YXNxYzFtMXZsM2hm",
    ];

    const [current, setCurrent] = useState(0);

    const handlePrev = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

  return (
    <div className=" overflow-x-hidden">
      {/* Top Section */}
      <div className="bg-[#e8b9b0] pb-10 relative">
        <div>
          <p className="myText text-[#a46666] text-5xl font-light tracking-wider text-center pt-9">
            Literature Fest
          </p>
          <div className="flex mt-[-0.7rem] ml-[30.3rem] max-md:ml-0 max-md:justify-center">
            <div className="taper-line mt-[1rem]"></div>
            <p className="text-[#a46666] font-crimson text-3xl">2K25</p>
            <div className="taper-line mt-[1rem]"></div>
          </div>
          <p className="myText text-[#a46666] md:text-7xl text-4xl font-light tracking-wider text-center ml-2 mt-[-0.7rem] md:mt-[-1rem]">
            Lives & Glimpse
          </p>
        </div>

        {/* Desktop Images */}
        <div className="hidden md:flex justify-center -mt-5 gap-5">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              className="w-[502px] h-[305px] object-cover rounded-xl"
            />
          ))}
        </div>
      </div>

      {/* Desktop Boxes */}
      <div className="bg-[#f8f4f4] pt-8 -translate-y-18 pb-20 hidden md:flex justify-center gap-36">
            {reelUrls.map((url, i) => (
                <div key={i} className="my-box2 translate-x-2">
                <InstagramEmbed url={url} />
                </div>
            ))}
        </div>

      {/* Mobile Carousel (Image + Box move together) */}
      {/* Mobile Carousel */}
    {/* Mobile Carousel */}
    <div className="md:hidden bg-[#f8f4f4] pb-12">
        <div className="flex flex-col items-center -translate-x-2 relative bgk">
            <div className="absolute w-full h-[207px] bg-[#c78a7d] z-[-10] -top-2 left-2"></div>

            {/* Image */}
            <img
            src={images[current]}
            className={`w-[95%] h-[220px] mx-auto rounded-xl mb-6
                ${current === 2 ? "object-contain -translate-x-2" : "object-cover"}
            `}
            />

            {/* All reels rendered, only current is visible */}
            {reelUrls.map((url, i) => (
            <div
                key={i}
                className={`${i === current ? "block" : "hidden"} w-[80%]`}
            >
                <InstagramEmbed url={url} />
            </div>
            ))}

            {/* Buttons */}
            <div className="absolute top-1/3 w-full flex justify-between px-4">
            <button
                onClick={handlePrev}
                className="bg-[#a46666] text-white p-2 rounded-full -translate-y-25"
            >
                <FaChevronLeft />
            </button>
            <button
                onClick={handleNext}
                className="bg-[#a46666] text-white p-2 rounded-full -translate-y-25"
            >
                <FaChevronRight />
            </button>
            </div>

            {/* Dots */}
            <div className="flex mt-6 gap-3">
            {images.map((_, i) => (
                <div
                key={i}
                className={`transition-all duration-300 rounded-full ${
                    i === current
                    ? "w-5 h-5 bg-[#a46666] -translate-y-1"
                    : "w-3 h-3 bg-gray-400"
                }`}
                ></div>
            ))}
            </div>
        </div>
    </div>




    </div>
  )
}

export default HomeGlimpse
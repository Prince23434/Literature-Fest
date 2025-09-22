import React from 'react'
import logo1 from '../assets/bank1.webp'
import logo2 from '../assets/bhojnam.webp'
import logo3 from '../assets/namo_sandwich.webp'
import logo4 from '../assets/south_shallly.webp'

const HomePartners = () => {
  return (
    <div className="bg-white pb-10 md:pb-25 overflow-x-hidden">
      {/* Heading */}
      <div>
        <p className="myText text-[#a46666] text-3xl sm:text-5xl font-light tracking-wider text-center pt-9">
          Literature Fest
        </p>

        <div className="flex justify-center items-center -mt-2 mb-2">
          <div className="taper-line mt-3"></div>
          <p className="text-[#a46666] font-crimson text-2xl sm:text-3xl mx-2">
            2K25
          </p>
          <div className="taper-line mt-3"></div>
        </div>

        <p className="myText text-[#a46666] text-4xl sm:text-7xl font-light tracking-wider text-center -mt-3">
          Partners
        </p>
      </div>

      {/* Logos */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-12 w-11/12 mx-auto mt-10 sm:mt-20">
        <div className="flex items-center justify-center h-[100px] sm:h-[180px]">
          <img src={logo1} className="scale-90" alt="partner 1" />
        </div>
        <div className="flex items-center justify-center h-[100px] sm:h-[180px]">
          <img src={logo2} className="scale-80" alt="partner 2" />
        </div>
        <div className="flex items-center justify-center h-[100px] sm:h-[180px]">
          <img src={logo3} className="scale-80" alt="partner 3" />
        </div>
        <div className="flex items-center justify-center h-[100px] sm:h-[180px]">
          <img src={logo4} className="scale-90" alt="partner 4" />
        </div>
      </div>
    </div>
  )
}

export default HomePartners
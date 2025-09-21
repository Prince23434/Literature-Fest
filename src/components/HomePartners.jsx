import React from 'react'
import logo1 from '../assets/bank1.jpg'
import logo2 from '../assets/bhojnam.png'
import logo3 from '../assets/namo_sandwich.png'
import logo4 from '../assets/south_shallly.png'

const HomePartners = () => {
  return (
    <div className='bg-white pb-30 overflow-x-hidden'>
        <div>
            <p className='myText text-[#a46666] text-3xl sm:text-5xl font-light tracking-wider text-center pt-9'>
            Literature Fest
            </p>

            <div className='flex mt-[-0.7rem] md:ml-[30.3rem] mb-1'>
                <div className='taper-line mt-[1rem]'></div>
                <p className='text-[#a46666] font-crimson text-3xl '>2K25</p>
                <div className='taper-line mt-[1rem]'></div>
            </div>

            <p className='myText text-[#a46666] text-4xl sm:text-7xl font-light tracking-wider text-center mt-[-1.1rem]'>
            Partners
            </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-4 w-11/12 sm:w-14/15 mx-auto mt-10 sm:mt-20 gap-6 sm:gap-8 ml-13 '>
            <div className='h-[120px] sm:h-[180px] '>
              <img src={logo1} className='scale-90' />
            </div>
            <div className='h-[120px] sm:h-[180px] '>
              <img src={logo2} className='scale-80 -translate-y-26' />
            </div>
            <div className='h-[120px] sm:h-[180px] '>
              <img src={logo3} className='scale-80 -translate-y-26' />
            </div>
            <div className='h-[120px] sm:h-[180px] '>
              <img src={logo4} className='scale-90 -translate-y-26' />
            </div>
        </div>
    </div>
  )
}

export default HomePartners
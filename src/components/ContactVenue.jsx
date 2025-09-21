import React from 'react'

const ContactVenue = () => {
  return (
    <div className='bg-[#e8b9b0] pb-22'>
        <div>
            <p className='myText text-[#a46666] text-5xl font-light tracking-wider text-center pt-9'>Literature Fest</p>
            <div className='flex mt-[-0.7rem] md:ml-[30.3rem] mb-1'>
                <div className='taper-line mt-[1rem]'></div>
                <p className='text-[#a46666] font-crimson text-3xl '>2K25</p>
                <div className='taper-line mt-[1rem]'></div>
            </div>
            <p className='myText text-[#a46666] text-7xl font-light tracking-wider text-center mt-[-1.1rem]'>Venue</p>
        </div>
        <div className="w-10/12 mx-auto mt-16">
            <iframe
                src="https://maps.google.com/maps?hl=en&q=Aghora%20Garden,%20Rajasthan%20Technical%20University+(SAC%20UTSAV)&t=h&z=17&ie=UTF8&iwloc=B&output=embed"
                className="w-full h-[300px] md:h-[800px] rounded-lg shadow-md"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>
        </div>

    </div>
  )
}

export default ContactVenue
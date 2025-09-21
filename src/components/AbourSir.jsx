import sl from '../assets/images/sir.png'
import road1 from '../assets/road1.png'

const AbourSir = () => {
  return (
    <div className='bg-white -mt-16 md:-mt-9 relative pt-20 z-10'>
        <div className='flex flex-col lg:flex-row w-11/12 justify-between mx-auto gap-10 relative'>
            
            {/* Coordinator Card */}
            <div className='bg-[#e8b9b0] h-auto lg:h-[435px] w-full lg:w-[26%] font-canva-sans p-4 rounded-2xl flex flex-col text-center gap-3'>
                <img src={sl} className='rounded-2xl object-cover w-full h-64 lg:h-auto' />
                <div className='font-bold'>
                    <div className='text-[#3f4782] text-3xl lg:text-4xl'>S.L Meena</div>
                    <div className='text-[#3f4782] text-xl lg:text-2xl'>Assoc. Professor</div>
                    <div className='text-[#3f4782] text-xl lg:text-2xl'>Faculty Coordinator</div>
                </div>
            </div>

            {/* Text Content */}
            <div className='fancy-script2 text-[1.25rem] sm:text-[1.5rem] lg:text-[2rem] font-extralight w-full lg:w-[74%]'>
            <span className='font-bold'>Literature Fest 2025</span> is a celebration of stories and expression, where emotions find words and culture finds its voice aimed to make RTU not only a technical campus but a cultural hub where literature lives and breathes among students. This fest brings back the charm of books, poetry, and heartfelt conversations. Competitions like debates, storytelling, and poetry provide a platform for students to express themselves, shine with confidence, and celebrate their creativity. More than just a series of events, Literature Fest is a space where writers, readers, and dreamers come together to share ideas and imagination.
            <br />
            <span className='font-bold'>Let’s make some memories never going to fade!!</span>
            </div>

            {/* Decorative Road Image */}
            <img src={road1} className='hidden lg:block absolute -left-3/8 -ml-4 z-[-10]' />
        </div>
        </div>
  )
}

export default AbourSir
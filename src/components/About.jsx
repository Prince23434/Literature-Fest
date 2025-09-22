import sl from '../assets/images/sir.png'
import road1 from '../assets/road1b.png'
import road2 from '../assets/road2.png'
import road3 from '../assets/road3.png'
import img from '../assets/images/ankit.png'
import img2 from '../assets/images/akshay.png'
import img3 from '../assets/images/happy.jpg'
import logo1 from '../assets/ankitlogo.png'
import logo2 from '../assets/akshaylogo.png'
import logo3 from '../assets/happylogo.png'


const About = () => {
  return (
    <div className='bg-white mt-10 md:mt-36 relative pb-20 z-10 shadow-lg my-boxx overflow-hidden'>
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
                About
            </p>
        </div>
        {/* Section 1 */}
        <div className='flex flex-col lg:flex-row w-11/12 justify-between mx-auto md:gap-30 md:pb-16 gap-10 relative pt-14'>
                {/* Image Card */}
            <div className='bg-[#e8b9b0] h-auto lg:h-[420px] w-full lg:w-[26%] font-canva-sans p-4 rounded-2xl flex flex-col text-center gap-3'>
                <div className='h-64 lg:h-[350px] w-full lg:w-[300px] rounded-2xl relative z-[12] overflow-hidden mx-auto'>
                    <img src={img} className="scale-300 translate-y-35 object-cover"/>
                </div>
                <div className='font-bold'>
                    <div className='text-3xl lg:text-4xl text-[#3f4782]'>Ankit Mishra</div>
                    <div className='text-xl lg:text-2xl text-[#3f4782]'>Founder</div>
                    <div className='text-xl lg:text-2xl text-[#3f4782]'>bade saab</div>
                </div>
            </div>

            <img src={logo1} className='absolute -top-8 -left-30 h-[180px] z-[12]' />

                {/* Text Content */}
            <div className='fancy-script2 text-[1.25rem] sm:text-[1.5rem] lg:text-[2rem] font-extralight w-full lg:w-[74%] -ml-0 lg:-ml-14'>
                <span className='font-bold'>The Literature Club</span>, RTU traces its roots back to the vision of our respected senior <span className='font-bold'>Ankit Mishra</span>, who laid the foundation in <span className='font-bold'>2021</span>. What began as a small initiative dedicated to the love for Hindi literature was named <span className='font-bold'>“ कलम”</span> (Kalam) – symbolizing the pen as a tool of expression, creativity, and change.<br />
                Under his guidance, the club initially thrived as a <span className='font-bold'>“ हिंदी सेवी क्लब”</span>, nurturing a community of students passionate about language, poetry, and storytelling. His unwavering dedication and belief in the power of words inspired many to come forward and celebrate literature in its purest form.
            </div>

                {/* Decorative Road Image */}
            <img src={road1} className='hidden lg:block absolute top-[-160px] ml-[72.4px] z-[-9] rotate-180' />
        </div>

            {/* Section 2 */}
        <div className='flex flex-col-reverse lg:flex-row w-11/12 justify-between mx-auto gap-10 relative md:pt-40 pt-20'>
            {/* Left Text */}
            <div className='fancy-script2 text-[1.25rem] sm:text-[1.5rem] lg:text-[2rem] font-extralight w-full lg:w-[74%] ml-0 lg:ml-14 translate-y-0 lg:translate-y-8'>
                Under the valuable supervision of our senior <span className='font-bold'>Akshay Mahawar</span>, the club entered a new phase of growth. In <span className='font-bold'>2024</span>, under his guidance, <span className='font-bold'>“कलम – हिंदी सेवी क्लब”</span> was renamed as the <span className='font-bold'>Literature Club ~ The Scribbling Society</span>.<br />
                This transformation marked the extension of the club’s scope beyond Hindi, welcoming literature of diverse languages, genres, and forms. His vision helped the club evolve into an inclusive platform that continues to encourage creativity, expression, and literary exploration among students.
            </div>

            <img src={logo2} className='absolute md:top-17 top-1 -right-33 md:-right-43 md:h-[220px] z-[12]' />

            {/* Right Image Card */}
            <div className='bg-[#e8b9b0] h-auto lg:h-[420px] w-full lg:w-[26%] font-canva-sans p-4 rounded-2xl flex flex-col text-center gap-3 z-[11]'>
                <div className='h-64 lg:h-[350px] w-full lg:w-[300px] rounded-2xl relative z-[12] overflow-hidden mx-auto'>
                    <img src={img2} className="translate-y-5 translate-x-6 scale-175 w-full h-full object-cover"/>
                </div>
                <div className='font-bold'>
                    <div className='text-3xl lg:text-4xl text-[#3f4782]'>Akshay Mahavar</div>
                    <div className='text-xl lg:text-2xl text-[#3f4782]'>Co Founder</div>
                    <div className='text-xl lg:text-2xl text-[#3f4782]'>chote saab</div>
                </div>
            </div>

            {/* Decorative Road Image */}
            <img src={road2} className='hidden lg:block absolute top-[-301.8px] ml-[-20px] z-[-10] scale-x-115' />
        </div>

            {/* Section 3 */}
        <div className='bg-white -mt-9 relative md:pt-35 pt-20 z-10'>
            <div className='flex flex-col lg:flex-row w-11/12 justify-between mx-auto gap-10 md:gap-40 relative md:pt-20'>
                {/* Image Card */}
                <div className='bg-[#e8b9b0] h-auto lg:h-[420px] w-full lg:w-[26%] font-canva-sans p-4 rounded-2xl flex flex-col text-center gap-3'>
                    <div className='h-64 lg:h-[350px] w-full lg:w-[300px] rounded-2xl relative z-[12] overflow-hidden mx-auto'>
                        <img src={img3} className="-translate-y-6  object-cover"/>
                    </div>
                    <div className='font-bold'>
                        <div className='text-3xl lg:text-4xl text-[#3f4782]'>Happy Saini</div>
                        <div className='text-xl lg:text-2xl text-[#3f4782]'>Secretary</div>
                        <div className='text-xl lg:text-2xl text-[#3f4782]'>ye bhi h kuch</div>
                    </div>
                </div>

                <div className='rounded-full md:h-[160px] md:w-[160px] h-[100px] w-[100px] absolute md:top-4 -top-8 -left-4 md:-left-10 z-[12] overflow-hidden'>
                    <img src={logo3} className='translate-y-5 md:translate-y-9 scale-230' />
                </div>

                    {/* Text Content */}
                <div className='fancy-script2 text-[1.25rem] sm:text-[1.5rem] lg:text-[2rem] font-extralight w-full lg:w-[74%] -ml-0 md:-ml-14 translate-y-0 lg:translate-y-14'>
                    Under the leadership of our current secretary <span className='font-bold'>Happy Saini</span> , the <span className='font-bold'>Literature Club ~ The Scribbling Society</span> entered a phase of remarkable growth. His vision led to collaborations with the <span className='font-bold'>Kota Comedy Club (KCC)</span>, renowned authors, and our esteemed alumni and faculty. With his guidance, the club got the privilege to host the <span className='font-bold'>SAC UTSAV (Literature Fest) 2025</span>, a milestone that reflects its evolution into a vibrant hub of creativity and literary excellence.
                </div>

                    {/* Decorative Road Image */}
                <img src={road3} className='hidden lg:block absolute left-0 -top-96 z-[-10] scale-x-110' />
            </div>
        </div>

    </div>
  )
}

export default About
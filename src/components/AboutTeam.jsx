import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import img from '../assets/images/vinayak.webp'
import img0 from '../assets/images/kartik.webp'
import img1 from '../assets/images/nutan.webp'
import img2 from '../assets/images/palak.webp'
import img3 from '../assets/images/yamini.webp'
import img4 from '../assets/images/bhumika.webp'
import img5 from '../assets/images/abdul.webp'
import img6 from '../assets/images/harshit.webp'
import img7 from '../assets/images/kapil.webp'
import img8 from '../assets/images/aarav.webp'
import img9 from '../assets/images/shradha.webp'
import img10 from '../assets/images/chitra.webp'
import img11 from '../assets/images/madan.webp'
import img12 from '../assets/images/chitvansh.webp'
import img13 from '../assets/images/chitransh.webp'
import img14 from '../assets/images/aayushi.webp'
import img15 from '../assets/images/dhara.webp'
import img16 from '../assets/images/nitin.webp'
import img17 from '../assets/images/raja.webp'
import img18 from '../assets/images/shreya.webp'
import img19 from '../assets/images/azhar.webp'
import img20 from '../assets/images/chetna.webp'
import img21 from '../assets/images/poorva.webp'
import img22 from '../assets/images/rohit.webp'
import img23 from '../assets/images/priya.webp'
import img24 from '../assets/images/palak2.webp'
import { useEffect, useRef, useState } from "react";


const AboutTeam = () => {

    const contributors = [
        { name: "Nitin", img: img16 },
        { name: "Raja Ul Pathan", img: img17 },
        { name: "Shreya Sharma", img: img18 },
        { name: "Azhar", img: img19 },
        { name: "Chetna", img: img20 },
        { name: "Poorva", img: img21 },
        { name: "Rohit", img: img22 },
        { name: "Priya Jangid", img: img23 },
        { name: "Palak", img: img24 }
    ];

    const trackRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);
    const animationRef = useRef(null);

    useEffect(() => {
        const track = trackRef.current;

        if (!track) return;

        // total scroll width / 2 (since we duplicated contributors)
        const totalWidth = track.scrollWidth / 2;

        // create animation
        animationRef.current = track.animate(
        [
            { transform: "translateX(0)" },
            { transform: `translateX(-${totalWidth}px)` },
        ],
        {
            duration: 40000, // slower for many images
            iterations: Infinity,
            easing: "linear",
        }
        );

        return () => animationRef.current?.cancel();
    }, []);

    useEffect(() => {
        if (animationRef.current) {
        if (isPaused) {
            animationRef.current.pause();
        } else {
            animationRef.current.play();
        }
        }
    }, [isPaused]);

  return (
    <div className='bg-[#f8f4f4] mt- relative z-10 overflow-x-hidden'>
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
                Team
            </p>
        </div>
        <div className='fancy-script2 text-center text-[70px] -ml-4 md:ml-0 md:text-9xl pt-5 text-[#a46665]'>Coordinators</div>
        <div className='flex w-10/12 mx-auto justify-between pt-14 text-center text-[#a46665] myText ml-50 md:flex-row md:gap-0 gap-20 flex-col'>
            <div className="-translate-x-48.5 md:translate-0">
                <div className='md:h-[500px] md:w-[400px] rounded-4xl relative z-[12] overflow-hidden md:translate-0 translate-x-6'>
                    <img src={img} className='z-[10] scale-125' />
                </div>
                <p className='text-4xl md:text-7xl translate-x-6 md:translate-0 md:-ml-20'>Vinayak Sharma</p>
                <p className='text-3xl md:text-5xl translate-x-6 md:translate-0 md:-ml-20 pt-2'>Coordinator</p>
            </div>
            <div className="-translate-x-48.5 md:translate-0">
                <div className='md:h-[500px] md:w-[400px]  rounded-4xl relative z-[12] overflow-hidden md:translate-0 translate-x-6'>
                    <img src={img0} className='z-[10] scale-175 -translate-x-12 -translate-y-22' />
                </div>
                <p className='text-4xl md:text-7xl whitespace-nowrap translate-x-6 md:translate-0 md:-ml-20'>Kartik Maheswari</p>
                <p className='text-3xl md:text-5xl translate-x-6 md:translate-0 md:-ml-20 pt-2'>Co-Coordinator</p>
            </div>
        </div>
        <div className='bg-white mt-10 pb-20'>
            <div className='fancy-script2 text-center text-[90px] md:text-9xl pt-5 text-[#a46665]'>Advisory</div>
            <div className='flex w-10/12 mx-auto justify-between pt-14 text-center text-[#a46665] myText md:flex-row flex-col md:gap-0 gap-20'>
                <div className="-translate-x-6 md:translate-0">
                    <img src={img1}className='h-[400px] w-[300px] rounded-2xl' />
                    <p className='text-4xl'>Nutan Sharma</p>
                </div>
                <div className="translate-x-6 md:translate-0">
                    <div className='h-[400px] w-[300px] rounded-2xl relative z-[12] overflow-hidden'>
                        <img src={img2} className='z-[10] scale-175 translate-y-20 translate-x-12 ' />
                    </div>
                    <p className='text-4xl'>Palak Yadav</p>
                </div>
                <div className="-translate-x-6 md:translate-0">
                    <img src={img3} className='h-[400px] w-[300px] rounded-2xl' />
                    <p className='text-4xl md:translate-0 -translate-x-1'>Yamini Hada</p>
                </div>
            </div>
        </div>
        <div className='mt-10'>
            <div className='fancy-script2 text-center text-9xl pt-5 text-[#a46665]'>Leads</div>
            <div className='flex w-10/12 mx-auto justify-center pt-14 text-center text-[#a46665] myText flex-wrap gap-20 items-center'>
                <div className="translate-x-6 md:translate-0">
                    <div className='h-[350px] w-[300px] rounded-2xl relative z-[12] overflow-hidden'>
                        <img src={img4} className="-translate-y-6" />
                    </div>
                    <p className='text-4xl'>Bhumika Nama</p>
                <p className='text-2xl pt-2'>Event-Lead</p>
                </div>
                <div className="-translate-x-11 md:translate-0 ml-10">
                    <div className='h-[350px] w-[300px] rounded-2xl relative z-[12] overflow-hidden'>
                        <img src={img5} className="scale-125 translate-y-8 -translate-x-8" />
                    </div>
                    <p className='text-4xl'>Abdul Kalam Gori</p>
                <p className='text-2xl pt-2'>Management Lead</p>
                </div>
                <div className="translate-x-1 md:translate-0">
                    <div className='h-[350px] w-[300px] rounded-2xl relative z-[12] overflow-hidden ml-10'>
                        <img src={img6} className="-translate-y-6 translate-x-" />
                    </div>
                    <p className='text-4xl md:translate-x-5 translate-x-5'>Harshit Meghwal</p>
                    <p className='text-2xl md:translate-x-5 translate-x-5 pt-2'>Event-Lead</p>
                </div>
                <div className="-translate-x-4 md:translate-0">
                    <div className='h-[350px] w-[300px] rounded-2xl relative z-[12] overflow-hidden -ml-4'>
                        <img src={img7} className="translate-y-6 scale-125" />
                    </div>
                    <p className='text-4xl -ml-6'>Kapil Meena</p>
                <p className='text-2xl -ml-10 pt-2'>Graphic Lead</p>
                </div>
                <div className="translate-x-3 md:translate-0">
                    <div className='h-[350px] w-[300px] rounded-2xl relative z-[12] overflow-hidden ml-6'>
                        <img src={img8} className="-translate-y-16" />
                    </div>
                    <p className='text-4xl md:translate-x-3 translate-x-2'>Aarav Chouhan</p>
                <p className='text-2xl pt-2 md:translate-x-3 translate-x-2'>Videography</p>
                </div>
            </div>
        </div>
        <div className='mt-10 pb-20 bg-white'>
            <div className='fancy-script2 text-center text-9xl pt-5 text-[#a46665]'>Core Team</div>
            <div className='flex w-10/12 mx-auto justify-center pt-14 text-center text-[#a46665] myText flex-wrap gap-20 items-center'>
                <div className='flex flex-col gap-30'>
                    <div className="-translate-x-3 md:translate-0">
                        <img src={img9} className='h-[350px] w-[300px] rounded-2xl' />
                        <p className='text-4xl -translate-x-4'>Shradha Rao</p>
                    </div>
                    <div>
                        <div className='h-[350px] w-[300px] rounded-2xl relative z-[12] overflow-hidden ml-6 translate-x-3 md:translate-0'>
                            <img src={img10} className="-translate-y-3 -translate-x-8 scale-125" />
                        </div>
                        <p className='text-4xl md:translate-x-3 translate-x-5'>Chitra Saini</p>
                    </div>
                </div>
                <div className='flex flex-col gap-30'>
                    <div className="-translate-x-12 md:translate-0">
                        <div className='h-[350px] w-[300px] rounded-2xl relative z-[12] overflow-hidden ml-12'>
                            <img src={img11} className="-translate-y-56" />
                        </div>
                        <p className='text-4xl translate-x-6'>Madan Jat</p>
                    </div>
                    <div>
                        <div className='h-[350px] w-[300px] rounded-2xl relative z-[12] overflow-hidden ml-12'>
                            <img src={img12} className="-translate-y-20" />
                        </div>
                        <p className='text-4xl md:translate-x-8.5 translate-x-5 md:-ml-4'>Chitvansh Agarwal</p>
                    </div>
                    <div className="-translate-x-12 md:translate-0">
                        <img src={img13}  className='h-[350px] w-[300px] rounded-2xl ml-12' />
                        <p className='text-4xl translate-x-6'>Chitransh Singh</p>
                    </div>
                </div>
                <div className='flex flex-col gap-30'>
                    <div>
                        <div className='h-[350px] w-[300px] rounded-2xl relative z-[12] overflow-hidden ml-12'>
                            <img src={img14} className="-translate-y-30" />
                        </div>
                        <p className='text-4xl md:translate-x-7 translate-x-6'>Ayushi Khemka</p>
                    </div>
                    <div>
                        <img src={img15}  className='h-[350px] w-[300px] rounded-2xl md:translate-x-13 translate-0' />
                        <p className='text-4xl md:translate-x-8 -translate-x-5'>Dhara Khatri</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-10 pb-20 relative bg-[#f8f4f4]">
            <div className="fancy-script2 text-center text-6xl md:text-9xl pt-5 text-[#a46665]">
                Contributors
            </div>

            <div
                className="relative w-10/12 md:w-10/12 mx-auto overflow-hidden pt-16"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* Fade overlays with #f8f4f4 */}
                <div className="pointer-events-none absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-[#f8f4f4] to-transparent z-10" />
                <div className="pointer-events-none absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-[#f8f4f4] to-transparent z-10 md:mr-0 mr-[-1px]" />

                {/* Sliding track */}
                <div ref={trackRef} className="flex gap-8 transition-none w-max">
                {[...contributors, ...contributors].map((c, i) => (
                    <div
                    key={i}
                    className="flex-shrink-0 w-[250px] flex flex-col items-center text-center text-[#a46665]"
                    >
                    <div className="h-[300px] w-[250px]  rounded-lg overflow-hidden">
                        <img
                        src={c.img}
                        alt={c.name}
                        className="w-full h-full object-cover"
                        />
                    </div>
                    <p className="text-xl md:text-3xl mt-4">{c.name}</p>
                    </div>
                ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutTeam
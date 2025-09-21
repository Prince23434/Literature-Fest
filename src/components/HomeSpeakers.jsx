
import img from '../assets/images/vinayak.jpg'
import img1 from '../assets/authors/bhupendra.jpg'
import img2 from '../assets/authors/jitendra.jpg'
import img3 from '../assets/authors/faani.jpg'
import img4 from '../assets/authors/babu.jpg'
import img5 from '../assets/authors/tanmay.jpg'
import img6 from '../assets/authors/aayush.jpg'
import img7 from '../assets/authors/gautam.jpg'
import { useEffect, useRef, useState } from "react";

const HomeSpeakers = () => {

    const contributors = [
            { name: "Bhupendra Singh Rathore", img: img1 },
            { name: "Jitendra Nirmohi", img: img2 },
            { name: "Malik Rizwan Fani", img: img3 },
            { name: "Babu Banajara", img: img4 },
            { name: "Tanmay Nandre", img: img5},
            { name: "Aayush Mishra", img: img6},
            { name: "Gautam Choubey", img: img7}
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
    <div className='bg-[#e8b9b0] pb-20'>
        <div>
            <p className='myText text-[#a46666] text-3xl sm:text-5xl font-light tracking-wider text-center pt-9'>
            Literature Fest
            </p>

            <div className='flex mt-[-0.7rem] md:ml-[30.3rem] mb-1'>
            <div className='taper-line mt-[1rem]'></div>
            <p className='text-[#a46666] font-crimson text-3xl'>2K25</p>
            <div className='taper-line mt-[1rem]'></div>
            </div>

            <p className='myText text-[#a46666] text-4xl sm:text-7xl font-light tracking-wider text-center mt-[-1rem]'>
            Speakers
            </p>
        </div>

        <div
                className="relative w-11/12 md:w-10/12 mx-auto overflow-hidden pt-16"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* Fade overlays with #f8f4f4 */}
                <div className="pointer-events-none absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-[#e8b9b0] to-transparent z-10" />
                <div className="pointer-events-none absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-[#e8b9b0] to-transparent z-10" />

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

  )
}

export default HomeSpeakers
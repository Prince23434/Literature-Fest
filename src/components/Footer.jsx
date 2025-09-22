import footer from '../assets/Footer.jpg'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import youtube from '../assets/youtube.png'
import linkedin from '../assets/Linkedin.png'
import { useNavigate } from 'react-router-dom'

const Footer = ({title}) => {

    const navigate = useNavigate();

    const goToInstagram = () => {
        window.open("https://www.instagram.com/rtu_literature/", "_blank");
    };
    const goToLinkedin = () => {
        window.open("https://www.linkedin.com/company/literatureclub/", "_blank");
    };
    const goToYoutube = () => {
        window.open("https://youtube.com/@literatureclub-rtu?si=K-vtO_Oss7NLof4C", "_blank");
    };
    const goToFacebook = () => {
        window.open("https://www.facebook.com/share/1BBwEKJWEZ/", "_blank");
    };

  return (
    <div className={`-mt-10 relative bg-white ${title === 'home' ? 'md:pt-0' : 'pt-16'}`}>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-11/12 mx-auto gap-10'>
            {/* Social */}
            <div className='flex flex-col gap-5'>
            <div className='text-2xl sm:text-[42px] fancy-script1 translate-x-0 sm:translate-x-8'>
                Social
            </div>
            <div className='flex flex-col gap-5 sm:gap-7'>
                <div className='flex items-center gap-3'>
                    <img src={instagram} className={`w-18 sm:w-33 md:absolute ${title === 'home' ? 'md:top-[54px] md:left-[-10px]' : 'md:top-[120px] md:left-[-10px]'}`} />
                    <div className='text-base sm:text-xl fancy-script2 text-[#1698c8] md:translate-x-10 cursor-pointer hover:text-[#5a7be6] '
                        onClick={goToInstagram} >rtu_literature</div>
                </div>
                <div className='flex items-center gap-3'>
                    <img src={linkedin} className={`w-18 sm:w-33 md:absolute ${title === 'home' ? 'md:top-[112px] md:left-[-10px]' : 'md:top-[175px] md:left-[-10px]'}`} />
                    <div className='text-base sm:text-xl fancy-script2 text-[#1698c8] md:translate-x-10 cursor-pointer hover:text-[#5a7be6] '
                        onClick={goToLinkedin} >literatureclub</div>
                </div>
                <div className='flex items-center gap-3'>
                    <img src={youtube} className={`w-18 sm:w-33 md:absolute ${title === 'home' ? 'md:top-[170px] md:left-[-10px]' : 'md:top-[233px] md:left-[-10px]'}`} />
                    <div className='text-base sm:text-xl fancy-script2 text-[#1698c8] md:translate-x-10 cursor-pointer hover:text-[#5a7be6]' 
                        onClick={goToYoutube} >rtu_literature</div>
                </div>
                <div className='flex items-center gap-3'>
                    <img src={facebook} className={`w-18 sm:w-33 md:absolute ${title === 'home' ? 'md:top-[224px] md:left-[-10px]' : 'md:top-[287px] md:left-[-10px]'}`} />
                    <div className='text-base sm:text-xl fancy-script2 text-[#1698c8] md:translate-x-10 cursor-pointer hover:text-[#5a7be6]' 
                        onClick={goToFacebook} >literaturertu</div>
                </div>
            </div>
            </div>

            {/* Important Links */}
            <div className='flex flex-col gap-5'>
            <div className='text-2xl sm:text-[42px] fancy-script1'>Important Links</div>
            <div className='flex flex-col gap-3 sm:gap-5'>
                <div className='text-base sm:text-xl fancy-script2 text-[#1698c8] hover:text-[#5a7be6] cursor-pointer' 
                onClick={() => window.open("https://drive.google.com/file/d/1vJoa1AIRr5S4pk_AqFTFUUevBtP2jSi-/view?usp=drive_link", "_blank")}>    Schedule
                </div>
                <div className='text-base sm:text-xl fancy-script2 text-[#1698c8] hover:text-[#5a7be6] cursor-pointer' onClick={() => {navigate("/about")}}>Our Team</div>
                <div className='text-base sm:text-xl fancy-script2 text-[#1698c8] hover:text-[#5a7be6] cursor-pointer' onClick={() => {navigate("/contact")}}>Registration</div>
                <div className='text-base sm:text-xl fancy-script2 text-[#1698c8] hover:text-[#5a7be6] cursor-pointer' 
                onClick={() => window.open("https://drive.google.com/file/d/1s-AJdS-bWzsDhJNIA22lelvz_RVImboW/view?usp=drive_link", "_blank")} >   Rules
                </div>
                <div className='text-base sm:text-xl fancy-script2 text-[#1698c8] hover:text-[#5a7be6] cursor-pointer' onClick={() => {navigate("/contact")}}>Contact us</div>
            </div>
            </div>

            {/* Events */}
            <div className='flex flex-col gap-5'>
            <div className='text-2xl sm:text-[42px] fancy-script1'>Events</div>
            <div className='flex flex-col gap-3 sm:gap-5'>
                <div className='text-base sm:text-xl fancy-script2 text-[#0a506a]'>Aaja Bhidle</div>
                <div className='text-base sm:text-xl fancy-script2 text-[#0a506a]'>Sukoon e sham</div>
                <div className='text-base sm:text-xl fancy-script2 text-[#0a506a]'>wah wah kya baat hai</div>
            </div>
            </div>

            {/* Contact Us */}
            <div className='flex flex-col gap-5'>
            <div className='text-2xl sm:text-[42px] fancy-script1'>Contact Us</div>
            <div className="flex flex-col gap-3 sm:gap-5">
                <div
                    className="text-sm sm:text-2xl fancy-script2 cursor-pointer text-[#1698c8] hover:text-[#5a7be6]"
                    onClick={() => window.location.href = "mailto:literatureclubrtu@gmail.com"}
                >
                    literatureclubrtu@gmail.com
                </div>

                <div
                    className="text-sm sm:text-2xl fancy-script2 cursor-pointer text-[#1698c8] hover:text-[#5a7be6]"
                    onClick={() => window.location.href = "mailto:literatureclub@rtu.ac.in"}
                >
                    literatureclub@rtu.ac.in
                </div>

                <div
                    className="text-sm sm:text-2xl fancy-script2 cursor-pointer text-[#1698c8] hover:text-[#5a7be6]"
                    onClick={() => window.location.href = "mailto:coordinator@rtuliteraturefest.tech"}
                >
                    coordinator@rtuliteraturefest.tech
                </div>
                </div>
            </div>
        </div>

        {/* Footer background */}
        <img src={footer} className='scale-100 -translate-y-8 md:translate-0 md:scale-100 md:w-full md:-translate-y-40 absolute z-[-10]' />

        {/* Bottom bar */}
        <div className='bg-[#e8b9b0] text-sm sm:text-xl h-24 w-full flex flex-col justify-center items-center absolute bottom-[-12.9rem] md:bottom-[-33.3rem] z-[10]'>
            <p>RTU Literature Fest | All Rights Reserved</p>
            <p>RTU Literature Fest is an initiative by Literature Club, RTU</p>
        </div>
    </div>
  )
}

export default Footer
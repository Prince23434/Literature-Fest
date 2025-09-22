import homeImage from '../assets/homeImage.webp'
import logo from '../assets/logo.webp'
import homeCityImage from '../assets/temple.webp'

const Home = ({title}) => {
  return (
    <div className="relative w-full pb-7 md:pb-0">
      {/* Background image */}
      <img
        src={homeImage}
        className="
          w-full object-cover
          h-[60vh] sm:h-[70vh]   /* zoom in on phones */
          md:h-auto lg:h-auto    /* keep original on md & lg */
          object-center -mt-10 sm:-mt-12 md:-mt-24
        "
        alt="Background"
      />

      {/* Hero content */}
      <div className="absolute top-1/7 sm:top-1/7 md:top-1/7 left-1/2 -translate-x-1/2 text-center px-2 sm:px-4 z-10">
        <img
          src={logo}
          alt="Logo"
          className="w-48 md:w-64 lg:w-[400px] mx-auto"
        />

        <p
          className={
            title === "25-26th Sept 2025"
              ? "text-[#3f4782] md:text-2xl tracking-widest -mt-4 sm:-mt-5 font-bold myText"
              : "text-[#a46666] md:text-5xl tracking-widest -mt-3 sm:-mt-5 font-bold myText text-lg"
          }
        >
          {title}
        </p>

        <p className="myText text-2xl md:text-5xl lg:text-6xl text-[#a46666] tracking-wide font-light mx-auto whitespace-nowrap md:mt-0 -mt-1">
          Literature Fest
        </p>


        <p className="myText text-2xl lg:text-5xl text-[#a46666] tracking-wide flex justify-center items-baseline gap-1 sm:gap-2 whitespace-nowrap md:mt-0 -mt-1">
          <sup className="text-[#3f4782] -mt-4 sm:-mt-6 md:-mt-8 text-base md:text-xl font-sans">
            &amp;
          </sup>
          Book Fair
        </p>


        <p className="myText md:text-2xl lg:text-3xl text-[#3f4782] tracking-widest -mt-0.5 sm:mt-2 md:ml-0 ml-[-8.5rem] md:translate-0 translate-x-18">
          Rajasthan Technical University
        </p>
        <p className="myText md:text-2xl lg:text-3xl text-[#3f4782] tracking-widest">
          KOTA
        </p>
      </div>

      {/* City image */}
      <img
        src={homeCityImage}
        className="w-full object-cover absolute bottom-0 sm:h-32 md:h-auto lg:h-auto 
                  h-48 scale-100 sm:scale-100 md:scale-100 lg:scale-100 mb-[1rem] md:mb-[-5rem]"
        alt="Temple"
      />

    </div>
  )
}

export default Home

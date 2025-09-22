import { useState } from "react"
import clubImage from "../assets/clubimage.png"
import { NavLink, useNavigate } from "react-router-dom"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navigate = useNavigate()

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  function clickHandler(){
    navigate("/");
  }

  function clickHandler2(){
    navigate("/registration");
  }

  return (
    <div className="bg-[#e8b9b0] relative z-10">
      <div className="flex justify-between items-center w-11/12 mx-auto py-4">
        {/* Logo */}
        <div className="w-[60px]">
          <img src={clubImage} alt="Club Logo" className="scale-200 cursor-pointer" onClick={clickHandler} />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-[#660808] text-lg lg:text-2xl font-medium">
          <NavLink to='/'><div className="hover:text-[#3f4782] cursor-pointer">Home</div></NavLink>
          <NavLink to='/about'><div className="hover:text-[#3f4782] cursor-pointer">About</div></NavLink>
          <NavLink to='/event'><div className="hover:text-[#3f4782] cursor-pointer">Events</div></NavLink>
          <NavLink to='/contact'><div className="hover:text-[#3f4782] cursor-pointer">Contact Us</div></NavLink>
        </div>

        {/* Register Button (hidden on small screens) */}
        <div className="flex gap-10 relative">
          <div className="text-2xl translate-y-1 text-[#660808] underline hover:font-bold absolute right-75 cursor-pointer font-medium hidden md:block"
            onClick={() => window.open("https://drive.google.com/file/d/1vJoa1AIRr5S4pk_AqFTFUUevBtP2jSi-/view?usp=drive_link", "_blank")}>Schedule </div>
          <div className="text-2xl translate-y-1 text-[#660808] underline hover:font-bold absolute right-45 cursor-pointer font-medium hidden md:block"
           onClick={() => window.open("https://drive.google.com/file/d/1s-AJdS-bWzsDhJNIA22lelvz_RVImboW/view?usp=drive_link", "_blank")} >RuleBook</div>
          <button className="hidden md:block bg-[#b1dfe8] rounded-full px-5 py-2 text-lg lg:text-xl cursor-pointer hover:bg-[#31ceed] transition-all duration-175" onClick={clickHandler2} >
            Register Now
          </button>
        </div>

        {/* Mobile Hamburger / X button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Top bar */}
          <span
            className={`absolute w-6 h-0.5 bg-[#660808] transform transition-all duration-300 ease-in-out ${
              isOpen ? "rotate-45" : "-translate-y-2"
            }`}
          ></span>
          {/* Middle bar */}
          <span
            className={`absolute w-6 h-0.5 bg-[#660808] transition-all duration-300 ease-in-out ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          {/* Bottom bar */}
          <span
            className={`absolute w-6 h-0.5 bg-[#660808] transform transition-all duration-300 ease-in-out ${
              isOpen ? "-rotate-45" : "translate-y-2"
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu Dropdown with animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-4 py-4 bg-[#e8b9b0] text-[#660808] text-lg font-medium">
          <NavLink to='/'>
            <div className="hover:text-[#3f4782] cursor-pointer" onClick={handleLinkClick}>
              Home
            </div>
          </NavLink>
          <NavLink to='/about'>
            <div className="hover:text-[#3f4782] cursor-pointer" onClick={handleLinkClick}>
              About
            </div>
          </NavLink>
          <NavLink to='/event'>
            <div className="hover:text-[#3f4782] cursor-pointer" onClick={handleLinkClick}>
              Events
            </div>
          </NavLink>
          <NavLink to='/contact'>
            <div className="hover:text-[#3f4782] cursor-pointer" onClick={handleLinkClick}>
              Contact Us
            </div>
          </NavLink>

          {/* Schedule Link */}
          <div
            className="hover:text-[#3f4782] cursor-pointer underline"
            onClick={() => window.open("https://drive.google.com/file/d/1vJoa1AIRr5S4pk_AqFTFUUevBtP2jSi-/view?usp=drive_link", "_blank")}
          >
            Schedule
          </div>

          {/* RuleBook Link */}
          <div
            className="hover:text-[#3f4782] cursor-pointer underline"
            onClick={() => window.open("https://drive.google.com/file/d/1s-AJdS-bWzsDhJNIA22lelvz_RVImboW/view?usp=drive_link", "_blank")}
          >
            RuleBook
          </div>

          {/* Register Button */}
          <button
            className="bg-[#b1dfe8] rounded-full px-5 py-2 text-lg"
            onClick={() => navigate("/registration")}
          >
            Register Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar

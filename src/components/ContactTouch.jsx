import React, { useState } from 'react'
import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";


const ContactTouch = () => {
    const [formData, setFormData] = useState({
        firstName:"",lastName:"",email:"",numbers:"",message:""
  })

  function changeHandler(event){
    const {name,value,type,checked} = event.target
    setFormData((prevFormData) => {
      return{
        ...prevFormData,
        [name]: type == "checkbox" ? checked : value
      }
    })
  }
  return (
    <div className='bg-white -mt-16 md:-mt-9 relative z-10 pt-20 pb-20'>
        <div className='flex flex-col lg:flex-row justify-between w-10/12 mx-auto gap-10'>
            {/* Left: Form */}
            <div className='w-full lg:w-1/2'>
            <div className='fancy-script1 text-4xl sm:text-6xl text-center pb-4'>Get in Touch</div>
            <form className='myText'>
                <div className='flex flex-col sm:flex-row gap-3'>
                <div className='w-full sm:w-1/2'>
                    <label htmlFor='firstName' className='text-base font-medium leading-6 text-black'>First name</label>
                    <br />
                    <input 
                    type='text'
                    placeholder='Prince'
                    onChange={changeHandler}
                    name='firstName'
                    id='firstName'
                    value={formData.firstName}
                    className='border mt-2 rounded-md p-2 text-gray-900 shadow-sm fancy-script2 w-full'
                    />
                </div>

                <div className='w-full sm:w-1/2'>
                    <label htmlFor='lastName' className='text-base font-medium leading-6 text-gray-900'>Last name</label>
                    <br />
                    <input 
                    type='text'
                    placeholder='Yadav'
                    onChange={changeHandler}
                    name='lastName'
                    id='lastName'
                    value={formData.lastName}
                    className='border mt-2 rounded-md p-2 text-gray-900 shadow-sm fancy-script2 w-full'
                    />
                </div>
                </div>

                <br />
                <label htmlFor='email' className='leading-6 font-medium text-gray-900 text-base'>Email address</label>
                <br />
                <input 
                type='text'
                placeholder='Email'
                onChange={changeHandler}
                name='email'
                id='email'
                value={formData.email}
                className='border w-full p-2 mt-2 rounded-md text-gray-900 shadow-sm fancy-script2'
                />

                <br /> <br />
                <label htmlFor='numbers' className='leading-6 font-medium text-gray-900 text-base'>Phone No.</label>
                <br />
                <input 
                type='tel'
                placeholder='Mobile No.'
                onChange={changeHandler}
                name='numbers'
                id='numbers'
                value={formData.numbers}
                className='border w-full p-2 mt-2 rounded-md text-gray-900 shadow-sm fancy-script2'
                />

                <br /> <br />
                <label htmlFor='message' className='leading-6 font-medium text-gray-900 text-base'>Message</label>
                <br />
                <textarea 
                placeholder='type your query here'
                onChange={changeHandler}
                name='message'
                id='message'
                value={formData.message}
                className='border w-full h-[150px] p-2 mt-2 rounded-md text-gray-900 shadow-sm fancy-script2'
                />

                <button className='bg-[#e8b9b0] mt-15 py-3 px-14 rounded-4xl text-[#a46665] text-2 xl fancy-script2 font-bold'>Submit</button>

            </form>
            </div>

            {/* Right: Contact Info */}
            <div className='w-full lg:w-[40%]'>
            <p className='fancy-script1 text-4xl sm:text-6xl text-center pb-10'>
                RTU Literature Fest 
                <br />
                <span className='text-[2.2rem] sm:text-[2.75rem]'>-2025</span>
            </p>
            <div className='flex flex-col gap-10'>
                <div className='flex gap-5'>
                <MdLocationOn className='text-red-500 w-[40px] sm:w-[55px] h-[40px] sm:h-[53px]'/>
                <p className='text-base sm:text-xl font-medium leading-6 text-black myText'>
                    Rajasthan Technical University, <br /> Akelgarh, Rawatbhatta Road, Kota, 324010
                </p>
                </div>
                <div className='flex gap-5'>
                <FaPhoneAlt className='text-red-500 w-[35px] sm:w-[58px] h-[28px] sm:h-[35px]'/>
                <p className='text-base sm:text-xl font-medium leading-6 text-black myText'>+91 8058607229</p>
                </div>
                <div className='flex gap-5'>
                <FaPhoneAlt className='text-red-500 w-[35px] sm:w-[58px] h-[28px] sm:h-[35px]'/>
                <p className='text-base sm:text-xl font-medium leading-6 text-black myText'>+91 7618453227</p>
                </div>
                <div className='flex gap-5'>
                <IoIosMail className='text-red-500 w-[40px] sm:w-[60px] h-[30px] sm:h-[40px]'/>
                <p className='text-base sm:text-xl font-medium leading-6 text-black myText translate-y-2'>literatureclub@rtu.ac.in</p>
                </div>
                <div className='flex gap-5'>
                <IoIosMail className='text-red-500 w-[40px] sm:w-[60px] h-[30px] sm:h-[40px]'/>
                <p className='text-base sm:text-xl font-medium leading-6 text-black myText translate-y-2'>literatureclubrtu@gmail.com</p>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ContactTouch
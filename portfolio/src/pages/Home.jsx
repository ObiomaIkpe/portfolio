import React from 'react'
import { FaHashnode, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { SlSocialLinkedin } from "react-icons/sl";



import Navbar from '../components/Navbar'
import ComFooter from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className='gap-2'>

        <div className='flex flex-col md:flex-row h-screen items-center justify-evenly pt-15'>

          {/* div left */}
        <div className='flex flex-col items-center justify-center p-4'>
          <img
          className='h-[300px] w-[300px] rounded-full shadow-red-shadow'
          src='../../src/images/me200.jpg'
          />image...
        </div>


        {/* dev right */}
        <div className='flex flex-col items-center justify-center p-4'>
        <p className='text-sm md:text-xl pb-2'>Hello, I am Anthony-Ikpe.</p>

        <button className='text-white bg-black rounded-full px-4 py-2'>
        <a href='#socials'>
          Connect+
          </a>
        </button>
        
        </div>
        
    </div>
      </div>



      {/* projects */}

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 rounded-lg m-3'>

      <div className='w-full p-3 border gap-3'>
          <p>the thinking man...</p>
          <img src='../../src/images/me200.jpg' className='h-[300px] w-full' />
          <div className='flex justify-between p-3'>
          <button className='bg-red-700 p-3 rounded-lg'>Live Demo</button>
          <button className='bg-red-700 p-3 rounded-lg'>Github Code</button>
          </div>          
        </div>


        <div className='w-full p-3 border gap-3'>
          <p>the thinking man...</p>
          <img src='../../src/images/me200.jpg' className='h-[300px] w-full' />
          <div className='flex justify-between p-3'>
          <button className='bg-red-700 p-3 rounded-lg'>Live Demo</button>
          <button className='bg-red-700 p-3 rounded-lg'>Github Code</button>
          </div>          
        </div>


        <div className='w-full p-3 border gap-3'>
          <p>the thinking man...</p>
          <img src='../../src/images/me200.jpg' className='h-[300px] w-full' />
          <div className='flex justify-between p-3'>
          <button className='bg-red-700 p-3 rounded-lg'>Live Demo</button>
          <button className='bg-red-700 p-3 rounded-lg'>Github Code</button>
          </div>          
        </div>


        <div className='w-full p-3 border gap-3'>
          <p>the thinking man...</p>
          <img src='../../src/images/me200.jpg' className='h-[300px] w-full' />
          <div className='flex justify-between p-3'>
          <button className='bg-red-700 p-3 rounded-lg'>Live Demo</button>
          <button className='bg-red-700 p-3 rounded-lg'>Github Code</button>
          </div>          
        </div>        


      </div>


      {/* Skills,  */}
      <div className='flex  flex-col mx-auto p-3 items-center justify-center'>
        <div className='text-lg p-3 m-2'>Languages, Tools &amp; Frameworks</div>


      <div className='grid grid-cols-1 w-2/3 gap-4'>
        <div className='border border-black-900 h-60'>
          <ul className='p-3 grid grid-cols-2 sm:grid-cols-3 h-full'>
            <li>Javascript </li>
            <li>Express</li>
            <li>Postman</li>
            <li>React</li>
            <li>Mongoose</li>
            <li>Tailwind</li>
            <li>Python</li>
            <li>Docker</li>
          </ul>
        </div>  
        </div>
      </div>


      {/* Socials */}
      <div id='socials' className='p-3 flex flex-col justify-center'>
      <h2 className='flex items-center justify-center text-3xl p-2'>Socials</h2>
      {/* social platforms */}
      <div className='flex flex-row justify-evenly p-3'>
      <FaWhatsapp className='text-2xl text-green-700'/>
      <BsTwitterX className='text-2xl'/>
      <FaLinkedin className='text-2xl text-cyan-800'/>
      </div>

      <h4 className="p-3 border border-solid">In my spare time, I write about topics that I find interesting on <a href='#' className='text-blue-600'>hashnode.</a></h4>
      {/* brief intro */}
      <div className='p-3'>I'm not just a coder; I'm a craftsman. I thrive on building efficient, scalable software that excites users. Let's collaborate on something truly remarkable.</div>
      </div>


      {/* Socials */}
      <div>
        <ComFooter />
      </div>

    </div>
  )
}

export default Home
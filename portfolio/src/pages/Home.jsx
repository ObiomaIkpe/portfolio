import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaLinkedin } from "react-icons/fa6";
import { PiAsteriskFill, PiCertificateDuotone } from "react-icons/pi";
import { BsTwitterX } from "react-icons/bs";
import { FaAward } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { IoMdSchool } from 'react-icons/io';
import { MdOutlineEngineering } from "react-icons/md";
import ProjectCards from '../components/ProjectCards';


const Home = () => {
  useEffect(() => {
    AOS.init({offset: 200,
      duration: 300,
      easing: 'ease-in-sine',
      delay: 100
    });
  }, [])

  return (
    <>
    <Navbar />
    <div className='pt-15 h-screen flex flex-col md:flex-row items-center justify-evenly'>
      <div className=''>
        <img src='' 
        className='h-[100] w-[100] border-shadow'
        alt='image of dev' />
      </div>

      <div className='flex flex-col items-center gap-4'>
    <p className='text-xl md:text-2xl'>Hello, I'm Anthony-Ikpe.</p>
    <p className='text-xl md:text-2xl'>A Web Developer</p>

      <div className='flex flex-row gap-4 items-center'>   
      <Link to='#'>     
        <FaLinkedin className='text-2xl'/>
      </Link>

      <Link to='#'>
        <BsTwitterX className='text-2xl'/>
        </Link>
        <button  className='text-white bg-black py-2 px-4 rounded-full text-2xl'>
          <a href='#contact'>
          contact me
          </a>
          </button>         
      </div>
      </div>

      </div>
        {/* about me section */}
      <div className='pt-20 h-screen max-w-5xl flex flex-col mx-auto' id='contact' data-aos='fade'>
        <h3 className='flex flex-col items-center justify-center text-2xl'>About Me 
        <span className='text-xl'>Lorem ipsum dolor sit amet.</span></h3>
          
          {/* start of div boxes */}
          <div className='flex flex-col md:flex-row flex-wrap mx-auto justify-center'>
          {/* div 1 */}
          <div className='flex flex-col items-center pt-5 w-max-4xl w-[80vw] md:w-1/3 gap-1 m-2'>
          <div className='flex flex-col items-center justify-center p-3 border w-[60vw] md:w-[30vw] h-[50vh] sm:h-[60vh]'>
          <FaAward className='text-3xl mb-3'/>
          <h4 className='font-semibold text-3xl mb-3'>Experience</h4>

          {/* skills list */}
            <div className='mx-auto'>
          <div className='flex items-center gap-1'>
          <PiAsteriskFill className='text-sm sm:text-xl'/>  
          <div className='flex sm:flex-row justify-center items-center'>        
          <p className='text-[10px] sm:text-sm'>14+ months -</p> <span className='text-[10px] sm:text-sm'>Web Development</span>   
          </div>     
          </div>
          
          <div className='flex items-center gap-1'>
          <PiAsteriskFill className='text-sm sm:text-xl'/>  
          <div className='flex sm:flex-row justify-center items-center'>        
          <p className='text-[10px] sm:text-sm'>2+ years -</p> <span className='text-[10px] sm:text-sm'>Programming</span>   
          </div>     
          </div>

          </div>
          {/* end of skills list */}
          

          </div>
          </div>

      {/* div 2 */}


      {/* div 1 */}
      <div className='flex flex-col items-center pt-5 w-max-4xl w-[80vw] md:w-1/2 gap-1 m-2'>
          <div className='flex flex-col items-center p-3 border  w-[60vw] md:w-[30vw] h-[40vh] sm:h-[60vh] '>
          <MdOutlineEngineering className='text-3xl md:text-6xl pt-2 mb-3'/>
          <h4 className='font-semibold text-sm md:text-3xl md:mb-3 flex mx-auto flex-wrap justify-center text-balance ... '>Tools and Languages I often Work With</h4>

          {/* skills list */}
            <div className='mx-auto'>
          <div className=''>


            <div className='flex flex-row md:gap-4 md:p-3'>
              <div className='flex flex-col'>
            <div className='flex items-center p-2'>              
            <PiAsteriskFill /> <span>NodeJs</span>
            </div>

            <div className='flex items-center p-2'>
            <PiAsteriskFill /> <span>Express</span>
            </div>

            <div className='flex items-center p-2'>
            <PiAsteriskFill /> <span>React</span>
            </div>

            <div className='flex items-center p-2'>
            <PiAsteriskFill /> <span>Tailwind CSS</span>
            </div>

            <div className='flex items-center p-2'>
            <PiAsteriskFill /> <span>MongoDB</span>
            </div>

            </div>

            <div className='flex flex-col '>
            <div className='flex items-center p-2'>
            <PiAsteriskFill /> <span>Mongoose</span>
            </div>

            <div className='flex items-center p-2'>
            <PiAsteriskFill /> <span>Postman</span>
            </div>

            <div className='flex items-center p-2'>
            <PiAsteriskFill /> <span>Firebase</span>
            </div>

            <div className='flex items-center p-2'>
            <PiAsteriskFill /> <span>Github</span>
            </div>

            <div className='flex items-center p-2'>
            <PiAsteriskFill /> <span>Cloudinary</span>
            </div>
            </div>

            </div>

          </div>
          </div>

          </div>
          {/* end of skills list */}
          

          </div>


      

      {/* div 1 */}
       {/* div 1 */}
       <div className='flex flex-col items-center pt-5 w-max-4xl w-[80vw] md:w-1/3 gap-4 m-2'>
          <div className='flex flex-col items-center justify-center p-3 border w-[60vw] md:w-[30vw] h-[40vh] sm:h-[60vh]'>
          <PiCertificateDuotone className='text-3xl mb-3'/>
          <h4 className='font-semibold text-3xl mb-3'>Certificates</h4>

          {/* skills list */}
            <div className='mx-auto'>
          <div className='flex items-center gap-1'>
          <PiAsteriskFill className='text-sm sm:text-xl'/>  
          <div className='flex sm:flex-row justify-center items-center'>        
          <p className='text-[10px] sm:text-sm'>14+ months -</p> <span className='text-[10px] sm:text-sm'>Web Development</span>   
          </div>     
          </div>
          
          <div className='flex items-center gap-1'>
          <PiAsteriskFill className='text-sm sm:text-xl'/>  
          <div className='flex sm:flex-row justify-center items-center'>        
          <p className='text-[10px] sm:text-sm'>2+ years -</p> <span className='text-[10px] sm:text-sm'>Programming</span>   
          </div>     
          </div>

          </div>
          {/* end of skills list */}
          

          </div>
</div>

<div className='flex flex-col items-center pt-5 w-max-4xl w-[80vw] md:w-1/2 gap-1 m-2'>
          <div className='flex flex-col items-center p-3 border w-[30vw] h-[40vh] sm:h-[60vh] '>
          <MdOutlineEngineering className='text-3xl mb-3'/>
          <h4 className='font-semibold text-3xl mb-3'>Other Skills</h4>

          {/* skills list */}
            <div className='mx-auto'>
          <div className=''>
            <div className='flex items-center'>
            <PiAsteriskFill /> <span>C Programming - ALX S.E</span>
            </div>

            <div className='flex items-center'>
            <PiAsteriskFill /> <span>Python - Python Institute</span>
            </div>

            <div className='flex items-center'>
            <PiAsteriskFill /> <span>Bash &amp; Linux Essentials</span>
            </div>

            <div className='flex items-center'>
            <PiAsteriskFill /> <span>Bash &amp; Linux Essentials</span>
            </div>
            
          </div>
          </div>

          </div>
          {/* end of skills list */}
          

          </div>


          </div>


          <div className='flex flex-col items-center pt-5 w-max-4xl gap-4 m-2'>          
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores a, distinctio voluptate ratione quo at molestias, nobis neque, obcaecati placeat veniam pariatur vel expedita tempore! Accusamus explicabo fugit similique, necessitatibus aliquam numquam culpa autem, tempore, consequatur consequuntur accusantium in error earum fuga esse voluptatibus! Sit porro labore ratione repellat veniam. </p>
         </div>

         <div className='flex flex-col items-center pt-5 w-max-4xl gap-4 m-2'>          
          <div>
            <h4>Socials</h4>
          </div>

          <div>
            <div>
              linkedIn
            </div>
            <div>
              Twitter
            </div>
            <div>
              WhatsApp
            </div>

            <div>
              I write about different tech related content on hashnode:
              <p>hashnode</p>
            </div>
          </div>

         </div>

         {/* my projects */}
          <div className='flex flex-col md:flex-row gap-4'>
            {/* div 1 */}
            <div className='flex flex-col border-2 rounded-lg'>
              <ProjectCards 
              image='../../src/images/allAboutErrors.png'
              alt='demo'
              text='lorem15df  ksdfjsijdfn hjisdjf hj ksdf'
              githubLink='google.com'
              liveDemo='https://www.youtube.com/watch?v=gOej6z40L_w'
              />
            </div>
           
          </div>




          
      </div>
      </>

  )
}

export default Home
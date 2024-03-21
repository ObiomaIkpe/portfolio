import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaHashnode, FaWhatsapp } from "react-icons/fa6";
import { PiAsteriskFill, PiCertificateDuotone } from "react-icons/pi";
import { SlSocialLinkedin } from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";
import { FaAward } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
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
        <img src='../../src/images/allAboutErrors.png' 
        className='sm:h-[350px] sm:w-[350px] rounded-full border-shadow'
        alt='image of dev' />
      </div>

      <div className='flex flex-col items-center gap-4'>
    <p className='text-xl md:text-2xl'>Hello, I'm Anthony-Ikpe.</p>
    <p className='text-xl md:text-2xl'>A Web Developer</p>

      <div className='flex flex-row gap-4 items-center'>   
      {/* <Link to='#'>     
        <FaLinkedin className='text-2xl'/>
      </Link>

      <Link to='#'>
        <BsTwitterX className='text-2xl'/>
        </Link> */}
        <button  className='text-white bg-black py-2 px-4 rounded-full text-xl'>
          <a href='#socials'>
          connect with me
          </a>
          </button>         
      </div>
      </div>

      </div>
        {/* about me section */}
      <div className='pt-20 h-screen max-w-5xl flex flex-col mx-auto' id='skills' data-aos='fade'>
        <h3 className='flex flex-col items-center justify-center text-2xl'>About Me 
        <span className='text-xl'>Lorem ipsum dolor sit amet.</span></h3>
          
          {/* start of div boxes */}
          <div className='flex flex-col md:flex-row flex-wrap mx-auto justify-center'>
          {/* div 1 */}
          <div className='flex flex-col items-center pt-5 w-max-4xl w-[80vw] md:w-1/3 gap-1 m-2'>
          <div className='flex flex-col items-center justify-center p-3 border w-[60vw] md:w-[30vw] h-[50vh] sm:h-[60vh]'>
          <FaAward className='text-3xl mb-3  text-green-700'/>
          <h4 className='font-semibold text-3xl mb-3'>Experience</h4>

          {/* experiences list */}
            <div className='mx-auto '>
          <div className='flex items-center p-2'>
          <PiAsteriskFill className='text-sm sm:text-xl'/>  
          <div className='flex sm:flex-row justify-center items-center hover:cursor-pointer'>        
          <p className='text-[10px] sm:text-sm bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.800),theme(colors.green.400),theme(colors.blue.400),theme(colors.green.400),theme(colors.green.800),theme(colors.green.400),theme(colors.blue.900))] bg-[length:200%_auto] animate-gradient'>14+ months -</p> <span className='text-[10px] sm:text-sm bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.800),theme(colors.green.400),theme(colors.blue.400),theme(colors.green.400),theme(colors.green.800),theme(colors.green.400),theme(colors.blue.900))] bg-[length:200%_auto] animate-gradient'>Web Development</span>   
          </div>     
          </div>
          
          <div className='flex items-center p-2'>
          <PiAsteriskFill className='text-sm sm:text-xl'/>  
          <div className='flex sm:flex-row justify-center items-center hover:cursor-pointer'>        
          <p className='text-[10px] sm:text-sm bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.800),theme(colors.green.400),theme(colors.blue.400),theme(colors.green.400),theme(colors.green.800),theme(colors.green.400),theme(colors.blue.900))] bg-[length:200%_auto] animate-gradient'>2+ years -</p> <span className='text-[10px] sm:text-sm bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.800),theme(colors.green.400),theme(colors.blue.400),theme(colors.green.400),theme(colors.green.800),theme(colors.green.400),theme(colors.blue.900))] bg-[length:200%_auto] animate-gradient'>Programming</span>   
          </div>     
          </div>

          </div>
          {/* end of skills list */}
          

          </div>
          </div>

      


      {/* div 2 */}
      <div className='flex flex-col items-center pt-5 w-max-4xl w-[80vw] md:w-1/2 gap-1 m-2'>


      <div className='flex flex-col items-center p-3 border  w-[60vw] md:w-[30vw] h-[40vh] sm:h-[60vh] '>
          <MdOutlineEngineering className='text-3xl md:text-6xl pt-2 mb-3 text-green-900'/>
      <h4 className='font-semibold text-sm md:text-3xl md:mb-3 flex mx-auto flex-wrap justify-center text-balance ... '>I often Work With - </h4>
          

          {/* skills list */}
            <div className='mx-auto'>
          <div className=''>


            <div className='flex flex-row md:gap-4 md:p-3'>
              <div className='flex flex-col'>
            <div className='flex items-center p-2'>              
            <PiAsteriskFill /> <span className=''>NodeJs</span>
            </div>

            <div className='flex items-center p-2'>
            <PiAsteriskFill /> <span>Express</span>
            </div>

            <div className='flex items-center p-2'>
            <PiAsteriskFill /> <span>React</span>
            </div>


            <div className='flex items-center p-2'>
            <PiAsteriskFill /> <span>MongoDB</span>
            </div>
            <div className='flex items-center p-2'>
            <PiAsteriskFill /> <span>Tailwind CSS</span>
            </div>

            </div>

            <div className='flex flex-col '>
            <div className='flex items-center p-2'>
            <PiAsteriskFill /> <span>JavaScript</span>
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
            <PiAsteriskFill /> <span>Python</span>
            </div>
            </div>

            </div>

          </div>
          </div>

          </div>
          {/* end of skills list */}         

          </div>


      

       {/* div 3 */}
       <div className='flex flex-col items-center pt-5 w-max-4xl w-[80vw] md:w-1/3 gap-4 m-2'>
          <div className='flex flex-col items-center justify-center p-3 border w-[60vw] md:w-[30vw] h-[40vh] sm:h-[60vh]'>
          <PiCertificateDuotone className='text-3xl mb-3 text-green-900'/>
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



            {/* div 4 */}
<div className='flex flex-col items-center pt-5 w-max-4xl w-[80vw] md:w-1/2 gap-1 m-2'>
          <div className='flex flex-col items-center p-3 border w-[60vw] md:w-[30vw] h-[40vh] sm:h-[60vh] '>
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


          <div className='flex flex-col items-center  justify-center mx-auto pt-5 w-max-4xl gap-4 m-2'>          
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores a, distinctio voluptate ratione quo at molestias, nobis neque, obcaecati placeat veniam pariatur vel expedita tempore! Accusamus explicabo fugit similique, necessitatibus aliquam numquam culpa autem, tempore, consequatur consequuntur accusantium in error earum fuga esse voluptatibus! Sit porro labore ratione repellat veniam. </p>
         </div>

         <div className='flex flex-col items-center justify-center pt-5 w-max-4xl gap-4 m-2 mx-auto'>  


          <div className='' id='socials'>
            <h4 className='text-3xl font-bold'>Socials</h4>
          </div>

          <div className='mx-auto gap-4 p-9'>
          <div className='flex flex-row gap-5 items-center justify-center mx-auto pb-9'>   
      <Link to='#'>     
        <SlSocialLinkedin className='text-2xl md:text-3xl text-[#0077b5]'/>
      </Link>

      <Link to='#'>     
        <FaWhatsapp className='text-2xl md:text-3xl text-green-800'/>
      </Link>

      <Link to='#'>
        <BsTwitterX className='text-2xl md:text-3xl'/>
        </Link>
        
        {/* <button  className='text-white bg-black py-2 px-4 rounded-full text-2xl'>
          <a href='#contact'>
          contact me
          </a>
          </button>          */}
      </div>

            <div className='flex items-center justify-center gap-3'>
              I write about different tech related content on hashnode:
              
              <Link to='#'>     
        <FaHashnode className='text-2xl text-blue-900'/>
      </Link>
            </div>
          </div>

         </div>

         {/* my projects */}
          <div className='flex flex-col md:flex-row gap-4'>
            {/* div 1 */}
            <div className='flex flex-col md:flex-row gap-4 rounded-lg'>
              <ProjectCards 
              image='../../src/images/allAboutErrors.png'
              alt='demo'
              text='lorem15df  ksdfjsijdfn hjisdjf hj ksdf'
              githubLink='google.com'
              liveDemo='https://www.youtube.com/watch?v=gOej6z40L_w'
              />

              <ProjectCards 
              image='../../src/images/allAboutErrors.png'
              alt='demo'
              text='lorem15df  ksdfjsijdfn hjisdjf hj ksdf'
              githubLink='google.com'
              liveDemo='https://www.youtube.com/watch?v=gOej6z40L_w'
              />

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
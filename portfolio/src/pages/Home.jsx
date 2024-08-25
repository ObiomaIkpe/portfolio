import React from 'react'
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
        <p className='text-sm md:text-xl'>Hello, I am Anthony-Ikpe.</p>
        <p className='text-sm md:text-xl'>I do not just build projects,</p> 
        <p> I pay attention to details. </p>
        <p>building scalable and efficient software is something that thrills me. </p>
        <p className='text-sm md:text-xl'>An application that is exciting to users,</p>
        <p> and a developer that is equally enthusiatic about building it, that's what I'm all about.</p>
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
      <div className='flex  items-center justify-center h-screen mx-auto'>
        <div>skills</div>

        <div>
          
        </div>

      </div>


      {/* Socials */}
      <div>

      </div>


      {/* Socials */}
      <div>
        <ComFooter />
      </div>

    </div>
  )
}

export default Home
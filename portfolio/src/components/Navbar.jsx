import { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";


let LinkItems = [
    {name: "Home", link: "home"},
    {name: "about", link: "about"},
    {name: "services", link: "services"},
    {name: "contact", link: "#contact"}
];


const Navbar = () => {
  let [open, setOpen] = useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
        <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
          <div className='text-2xl md:text-3xl flex items-center hover:text-gray-700 text-black'>
            Anthony-Ikpe
          </div>

          <div
          onClick={() => setOpen(!open)}
          className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            {/* this is where the hamburger will be. Remember to set the logic! */}
            {open ? <IoMdClose /> : <RxHamburgerMenu /> }
          </div>
       

        <ul className={`md:flex md:items-center md:pb-0 pb-12 px-4 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'}`}>
          {
            LinkItems.map((item) => (
              <li 
              className="md:ml-8 text-xl md:my-0 my-7 text-black hover:text-gray-700 cursor-pointer"
              key={item.name} id={item.link}><a href={item.link}>  {item.name} </a></li>
            ))
          }
        </ul>
        </div>
    </div>
  )
}

export default Navbar
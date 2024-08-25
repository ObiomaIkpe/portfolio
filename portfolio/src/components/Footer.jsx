


const ComFooter = () => {

    return (
        <div className="flex items-center gap-6 sm:mt-0 md:mt-4 sm:justify-center border-b-500 ">
            <hr className='flex-grow border-t border-green-300' >
           <span className="font-800 text-xl">&copy; {new Date().getFullYear()}</span> 
           </hr>
           
        </div>
    )

}

export default ComFooter;
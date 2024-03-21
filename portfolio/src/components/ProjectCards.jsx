import { Link } from "react-router-dom"

const ProjectCards = ({image, alt, text, liveDemo, githubLink}) => {
  return (
    <div className="mx-auto w-[300px] px-2">
      <img className="w-[300px] md:w-auto" src={image} alt={alt} />
      <div className="bg-green-950 p-3">
      <h3>Lorem ipsum dolor sit amet.</h3>
      <h4>Lorem ipsum dolor sit amet.</h4>
      </div>

      <div className='flex flex-row p-3 items-center justify-between bg-gray-400'>
        <Link to={liveDemo} >
        <button className="bg-yellow-500 rounded-lg p-3"> liveDemo</button>
        </Link>
        <button className="bg-yellow-500 rounded-lg p-3">Live Demo</button>
      </div>
    </div>
  )
}

export default ProjectCards
import { Link } from 'react-router-dom'
import profilePic from './hamza.png'

export default function Navbar (){
    return (
    <nav className="bg-slate-100 shadow-sm">
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex-shrink-0 flex items-center">
        <Link to={"/"}>
            <img className="h-8 w-auto rounded-full" src={profilePic} alt="Logo" /> 
          </Link>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            <Link to={"/"} className="px-3 py-3 text-sm font-bold text-gray-900 hover:text-gray-600">Home</Link>
            <Link to={"/about"} className="px-3 py-3 text-sm font-bold text-gray-900 hover:text-gray-600">About me</Link>
            <Link to={"/contact"} className="px-3 py-3 text-sm font-bold text-gray-900 hover:text-gray-600">Contact me</Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
    )
}
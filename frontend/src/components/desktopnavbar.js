import React, {useState} from "react";
import ResizableLogo from "./resizableLogo";
import LogoImage from "../static/img/quatschlogo3.webp";
import useMediaQuery from "../config/useMediaQuery";
import { Link } from "react-router-dom";
import { getRequest } from "../config/api";
import MobileNavbar from "./mobilenavbar";
const DesktopNavbar = () =>{
    const ruleset = "/media/downloads/Quatsch Ruleset Beta 5-22-2023.pdf"
    const [isMobile, setIsMobile] = useState(useMediaQuery())
    const [isOpen, setIsOpen] = useState(false);
    const [isAnimated, setIsAnimated] = useState(false);
    const toggleMenu = () => {
      setIsOpen(!isOpen);
      setIsAnimated(!isAnimated);
    }
    return (
        <nav className="mx-auto max-w-container px-1 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-200 to-blue-100" aria-label="Global">
            <div className="relative flex items-center">
                <Link to="/"><ResizableLogo src={LogoImage} alt="Quatsch Logo" maxWidth={205} /></Link>
            <div className="absolute"/>
            <Link className="mr-auto flex-none text-slate-900" to="/"><span className="sr-only">Reichstag Rivals</span></Link>
            {isMobile ? <>
                <div className="max-w-7xl  px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-gray-700 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/blog" className="text-gray-700 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Blog</Link>
              <a href={"media/downloads/"+{ruleset}} className="text-gray-700 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Ruleset</a>
              <Link to="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleMenu} className="text-gray-400 hover:text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
              <svg className={`${isOpen ? 'hidden' : 'block'} h-8 w-6`} fill="none" viewBox="0 0 20 20" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isOpen ? 'hidden' : 'hidden'} h-8 w-6`} fill="none" viewBox="0 0 20 20" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isAnimated ? 'animate-open-panel' : "animate-close-panel"} ${isOpen ? 'block': 'hidden'} md:hidden`}>
       <MobileNavbar closeNavbar={toggleMenu}/>
      </div>
            </>:<>
            <div className="hidden lg:flex lg:items-center text-lg">
                <Link to="/store" className="ml-8 hidden">Store</Link>
                <Link to="/" className="ml-8">Home</Link>
                <Link to="/blog" className="ml-8">Blog</Link>
                <a href={getRequest(ruleset)} className="ml-8">Ruleset</a>
            </div>
            </>}
            
            </div>
            
            </nav>
    )
}
export default DesktopNavbar;
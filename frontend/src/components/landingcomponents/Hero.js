import React, { useState } from "react";
import useMediaQuery from "../../config/useMediaQuery";
import SBuilder from "../SBuilder";
import ConstantContactInline from "./ConstantContactFreebie";

const Hero = () => {
    const [isMobile, setIsMobile] = useState(useMediaQuery());
    const [isOpen, setIsOpen] = useState(false);
    const showSignUp = () =>{

    }
    const togglePopUp = () =>{
        setIsOpen(!isOpen);
    }
    return (
        <div className="bg-gradient-to-r py-5 min-h-[100vh] from-orange-200 to-blue-100 border-b border-slate-300">
            <div className="flex flex-col items-center py-16">
                <h1 className="text-3xl font-sans">Quatsch!</h1>
                <h2 className="text-xl font-sans" >Learning German has never been so much fun!</h2>
                {/* <div className={`flex flex-row ${isMobile? "" : "justify-end w-[60%] pt-16"}`}>
                    <button onClick={togglePopUp} className="bg-orange-500 rounded py-2 px-4 float-right">Claim your free Deck</button>
                </div> */}


                {/* {isOpen && (
                <div className={` fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50`} onClick={togglePopUp}>
                    <div className={`bg-white rounded-lg p-6 `}>
                        <ConstantContactInline/>
                    </div>
                </div>
            )} */}
                <div className={`py-24 ${isMobile ? "" : " flex flex-row align-center center-items justify-center "}`}>
                <SBuilder />
                </div>
                </div>
        </div>);
}
export default Hero;
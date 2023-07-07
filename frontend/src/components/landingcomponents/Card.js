import React, { useState } from "react";
const Card = ({ title, content, image, altImage, lgImage, isRotate }) => {
    const [hovering, setHovering] = useState(false);
    //const bgHoverColor = "";
    const [isOpen, setIsOpen] = useState(false);
    //const bgColor = "bg-blue-400";  ${hovering ? bgHoverColor: bgColor}
    const toggleHover = () => {
        setHovering(true);
    }
    const toggleOff = () => {
        setHovering(false);
    }
    const togglePopUp = () => {
        console.log("showPopUp Pressed")
        setIsOpen(!isOpen);
    }
    return (
        <>
            <div className="bg-white rounded-lg shadow-md flex flex-col  h-full justify-between w-[200px] overflow-hidden hover:cursor-pointer " onMouseOver={toggleHover} onMouseOut={toggleOff} onClick={togglePopUp}>

                <img className={"mx-auto "} src={image} alt={altImage} width="200px" height="180px" />
                <div className={"bg-blue-400 w-[100%] "}>
                    <div className={`text-gray-800 text-center py-1 text-xl w-[100%] ${hovering ? '' : 'animate-pulse-bg-once'} bg-blue-600 `}>{content}</div></div>
            </div>
            {isOpen && (
                <div className={` fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50`} onClick={togglePopUp}>
                    <div className={`bg-white rounded-lg p-6  ${isRotate ? "transform rotate-90" : ""}`}>
                        <img src={lgImage} alt={altImage} />
                    </div>
                </div>
            )}
        </>
    )
}
export default Card;
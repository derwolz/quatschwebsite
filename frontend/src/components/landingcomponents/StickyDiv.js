import React, { useState, useEffect } from 'react';
import useMediaQuery from '../../config/useMediaQuery';
const StickyDiv = (props) => {
    const [isSticky, setIsSticky] = useState(true);
    const [isMobile, setIsMobile] = useState(useMediaQuery());
    const threshold = 900;
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= threshold) {
                setIsSticky(true);
                console.log("fixing stickydiv")

            } else {
                setIsSticky(false);
            }
        }
        window.addEventListener('scroll', handleScroll );
        return () =>{
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);
    return (
        <div
            className={`sticky `}
        >
            
            {props.children}
        </div>
    )
}
export default StickyDiv;
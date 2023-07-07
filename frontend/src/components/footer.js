import React, {useState} from "react";
import useMediaQuery from "../config/useMediaQuery";
import DesktopFooter from "./dtopFooter";
const Footer = () =>{
    const [isMobile, setIsMobile] = useState(useMediaQuery())
    return (<>
    <DesktopFooter/>
    
    </>
    
    )
}
export default Footer;
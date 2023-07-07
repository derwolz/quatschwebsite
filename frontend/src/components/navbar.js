import React, {useState} from "react";
import useMediaQuery from "../config/useMediaQuery";
import MobileNavbar from "./mobilenavbar";
import DesktopNavbar from "./desktopnavbar";
const Navbar = () =>{
    const [isMobile, setIsMobile] = useState(useMediaQuery())
    return (<>
    <DesktopNavbar/>
    
    </>
    
    )
}
export default Navbar;
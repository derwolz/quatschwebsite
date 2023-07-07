import React, {useState} from "react";

import { Link } from "react-router-dom";
import Sitemap from "../Sitemap";
const DesktopFooter = () =>{
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
    return (
        
        <div className="border-t border-slate-900/5 py-3 bg-orange-400 px-3" >
            <div className="w-auto text-slate-900 text-lg">
                <div className="flex flex-col justify-start">
                <div className="flex flex-row justify-center center-items space-x-4 ">
                    <div className="h-ful center-items justify-center flex flex-col">
                    Copywrite &copy; Quatsch {currentYear}
                    </div>
                    <div className="h-ful center-items justify-center flex flex-col">|</div>
                    <div className="flex h-full flex-col justify-start">
                        <Link className="pb-3 border-b" to="/privacy" >Privacy</Link>
                        <Link className="pt-3" to="/terms">Terms</Link>
                    </div>
                    <div className="h-ful  center-items justify-center flex flex-col">|</div>
                    <div className="h-ful  center-items justify-center flex flex-col">
                        <Link className="pb-3 border-b" to="/contact">Contact</Link>
                        <div className="pt-3">
                        <Sitemap />
                        </div>
                        
                    </div>
                </div>
            </div>
            </div>
            </div>
    )
}
export default DesktopFooter;
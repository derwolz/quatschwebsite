import React, {useEffect, useState} from "react";
import { getRequest } from "../../config/api";
import axios from "axios";

const LatestBlog = () =>{
    const [hideBlog, setHideBlog] = useState(true)

    const [lastBlog, setLastBlog] = useState(        
        "")   
    useEffect(() =>{
        axios.get(getRequest("/blog/lastblog/")).then((response) =>{
            setLastBlog(response.data)
        }) 
    },[])
    const shownClass = "flex flex-col justify-start ";
    const hideClass = "flex flex-col justify-start overflow-hidden max-h-60";
    const gradient = "absolute inset-x-0 min-w-[80%] bottom-0 h-16 bg-gradient-to-b from-transparent to-blue-100";
    const remGradient = "hidden"
    const unHideBlog = () => {
        setHideBlog(false);
    }
    return (
        
        <div className="my-4 flex flex-row items-center justify-center">
            <div className="flex flex-col items-center justify-center relative max-w-[80%]">
            <div className="w-[90%]">
                <div className="text-3xl">Latest Updates</div>
                <div className="text-xl"></div>
                <div className={hideBlog ? hideClass : shownClass} dangerouslySetInnerHTML={{__html:lastBlog["content"]}}/>
                
                <div className={hideBlog ? gradient : remGradient}/>
                <button onClick={unHideBlog} className={hideBlog ? "absolute rounded-full bottom-0 right-4 px-4 py-2 bg-orange-400" : "hidden"}>Read More</button>
        {/* This will fetch the last posted blog entry for Quatsch and post either a summary or the first x characters then have a read more button */}
            
            </div>
        </div>
        </div>
    )
};
export default LatestBlog;
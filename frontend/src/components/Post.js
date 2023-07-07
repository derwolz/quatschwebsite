import React, { useState, useEffect } from "react";
import { getRequest } from "../config/api";
import axios from "axios";
const Post = ({post}) => {
    const [currentBlog, setCurrentBlog] = useState("");

    useEffect(() => {
        const url = getRequest("blog/"+post+"/")
        console.log(url)
            axios.get(url).then((response)=>{
                setCurrentBlog(response.data)
                console.log(response)
            }).catch((error) => {
                console.log(error)
            })
    }, [post])
    const shownClass = "flex flex-col items-center ";
    return( <>
            <div className="my-4 flex flex-row items-center justify-center">
            <div className="flex flex-col items-center justify-center relative max-w-[80%]">
            <div className="w-[90%]">
                <div className="text-3xl">Latest Updates</div>
                <div className="text-xl">{currentBlog["title"]}</div>
                <div className={shownClass} dangerouslySetInnerHTML={{__html:currentBlog["content"]}}/>
                
        {/* This will fetch the last posted blog entry for Quatsch and post either a summary or the first x characters then have a read more button */}
            
            </div>
        </div>
        </div>
    </>)
}
export default Post
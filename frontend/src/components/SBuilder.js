import React, {useEffect, useState} from "react";
import useMediaQuery from "../config/useMediaQuery";
import axios from 'axios';
import {getRequest} from "../config/api"
import Loading from "./Loading";


const SBuilder = () =>{
    const [isMobile, setIsMobile] = useState(useMediaQuery());
    const [sentence, setSentence] = useState([])
    const [english, setEnglish] = useState([])
    const [cards, setCards] = useState([])
    const [seconds, setSeconds] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        
        fetchNewSentence();
        
    },[])

    const fetchNewSentence = async () =>{
            setLoading(true)
            await axios.get(getRequest("/getsentence/")).then((response) => {
                setSentence(response.data["Sentence"]);
                setEnglish(response.data["English"]);
                setCards(response.data["Images"]);
                console.log(response)
                console.log(response.data["Images"])
                setLoading(false);
            });
         
        
    }
    return (<div className="py-3  relative">
        <div className="overflow-x-auto  w-[99vw]">
            <div className={`flex ${isMobile ? "" : "justify-center center-items"}`}>
            { loading ? <div className="py-3">
            <Loading/>
            </div>:<>
            <div className="inline-flex">
                {
                Object.entries(cards).map(([key, value])=> {
                 console.log(key, value)   
                    return (
                    <img key={key} alt={"German Vocabulary Card: " + key} className=" my-6 laptop:w-64 laptop:w-64 center-items rounded overflow-hidden" style={{maxWidth:250, maxHeight:250, objectFit: "contain"}}src={getRequest(value)} />
                    )
                })
            }
            </div>
            </>
            
            }
        </div>
        </div>
                    <div className="flex flex-row justify-center center-items">
                    {sentence}
                    </div>
                    <div className="flex flex-row justify-center center-items">
                    {english}
                    </div>
                    <button className="relative flex flex-row justify-center items-center rounded-full bg-orange-500 w-[50px] h-[50px] text-xl  laptop:right-64 float-right mx-2 hover:pointer bottom-1" onClick={fetchNewSentence}>🔁</button>
        </div>
    )
}
export default SBuilder;
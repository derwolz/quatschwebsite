import React, { useState } from "react";
import Card from "./Card"
import noun from "../../static/img/noun-md.webp";
import pronoun from "../../static/img/pronoun-md.webp";
import verb from "../../static/img/verb-md.webp";
import adjective from "../../static/img/adjective-md.webp";
import lgPronoun from "../../static/img/pronoun-full.webp";
import lgNoun from "../../static/img/noun-full.webp";
import lgVerb from "../../static/img/verb-full.webp";
import lgAdjective from "../../static/img/adjective-full.webp";
import vocab from "../../static/img/VOCAB.webp";
import backpacking from "../../static/img/backpack.webp";
import useMediaQuery from "../../config/useMediaQuery";
const Features = () => {
    const [isMobile, setIsMobile] = useState(useMediaQuery());
    const [showBackpack, setShowBackpack] = useState(false);
    const [showVocab, setShowVocab] = useState(false);
    const changeVocab = () => {
        setShowVocab(!showVocab);
    }
    const changeBackpack = () => {
        setShowBackpack(!showBackpack);
    }


return (<div className="flex flex-col justify-center items-center pt-0 ">


        <div className="bg-blue-100  mb-3 py-4 w-[100%] flex flex-col justify-center items-center">

            <div className=" w-[80%] flex-row flex flex-wrap">
                <div><img src={backpacking} width={300} height={200} alt={"alt text"} />
                {/* <button className={"relative bottom-9 left-[0px] px-3 py-2 rounded bg-gradient-to-r from-orange-400 to-orange-300 hover:bg-orange-300"} onClick={changeBackpack}>Learn More</button> */}
                </div>
                <div className="flex flex-col">
                <div><h2 className={`mb-4  w-[100%] text-3xl px-8 h-[2em] ${showBackpack ? "":""}`}>Ever thought about Travelling to Europe?</h2></div>
                
                <div className={`max-w-[80em] ${showBackpack ?"": ""}`}><p>Are you interested in connecting with your heritage or backpacking across Europe? If so, learning a language is the ideal choice for you. But how can you make language learning fun and natural? Introducing a German language sentence building card game, designed to make language acquisition a delightful experience. With this game, you'll have the opportunity to practice German while enjoying the process. Say goodbye to tedious methods and hello to an engaging and interactive way of learning!</p></div></div></div>
        </div>

            <div className={`py-3 w-[80%] flex  flex-wrap-reverse justify-end flex-row-reverse"}`} style={{justifyContent:'end'}}>
                <div className="flex flex-col">
                <div className={`${showVocab ? "" : ""}`}><h2 className={"text-3xl px-8"}>Stop Memorizing Vocabulary!</h2></div>
                <div className={`max-w-[80em] ${showVocab ? "" : ""}`}><p>Quatsch's cutting-edge card system is revolutionizing the way you learn German! Our unique approach will have you mastering complex grammatical concepts in no time. Say goodbye to traditional vocabulary games that focus solely on word-picture association or, at best, the gender of nouns. Quatsch takes language learning to a whole new level by placing a strong emphasis on constructing and speaking complete grammatically correct sentences.
</p><p>
With Quatsch, vocabulary takes a back seat as we prioritize helping you understand how the German language operates. Through our engaging card game, you'll develop a deep understanding of verb conjugation, noun gender, adjective declension, sentence structure, and even idiomatic expressions. Each aspect is carefully designed to give you a comprehensive grasp of the language, empowering you to communicate effectively and confidently.</p></div>
</div>
                <div className={``}>
                    <img src={vocab} width={300} height={200} alt={"alt text"} />
                    {/* <button className={`relative bottom-9 left-[195px] px-3 py-2 rounded bg-gradient-to-r from-orange-400 to-orange-300 hover:bg-orange-300`} onClick={changeVocab}>Learn More</button> */}
                </div>

            </div>
        <h2 className="text-3xl">Meet the cards!</h2>
        <div className="my-1 flex flex-row flex-wrap justify-center">

            <div className="mr-4 my-4"><Card lgImage={lgNoun} image={noun} altImage={"Noun Card"} title={""} content={"Noun Card"} /></div>
            <div className="mr-4 my-4"><Card lgImage={lgPronoun} image={pronoun} altImage={"Pronoun Card"} title={""} content={"Pronoun Card"} /></div>
            <div className="mr-4 my-4"><Card lgImage={lgVerb} image={verb} altImage={"Verb Card"} isRotate={true} content={"Verb Card"} /></div>
            <div className="mr-4 my-4"><Card lgImage={lgAdjective} image={adjective} altImage={"Adjective Card"} content={"Adjective Card"} /></div>
        </div>

    </div >

    )

};
export default Features;
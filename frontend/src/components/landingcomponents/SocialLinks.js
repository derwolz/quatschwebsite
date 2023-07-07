import React, {useState} from "react";
import twitter from "../../static/twitter-logo.webp"
import discord from "../../static/discord.svg"
import BGG from "../../static/BGG.webp"
import FB from "../../static/img/facebook.webp"
const SocialLinks = () =>{
    return (
        <div className=" my-4 flex flex-row justify-center center-items">
            <a href="https://discord.gg/NccsF8mW2X"><div className="mr-8"><img src={discord} alt={"Discord logo"} height={50} width={50} /></div></a>
            <a href="https://boardgamegeek.com/boardgame/389177/quatsch"><div className="mr-8"><img src={BGG}  alt={"Boardgamegeek logo"}   height={20} width={28} /></div></a>
            <a href="https://www.facebook.com/profile.php?id=100093045516630"><div className="mr-8"><img src={FB} alt={"Facebook logo"} height={50} width={50}/></div></a>
        </div>
    )
};
export default SocialLinks;
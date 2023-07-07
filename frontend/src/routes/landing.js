import React, { useState } from "react";
import Layout from "../components/Layout";
import Features from "../components/landingcomponents/Features";
import CrowdFund from "../components/landingcomponents/CrowdFund";
import Reviews from "../components/landingcomponents/Reviews";
import SocialLinks from "../components/landingcomponents/SocialLinks";
import LatestBlog from "../components/landingcomponents/LatestBlog.js";
import YoutubeEmbed from "../components/landingcomponents/YoutubeEmbed";
import ConstantContactInline from "../components/landingcomponents/ConstantContactInfo";
import Hero from "../components/landingcomponents/Hero";
import LearnMore from "../components/landingcomponents/Learnmore"
const Landing = () => {
    const [isLaunched, setIsLaunched] = useState(false)
    return (
            <Layout>
            
                    
                    <Hero />
                    
                
                <Features />

                <YoutubeEmbed />
                {isLaunched ? <CrowdFund /> : <></>}
                <div className="flex flex-row justify-center">
                    <div className="flex flex-row justify-between max-w-[80%]">
                        <LatestBlog />


                    </div></div>

                <Reviews />
                <LearnMore/>
                <SocialLinks />


            </Layout>

    )
}
export default Landing;
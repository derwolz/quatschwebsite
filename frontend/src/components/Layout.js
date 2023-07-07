import React, {useState} from "react";
import Navbar from "./navbar";
import Footer from "./footer";
const Layout = (props) =>{
    return (
        <div className="flex flex-col min-h-screen">
            <header className="relative z-50 flex-none text-sm font-semibold leading-6 text-slate-900">
                <Navbar/>
            </header>
            <main className="flex-grow">
                {props.children}
            </main>
            <footer  className="mx-auto mt-32 w-full max-w-container px-4 sm:px-6 lg:px-8">
                <Footer/>
            </footer>
        </div>
    )
}
export default Layout;
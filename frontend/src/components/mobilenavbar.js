import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getRequest } from "../config/api";
const MobileNavbar = ({ closeNavbar }) => {
    const ruleset = "/media/downloads/Quatsch Ruleset Beta 5-22-2023.pdf"
    return (
        <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 right right-0 flex max-w-full pl-10">
                    <div className="pointer-events-auto relative w-screen max-w-md">
                        <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                            <button onClick={closeNavbar} type="button" className="rounded-md text-gray-600 hover:text-white focus:outline-none focuse:ring-2 focus:ring-white">
                                <span className="sr-only">Close Panel</span>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                        <div className={"flex h-full flex-col overflow-y-scroll bg-blue-100 py-6 shadow-xl"}>
                            <div class="px-4 sm:px-6">

                            </div>
                            <div className="relative mt-6 flex-1 px-4 sm:px-6 flex flex-col ">
                                <Link className="" to="/store"  className="bg-orange-200 rounded ml-8 text-lg text-center py-2 my-2 hidden">Store</Link>
                                <Link className="" to="/"       className="bg-orange-200 rounded ml-8 text-lg text-center py-2 my-2">Home</Link>
                                <Link className="" to="/blog"   className="bg-orange-200 rounded ml-8 text-lg text-center py-2 my-2">Blog</Link>
                                <a href={getRequest(ruleset)}   className="bg-orange-200 rounded ml-8 text-lg text-center py-2 my-2">Ruleset</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





        </div>
    )
}
export default MobileNavbar;
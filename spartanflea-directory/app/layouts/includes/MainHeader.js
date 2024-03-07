"use client";
import Link from "next/link"; 
import {AiOutlineSearch} from "react-icons/ai";
import {BiLoaderCircle} from "react-icons/bi";

export default function MainHeader(){

    return(
        <>
            <div id="MainHeader" className ="border-b">
                <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
                    <div className="flex items-center w-full">
                        <div className="flex lg:justify-start justify-between gap-10 max-w-[1150px] w-full px-3 py-1 mx-auto">
                            <Link className="" href="/">
                                <img className ="" width="400" src="https://docs.google.com/drawings/d/e/2PACX-1vSoyGWRLYwYovMlLkiEwC9D3iWQDKVmiXFt_80xsv0721UmTsETuE1j2tsbpcqxrTsZ5EN9CDQzCuZo/pub?w=4320&h=864" alt="spartan flea logo" />
                            </Link>

                            <div className="w-full">
                                <div className="relative">
                                    <div className="flex items-center">
                                        {/*Search Bar */}
                                        <div className="rounded-full relative flex items-center border-2 border-gray-900 w-full p-2 mt-1 ">
                        
                                            <input
                                             className="w-full placeholder-gray-400 text-sm pl-3 focus:outline-none" placeholder="Search" type="text"
                                            />

                                        </div>
                                        <button className=" rounded-full mt-1 flex items-center bg-blue-600 text-sm font-semibold text-white p-[11px] ml-2">
                                            <button className="flex items-center">
                                                <AiOutlineSearch size={18}/>
                                            </button>
                                        </button>

                                        <div className="ml-2 mt-1 text-xs px-2 hover:text-blue-500 cursor-pointer">
                                            Advanced
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}
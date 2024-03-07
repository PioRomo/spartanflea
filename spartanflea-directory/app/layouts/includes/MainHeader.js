"use client";
import Link from "next/link"; 
import {AiOutlineSearch} from "react-icons/ai";
import {BiLoaderCircle} from "react-icons/bi";

export default function MainHeader(){

    return(
        <>
            <div id="MainHeader" className ="border-b">
                <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
                    <div className="flex items-center w-full bg-white">
                        <div className="flex lg:justify-start justify-between gap-10 max-w-[1150px] w-full px-3 py-5 mx-auto">

                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}
"use client";
import Link from "next/link"; 
import { MdChatBubble } from 'react-icons/md';
import { MdStar } from 'react-icons/md';




export default function TopMenu(){

    return(
        
            <div id="TopMenu" className ="bg-blue-700 p-2 border-b">
                <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
                    <ul id="TopMenuLeft" className="flex items-cetner text-[11px] text-[#333333] px-2 h-8 ">
                        {/* Login Button*/}
                        <li className="mt-1 relative px-3">
                            <Link href="/login" className="text-[15px] text-white flex items-center gap-2 hover:underline cursor-pointer">
                                <div>Login</div>

                            </Link>
                        </li>
                        
                    </ul>
                    {/*Right side of the top menu, right of the search bar */}
                    <ul id="TopMenuRight" className="flex items-center text-[11px] text-[#333333] px-2 h-8">
                        {/*Spartan Logo (totally optional, can remove) */}
                        <li className="flex items-center gap-2 px-3 hover:underline cursor-pointer">
                            <img width={32} src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/San_Jose_State_Spartans_logo.svg/1200px-San_Jose_State_Spartans_logo.svg.png"/>
                        </li>

                        {/*Wishlist Symbol  */}
                        <li className="flex items-center gap-2 px-3 hover:underline cursor-pointer">
                            <Link href="/wishlist">
                                <div className="relative">
                                    <MdStar style={{color: 'white'}} size={22}/>
                                    <div className="absolute text-[10px] -top-[2px] -right-[5px] bg-red-500 w-[14px] h-[14px] rounded-full text-white">
                                        
                                    </div>
                                </div>
                            </Link>
                        </li>


                        {/*Message Symbol  */}
                        <li className="flex items-center gap-2 px-3 hover:underline cursor-pointer">
                            <Link href="/messages"> 
                                <div className="relative">
                                    <MdChatBubble style={{color: 'white'}} size={22}/>
                                    <div className="absolute text-[10px] -top-[2px] -right-[5px] bg-red-500 w-[14px] h-[14px] rounded-full text-white">
                                    </div>
                                </div>
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
        

    );
}
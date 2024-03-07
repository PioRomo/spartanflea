"use client";
import Link from "next/link"; 
import {BsChevronDown} from "react-icons/bs"; 
import {AiOutlineShoppingCart} from "react-icons/ai"; 

export default function TopMenu(){

    return(
        <>
            <div id="TopMenu" className ="border-b">
                <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
                    <ul id="TopMenuLeft" className="flex items-cetner text-[11px] text-[#333333] px-2 h-8">
                        {/* Login Button*/}
                        <li className="relative px-3">
                            <Link href="/auth" className="flex items-center gap-2 hover:underline cursor-pointer">
                                <div>Login</div>
                                <BsChevronDown />

                            </Link>

                            {/*Login DropDown ~ Profile Welcome*/}
                            <div id="AuthDropDown" className=" hidden absolute bg-white w-[200px] text-[#333333] z-40 top-[20px] left-0 border shawdow-lg">
                                <div className="flex items-center justify-start gap-3 p-3">
                                    <img width={50} src="https://picsum.photos/200"/>
                                    <div className="font-bold test-[13px]">Fortnite Jonesy</div>
                                </div>
                                {/* Actual DropDown Menu*/}
                                <div className="border-b">
                                    <ul className="bg-white">
                                        <li className="text-[11px] py-2 px-4 w-full hover:underline text-blue-500 hover:text-blue-600 cursor-point">
                                            <Link href="/orders">
                                                My Orders
                                            </Link>
                                        </li>

                                        <li className="text-[11px] py-2 px-4 w-full hover:underline text-blue-500 hover:text-blue-600 cursor-point">
                                            Sign Out
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        
                        <li className="px-3 hover:underline cursor-pointer">
                            Daily Deals
                        </li>

                        <li className="px-3 hover:underline cursor-pointer">
                            Help & Contact
                        </li>
                    </ul>

                    <ul id="TopMenuRight" className="flex items-center text-[11px] text-[#333333] px-2 h-8">
                        <li className="flex items-center gap-2 px-3 hover:underline cursor-pointer">
                            <img width={32} src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/San_Jose_State_Spartans_logo.svg/1200px-San_Jose_State_Spartans_logo.svg.png"/>
                        </li>

                        <li className="flex items-center gap-2 px-3 hover:underline cursor-pointer">
                            <div className="relative">
                                <AiOutlineShoppingCart size={22}/>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
        </>

    );
}
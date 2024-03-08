"use client";
import MainLayout from "../layouts/MainLayout";

export default function Message(){
    return(
        <MainLayout>
            <div id="MessagePage" className="mt-4 max-w-[1100px] mx-auto">
                <div className="text-2xl font-bold mt-4 mb-4"> Message</div>
            
                <div>
                    Here goes all the content! 
                </div>
                
            </div>
        </MainLayout>
    ); 
}
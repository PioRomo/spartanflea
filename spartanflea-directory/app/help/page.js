"use client";
import MainLayout from "@/app/layouts/ProfileLayout";
import Link from "next/link"; 
import { PrismaClient } from '@prisma/client';
import { useEffect, useState } from 'react';
import { useAuth } from '@supabase/auth-ui-react';

export default function Help() {

    return (
        <MainLayout>
            <div className="max-w-[1100px] mx-auto flex space-x-16">
            
            <div className="w-1/2">
                <h2 className="text-xl font-bold text-gray-800 mb-2 mt-10">Navigating Listings:</h2>
                <ul className="list-disc pl-6">
                    <li>Keywords or Cateroies can be used to find items</li>
                    <li>Filter items to find what you're looking for.</li>
                </ul>

                <h2 className="text-xl font-bold text-gray-800 mb-2 mt-6">Understanding Item Details:</h2>
                <ul className="list-disc pl-6">
                    <li>Interpret item descriptions and images effectively.</li>
                    <li>Identify key information such as item condition and price.</li>
                </ul>

                <h2 className="text-xl font-bold text-gray-800 mb-2 mt-6">Wishlisting Items:</h2>
                <ul className="list-disc pl-6">
                    <li>Save items you're interested in for later viewing.</li>
                    <li>Access your wishlist to quickly find and purchase desired items.</li>
                </ul>

                <h2 className="text-xl font-bold text-gray-800 mb-2 mt-6">Contacting Sellers:</h2>
                <ul className="list-disc pl-6">
                    <li>Reach out to sellers for questions.</li>
                    <li>Utilize Flea's messaging system to communicate with sellers directly.</li>
                </ul>
            </div>

                {/* Right Column */}
                <div className="w-1/2">
                    <img
                        className="w-auto h-auto ml-auto mr-4 mt-4"
                        src="https://thumbs.dreamstime.com/b/mobile-business-line-transaction-vector-backgrounds-concept-online-44585705.jpg"
                        style={{ maxWidth: '100%', maxHeight: '100%' }}
                    />


 

                </div>
            </div>
        </MainLayout>
    );
}

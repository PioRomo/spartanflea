"use client";
import MainLayout from "@/app/layouts/MainLayout";
import Link from "next/link"; 
import { PrismaClient } from '@prisma/client';
import { useEffect, useState } from 'react';
import { useAuth } from '@supabase/auth-ui-react';

export default function Profile() {

    const defaultImageUrl = "https://content.sportslogos.net/logos/34/828/full/san_jose_state_spartans_logo_alternate_20006654.png";
    const [profile, setProfile] = useState({
        id: 1,
        title: "My Profile",
        description: "0",
        url: defaultImageUrl,
    });

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfile((prevProfile) => ({
                ...prevProfile,
                url: imageUrl,
            }));
        }
    };

    console.log(defaultImageUrl);

    return (
        <MainLayout>
            <div className="max-w-[900px] mx-auto flex space-x-16">
                {/* Left Column */}
                <div className="w-1/3">
                    <div className="px-4 mb-4 mt-10">
                        <div className="text-center font-bold text-xl">{profile?.title}</div>
                    </div>
                    <img
                        className="w-56 h-56 rounded-full ml-4" 
                        src={profile?.url}
                        alt={profile?.title}
                    />
                    <div className="text-center mt-12 text-sm bg-blue-600 rounded-full pt-1 pb-1 text-white cursor-pointer relative">
                        Upload/Change Profile Picture
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                            id="profile-picture-input"
                        />
                    </div>
                    
                </div>


                {/* Middle Column */}
                <div className="w-1/3 mt-10">
                    

                    <div className="mt-4 mb-12 mr-4 ml-8">
                        <div className="bg-gray-200 rounded-lg p-2 overflow-auto max-h-200">
                            <div className="pt-3">
                                <div className="font-semibold pb-1">Items Listed:</div>
                                <div className="font-bold text-sm text-right">{profile?.description}</div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 mb-12 mr-4 ml-8">
                        <div className="bg-gray-200 rounded-lg p-2 overflow-auto max-h-200">
                            <div className="pt-3">
                                <div className="font-semibold pb-1">Items Wishlisted:</div>
                                <div className="font-bold text-sm text-right">{profile?.description}</div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 mb-12 mr-4 ml-8">
                        <div className="bg-gray-200 rounded-lg p-2 overflow-auto max-h-200">
                            <div className="pt-3">
                                <div className="font-semibold pb-1">Conversations:</div>
                                <div className="font-bold text-sm text-right">{profile?.description}</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="w-1/3 mt-4">
                    <div className="pt-12 grid grid-rows-3 gap-14">
                        <Link href="/sell" className="mx-10 bg-blue-600 text-white py-2 px-10 rounded-full cursor-pointer inline-flex items-center justify-center">
                        <button>
                            Create New Listing
                        </button>
                        </Link>
                        <Link href="/wishlist" className="mx-10 bg-blue-600 text-white py-2 px-10 rounded-full cursor-pointer inline-flex items-center justify-center">
                        <button>
                            View Wishlist
                        </button>
                        </Link>
                        <Link href="/messages" className="mx-10 bg-blue-600 text-white py-2 px-10 rounded-full cursor-pointer inline-flex items-center justify-center">
                        <button>
                            View Inbox
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

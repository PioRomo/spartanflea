"use client";
import MainLayout from "../layouts/MainLayout";
import SimilarProducts from "../components/SimilarProducts";
import ListItem from "../components/ListItem";
import { useState } from 'react';

export default function Wishlist(){

    const [wishlist, setWishlist] = useState([
        // Initial wishlist items go here
        {
            id: 1,
            title: "Lenovo Chromebook", 
            description: "Never used 11.6 inch",
            url: "https://picsum.photos/id/20",
            price: 8500
        }
    ]);

    const removeFromWishlist = (productId) => {
        const updatedWishlist = wishlist.filter(item => item.id !== productId);
        setWishlist(updatedWishlist);
        // Logic to remove product from wishlist goes here
    };
        

    return(
        <MainLayout>
            <div className="max-w-[1200px] mx-auto mb-8 min-h-[300px]">
                <div className=" ml-4 text-2xl font-bold my-4">Wishlist</div>
                <div className="relative flex items-baseline justify-between gap-2">
                    <div className="w-[65%]">
                        {wishlist.map(item => (
                            <ListItem 
                                key={item.id} 
                                product={item} 
                                onRemove={() => removeFromWishlist(item.id)} // Pass remove function to ListItem component
                            />
                        ))}
                    </div>

                
                </div>

            </div>
            <SimilarProducts />
        </MainLayout>

    );
}
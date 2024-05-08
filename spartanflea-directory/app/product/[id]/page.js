"use client";
import MainLayout from "@/app/layouts/MainLayout";
import SimilarProducts from "../../components/SimilarProducts";
import { createClient } from '@supabase/supabase-js';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useState, useEffect } from 'react';

export default function Product({params}){

    const [product, setProduct] = useState(null);
    const [sellerUsername, setSellerUsername] = useState(null);
    
    useEffect(() => {
        async function fetchProduct() {
            // Initialize Supabase client
            const supabase = createClientComponentClient();

            // Fetch product details from Supabase
            const { data: productData, productError } = await supabase
                .from('productlisting')
                .select('*')
                .eq('listingid', params.id)
                .single();

            if (productError) {
                console.error('Error fetching product:', error.message);
            } else {
                setProduct(productData);
                console.log(productData);
                const { data: sellerData, error: sellerError } = await supabase
                    .from('profile')
                    .select('username')
                    .eq('id', productData.user_id)
                    .single();
                if (sellerError) {
                    console.error('Error fetching seller:', sellerError.message);
                } else {
                    setSellerUsername(sellerData.username);
                }
            }
        }

        fetchProduct();
    }, [params.id]);

    const handleSendMessage = async () => {
        const supabase = createClientComponentClient();
        const {data: {user}} = await supabase.auth.getUser();
        try {
            // Create a conversation between the current user and the seller
            const { data, error } = await supabase
                .from('conversation')
                .insert([
                    {
                        messenger_id: user.id,
                        reciever_id: product.user_id,
                    },
                ]);

            if (error) {
                throw new Error(error.message);
            } else {
                console.log('Conversation created successfully:', data);
                // Handle success
            }
        } catch (error) {
            console.error('Error creating conversation:', error.message);
            // Handle error
        }
    };

    return(
        <MainLayout>

            <div className="max-w-[1200px] mx-auto">
                <div className="flex px-4 py-10">

                    {product?.image_link 
                        ? <img className="w-[40%] rounded-lg" src={'https://ckjvjcjjzomgzucvmjpc.supabase.co/storage/v1/object/public/listing-images/' + product.image_link} />
                        : <div className="w-[40%]"></div>
                    }

                    {/*Text Part of the Product Page */}
                    <div className="px-4 w-full">
                        <div className="font-bold text-xl">{product?.title}</div>

                        <div className="border-b py-1" />

                        <div className="pt-3">
                            <div className="w-full flex items-center justify-between"> 
                                <div className="flex items-center">
                                    Price: 
                                    {product?.price
                                        ? <div className="font-bold text-[20px] ml-2">
                                            ${product.price}
                                        </div>
                                        : null
                                    }
                                </div>
                                
                                <div>
                                    {/*Wishlist Button */}
                                    <button className="mx-4 bg-blue-500 text-white py-2 px-10 rounded-full cursor-pointer">
                                        Wishlist 
                                    </button>
                                
                                    {/*Message Button */}
                                    <button className="bg-blue-500 text-white py-2 px-10 rounded-full cursor-pointer" onClick={handleSendMessage}>
                                        Message 
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="border-b py-1" />
                        
                        {/*Product dscription*/}
                        <div className="pt-3">
                            <div className="font-semibold pb-1"> Description: </div>
                            <div className="text-sm">{product?.description}</div>
                        </div>

                        {/* Category */}
                        <div className="pt-3">
                            <div className="font-semibold pb-1"> Category: </div>
                            <div className="text-sm">{product?.category}</div>
                        </div>
                        <div className="pt-3">
                            <div className="font-semibold pb-1"> Seller: </div>
                            <div className="text-sm">{sellerUsername}</div>
                        </div>
                    </div>
                </div>
            </div>
            <SimilarProducts />

        </MainLayout>
    );
} 
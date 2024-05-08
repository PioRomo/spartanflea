"use client";
import MainLayout from "@/app/layouts/MainLayout";
import SimilarProducts from "../../components/SimilarProducts";
import { createClient } from '@supabase/supabase-js';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useState, useEffect } from 'react';

export default function Product({params}){

    const [product, setProduct] = useState(null);
    const [sellerUsername, setSellerUsername] = useState(null);
    const [buyerId, setBuyerId] = useState('');
    
    useEffect(() => {
        async function fetchProduct() {
            // Initialize Supabase client
            const supabase = createClientComponentClient();
            const {data: {user}} = await supabase.auth.getUser();
            setBuyerId(user.id);
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
        const { data: { user } } = await supabase.auth.getUser();
    
        try {
            // Check if there is an existing conversation in both directions
            const { data: existingConversation1, error: conversationError1 } = await supabase
                .from('conversation')
                .select('*')
                .eq('messenger_id', user.id)
                .eq('reciever_id', product.user_id);
    
            const { data: existingConversation2, error: conversationError2 } = await supabase
                .from('conversation')
                .select('*')
                .eq('messenger_id', product.user_id)
                .eq('reciever_id', user.id);
            
            const {data: allUserConversations, error: allUserConversationsError } = await supabase
                .from('conversation')
                .select('*')
                .or(`messenger_id.eq.${user.id},reciever_id.eq.${user.id}`);

            if (allUserConversationsError) {
                throw new Error(allUserConversationsError?.message);
            }
            if (conversationError1 || conversationError2) {
                throw new Error(conversationError1?.message || conversationError2?.message);
            }
    
            if (existingConversation1.length > 0) {
                // Direct the user to the existing conversation
                console.log(existingConversation1);
                console.log('Existing conversation:', existingConversation1);
                let index = 0;
                for (let i = 0; i < allUserConversations.length; i++) {
                    if (existingConversation1[0].id === allUserConversations[i].id) {
                        index = i;
                    }
                }
                window.location.href = '../messages?index=' + index;
            } else if (existingConversation2.length > 0) {
                console.log('Existing conversation:', existingConversation2);
                let index = 0;
                for (let i = 0; i < allUserConversations.length; i++) {
                    if (existingConversation2[0].id === allUserConversations[i].id) {
                        break;
                    } else {
                        index++;
                    }
                }
                window.location.href = '../messages?index=' + index;
            } else {
                // Create a new conversation between the current user and the seller
                const { data: newConversation, error: newConversationError } = await supabase
                    .from('conversation')
                    .insert([
                        {
                            messenger_id: user.id,
                            reciever_id: product.user_id,
                        },
                    ]);
    
                if (newConversationError) {
                    throw new Error(newConversationError.message);
                }
    
                console.log('New conversation created:', newConversation);
                window.location.href = '../messages?index=' + allUserConversations.length;
            }
        } catch (error) {
            console.error('Error handling message:', error.message);
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
                {/* Wishlist and Message buttons */}
                {!buyerId || product?.user_id !== buyerId ? (
                    <div>
                        {/* Wishlist Button */}
                        <button className="mx-4 bg-blue-500 text-white py-2 px-10 rounded-full cursor-pointer">
                            Wishlist
                        </button>

                        {/* Message Button */}
                        <button
                            className="bg-blue-500 text-white py-2 px-10 rounded-full cursor-pointer"
                            onClick={handleSendMessage}
                        >
                            Message
                        </button>
                    </div>
                ) : null}
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
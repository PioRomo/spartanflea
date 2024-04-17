"use client";
import MainLayout from "@/app/layouts/MainLayout";
import SimilarProducts from "../../components/SimilarProducts";

export default function Product({params}){

    const product = {
        
        id: 1,
        title: "The Grad Fall 2024 Lease",
        description: "$1200 per month, utliities included, private bedroom",
        url: "https://picsum.photos/id/7", 
        price: 120000,
        category: "Housing" 
  
    }
 
    return(
        <MainLayout>

            <div className="max-w-[1200px] mx-auto">
                <div className="flex px-4 py-10">

                    {product?.url 
                        ? <img className="w-[40%] rounded-lg" src={product?.url+'/280'} />
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
                                            ${(product?.price / 100).toFixed(2)}
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
                                    <button className="bg-blue-500 text-white py-2 px-10 rounded-full cursor-pointer">
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
                        
                    </div>
                </div>
            </div>
            <SimilarProducts />

        </MainLayout>
    );
} 
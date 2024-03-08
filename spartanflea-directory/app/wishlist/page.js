"use client";
import MainLayout from "../layouts/MainLayout";
import SimilarProducts from "../components/SimilarProducts";
import ListItem from "../components/ListItem";

export default function Wishlist(){

    const product = {    
        id: 1,
        title: "Lenovo Chromebook", 
        description: "Never used 11.6 inch",
        url: "https://picsum.photos/id/20",
        price: 8500
    }
        

    return(
        <MainLayout>
            <div className="max-w-[1200px] mx-auto mb-8 min-h-[300px]">
                <div className=" ml-4 text-2xl font-bold my-4">Wishlist</div>
                <div className="relative flex items-baseline justify-between gap-2">
                    <div className="w-[65%]">
                        <ListItem key={product.id} product={product}/>
                    </div>

                
                </div>

            </div>
            <SimilarProducts />
        </MainLayout>

    );
}
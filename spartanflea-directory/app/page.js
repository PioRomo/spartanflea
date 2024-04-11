"use client"
import {Alfa_Slab_One} from 'next/font/google'; 

import MainLayout from './layouts/MainLayout.js'
import Product from './components/Product.js';

export default function Home() {

  const products = [
    {
      id: 1,
      title: "The Grad Fall 2024 Lease",
      description: "Looking for someone to take over my lease at the Grad. It is $1200(with utilities and wifi), comes with a queen size bed and sturdy table. ",
        url: "https://picsum.photos/id\/7", 
        price: 120000

      },
      {
        id: 2,
        title: "Lenovo Chromebook", 
        description: "Never used 11.6 inch",
        url: "https://picsum.photos/id/20",
        price: 8500
      }
    ]
    return (
      <>
          <MainLayout>
            <div className="max-w-[1200px] mx-auto">
              <div className="text-2xl font-bold mt-4 mb-6 px-4">Products</div>

              <div className="grid grid-cols-5 gap-4">
                {products.map(product => (
                  <Product key={product.id} product={product} />
                ))}
              </div>
          </div>
        </MainLayout>
    </>
  )
}

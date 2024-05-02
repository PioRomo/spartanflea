//"use client"
import {Alfa_Slab_One} from 'next/font/google'; 
import { createClient } from '@supabase/supabase-js';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { Auth, } from '@supabase/auth-ui-react';
import MainLayout from './layouts/MainLayout.js'
import Product from './components/Product.js';
import { cookies } from 'next/headers'
import Link from 'next/link';

export default async function Home() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({cookies: () => cookieStore});

  const {data: {user}} = await supabase.auth.getUser()

  if (!user){
    return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Link href={'/login'}>
          You are not logged in. Click here to go login.
        </Link>
      </main>
    )
  }

  const products = [
    {
      id: 1,
      title: "The Grad Fall 2024 Lease",
      description: "Looking for someone to take over my lease at the Grad. It is $1200(with utilities and wifi), comes with a queen size bed and sturdy table. ",
        url: "https://picsum.photos/id/7", 
        price: 120000,
        category: "Housing"
      },
      {
        id: 2,
        title: "Lenovo Chromebook", 
        description: "Never used 11.6 inch",
        url: "https://picsum.photos/id/20",
        price: 8500,
        category: "Electronics"
      }
      
    ]
    return (
      /* Example for accessing user data<>
      <div>
      <h1>Welcome to the Main Page</h1>
      {user && <p>Hello, {user.user_metadata.username}</p>}
    </div>*/
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

"use client"
import {Alfa_Slab_One} from 'next/font/google'; 

import MainLayout from './layouts/MainLayout.js'
import CarouselComp from './components/CarouselComp.js';

export default function Home() {
  return (
    <MainLayout>
      <CarouselComp /> 
    </MainLayout>
  );
}

import React from 'react';
import Navbar from "./components/Navbar";
import Product from './components/Product';


export default function Home() {
  return (
    <div className='text-white flex flex-col justify-between h-[100%]'>
        <Navbar/>
        <div className='w-[100%] h-[450px] text-[black] flex justify-center '><Product/></div>
        <div className='w-[100%] h-[150px]  '> </div>
    </div>
  )
}


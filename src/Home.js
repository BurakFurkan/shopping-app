import React,{useState,useEffect} from 'react';
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import {Foot,Hats,Tshirts} from "./ItemList";
import CategoryBar from './components/CategoryBar';


export default function Home() {
  const [category,Setcategory]=useState("foot");
  const categoryHandler = (category) =>{
    switch (category) {
        case "foot":
            return Foot;
        case "hat":
            return Hats;
        case "tshirts":
            return Tshirts;
        default:
            return Foot;
    }
  }

  const newCategory = categoryHandler(category)
  useEffect(()=>{
    
  },[category])
  return (
    <div className='text-white flex flex-col items-center h-[100%]'>
        <Navbar/>
        <Carousel {...newCategory}/>
        <CategoryBar setcategory={Setcategory}/>
    </div>
  )
}


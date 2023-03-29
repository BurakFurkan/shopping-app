import React from 'react';
import { FaTshirt } from 'react-icons/fa';
import { SiRedhat } from 'react-icons/si';
import { GiRunningShoe } from 'react-icons/gi';

const CategoryBar = ({setcategory}) => {
  return (
    <div className='w-[350px] h-[80px] mb-4 bg-blurredWhite rounded-md shadow-lg backdrop-blur-sm text-white flex justify-evenly items-center' >
        <GiRunningShoe onClick={()=>{setcategory("foot")}} className='cursor-pointer rounded-md transition-all ease duration-350 w-12 h-12 p-2 hover:bg-blurredWhite hover:scale-110  '/>
        <SiRedhat onClick={()=>{setcategory("hat")}} className='cursor-pointer rounded-md transition-all ease duration-350 w-12 h-12 p-2 hover:bg-blurredWhite hover:scale-110  '/>
        <FaTshirt onClick={()=>{setcategory("tshirts")}} className='cursor-pointer rounded-md transition-all ease duration-350 w-12 h-12 p-2 hover:bg-blurredWhite hover:scale-110  '/>
    </div>
  )
}

export default CategoryBar
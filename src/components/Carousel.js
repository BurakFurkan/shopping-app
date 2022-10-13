import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFlip } from "swiper";
import Product from "../components/Product";
import "swiper/css/bundle";

const Carousel = (category) => {
  const [swiperIndex, setSwiperIndex] = useState(0);
  return (
    <div className=" sm:w-[50%]  w-[80%] h-[100%] m-auto ">
      <Swiper
        className=" h-[100%] w-[100%] "
        navigation
        modules={[EffectFlip, Navigation]}
        onSlideChange={(swiper) => setSwiperIndex(swiper.activeIndex)}
      >
        {Object.values(category).map((item, index) => {
          return (
            <SwiperSlide
              key={item.id}
              className=" sm:w-[300px] h-[10px] w-[10px]  flex justify-center items-center"
            >
              <Product
                {...item}
                isvisible={index === swiperIndex ? true : false}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;

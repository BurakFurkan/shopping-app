import React, { useState } from "react";
import Adidas from "./../aspects/adidas1.webp";
import { Rating } from "react-simple-star-rating";
import { motion } from "framer-motion";

const Product = () => {
  const [active, setActive] = useState(null);
  const variants = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0 },
    transition: {
      duration: 3,
      delayChildren: 3,
      staggerChildren: 3,
      when: "beforeChildren",
    },
  };
  const childAnimation = {
    hidden: { opacity: 1, y: -60 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, when: "beforeChildren" }}
      className="group w-[350px] h-[440px] bg-blurredWhite rounded-md shadow-lg backdrop-blur-sm relative flex flex-col justify-end content-end p-2"
    >
      <img
        className=" transition-all ease w-[220px] h-auto duration-500 absolute top-[-20px] left-[60px] -rotate-[65deg] group-hover:rotate-0 group-hover:scale-110 group-hover:drop-shadow-4xl"
        src={Adidas}
        alt="shoes"
      />
      <motion.div
        variants={variants}
        initial="hidden"
        animate="show"
        className="info flex flex-col justify-end content-end gap-2 "
      >
        <motion.h1
          key={1}
          variants={childAnimation}
          className="text-white text-center font-semibold text-lg"
        >
          Adidas Pro
        </motion.h1>
        <motion.span
          key={2}
          variants={childAnimation}
          className="text-white pl-1 font-semibold text-lg"
        >
          $85,62
        </motion.span>
        <motion.div key={3} variants={childAnimation}>
          <Rating
            initialValue={4.5}
            readonly={false}
            allowFraction={true}
            fillColorArray={[
              "#E54947",
              "#E54947",
              "#E54947",
              "#F38630",
              "#F38630",
              "#F38630",
              "#F3C815",
              "#F3C815",
              "#F3C815",
              "#F3C815",
            ]}
          />
        </motion.div>
        <motion.div
          key={4}
          variants={childAnimation}
          className="flex justify-start gap-2 content-center text-white"
        >
          <span className="pr-2 pb-2 pt-2">Size:</span>
          <span
            onClick={() => setActive(1)}
            className={`cursor-pointer hover:bg-blurredWhite p-2 rounded-md ${
              active === 1 ? "backdrop-blur-md" : null
            }`}
          >
            38
          </span>
          <span
            onClick={() => setActive(2)}
            className={`cursor-pointer hover:bg-blurredWhite p-2 rounded-md ${
              active === 2 ? "backdrop-blur-md" : null
            }`}
          >
            39
          </span>
          <span
            onClick={() => setActive(3)}
            className={`cursor-pointer hover:bg-blurredWhite p-2 rounded-md ${
              active === 3 ? "backdrop-blur-md" : null
            }`}
          >
            40
          </span>
          <span
            onClick={() => setActive(4)}
            className={`cursor-pointer hover:bg-blurredWhite p-2 rounded-md ${
              active === 4 ? "backdrop-blur-md" : null
            }`}
          >
            41
          </span>
          <span
            onClick={() => setActive(5)}
            className={`cursor-pointer hover:bg-blurredWhite p-2 rounded-md ${
              active === 5 ? "backdrop-blur-md" : null
            }`}
          >
            42
          </span>
        </motion.div>
        <motion.div
          key={5}
          variants={childAnimation}
          className=" flex flex-col justify-start  gap-1"
        >
          <h1 className="text-white text-center ">Description</h1>
          <p className="text-xs tracking-wide text-greyText text-ellipsis whitespace-nowrap overflow-hidden">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </p>
          <p className="text-xs tracking-wide text-greyText text-ellipsis whitespace-nowrap overflow-hidden">
            nemo quia magni quis nisi id. Quos cumque nihil deserunt
            perspiciatis doloribus nobis assumenda itaque velit asperiores sit?
          </p>
          <button className=" transition-all ease duration-500 text-white hover:bg-blurredWhite p-1 w-36 rounded-md self-center mt-1 backdrop-blur-md hover:scale-110 ">
            Explore
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Product;

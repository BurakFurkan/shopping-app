import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { motion, AnimatePresence } from "framer-motion";

const Product = ({image,price,type,stars,title,isvisible}) => {
  const [active, setActive] = useState(null);
  const wrapperAnimation = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.05,
        staggerChildren: 0.05,
        when: "beforeChildren",
        stiffness: 10,
      },
    },
  };

  const childAnimation = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <AnimatePresence>
      {isvisible && (
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.5 }}
          className="group  sm:w-[350px] h-[440px] w-[300px]  bg-blurredWhite rounded-md shadow-lg backdrop-blur-sm relative flex flex-col justify-end content-end p-2"
        >
          <img
            className={(type===1)?"transition-all ease w-[220px]  h-[200px] object-contain duration-500 absolute top-[-70px] left-[60px] -rotate-[65deg] group-hover:rotate-0 group-hover:scale-110 group-hover:drop-shadow-4xl":"transition-all ease w-[220px]  h-[200px] object-cover duration-500 absolute top-[-50px] left-[60px]   group-hover:scale-110 group-hover:drop-shadow-4xl"}
            src={image}
            alt="shoes"
          />
          <motion.div
            variants={wrapperAnimation}
            initial="hidden"
            animate="show"
            className="info flex flex-col justify-end content-end gap-2 "
          >
            <motion.h1
              key={1}
              variants={childAnimation}
              className="text-white text-center font-semibold text-lg"
            >
              {title}
            </motion.h1>
            <motion.span
              key={2}
              variants={childAnimation}
              className="text-white pl-1 font-semibold text-lg"
            >
              ${price}
            </motion.span>
            <motion.div key={3} variants={childAnimation}>
              <Rating
                initialValue={stars}
                readonly={true}
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
              <h1 className="text-white  ">Description</h1>
              <p className="text-xs tracking-wide text-greyText text-ellipsis whitespace-nowrap overflow-hidden">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </p>
              <p className="text-xs tracking-wide text-greyText text-ellipsis whitespace-nowrap overflow-hidden">
                nemo quia magni quis nisi id. Quos cumque nihil deserunt
                perspiciatis doloribus nobis assumenda itaque velit asperiores
                sit?
              </p>
              <button className=" transition-all ease duration-500 text-white hover:bg-blurredWhite p-1 w-36 rounded-md self-center mt-1 backdrop-blur-md hover:scale-110 ">
                Explore
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Product;

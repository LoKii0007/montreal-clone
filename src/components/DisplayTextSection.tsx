"use client";

import { useScroll, motion, useTransform } from "motion/react";
import React, { useRef } from "react";

const DisplayTextSection = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "start -200%"],
  });

  const upperY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <>
      <div className="bg-[#f0e7d4] text-black p-6 relative text-2xl ">
        <div className="w-full grid grid-cols-3 py-6 border-t border-black">
          <div>
            See the difference between <br /> display and text
          </div>
          <div className="col-start-3">
            Neue Montreal is a contemporary grotesque designed for versatility
            across sizes. At display scale, its geometric structure commands
            attention. At text size, it retreats into readability; balanced,
            open, and clear. The difference is subtle but unmistakable.
          </div>
        </div>

        <div className="flex justify-between pt-8 pb-2">
          <h1>Text</h1>
          <h1>Display</h1>
        </div>

        <div className="w-full h-full grid grid-cols-2 font-(--font-inter) leading-[70%] text-[70vw] border-y border-black">
          <div className="w-full text-center translate-y-[-15%] font-animation">
            a
          </div>
          <div className="w-full text-center translate-y-[-15%] font-animation-reverse">
            a
          </div>
        </div>
      </div>
      <div
        ref={targetRef}
        className="h-[300vh] bg-[#f0e7d4] text-black relative w-full"
      >
        <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
          <div className="h-1/2 w-full overflow-hidden border-b relative flex ">
            <div className="left-0 bottom-0 absolute px-6 pb-2 text-2xl leading-none">
              <h1>Display</h1>
              <h1>Extrabold</h1>
            </div>
            <motion.div
              style={{
                y: upperY,
              }}
              className="absolute flex flex-col top-full text-center w-full font-extrabold "
            >
              <motion.div className="-rotate-20 text-[100vw] w-full text-center leading-[60%]">
                8
              </motion.div>
              <motion.div className="rotate-20 text-[100vw] leading-[100%] -translate-y-1/12">
                n
              </motion.div>
            </motion.div>
          </div>
          <div className="h-1/2 w-full overflow-hidden border-b relative">
            <div className="left-0 bottom-0 absolute px-6 pb-12 text-2xl leading-none">
              <h1>Text</h1>
              <h1>Medium</h1>
            </div>
            <motion.div
              style={{
                y: upperY,
              }}
              className="absolute flex flex-col top-0 text-center w-full font-medium"
            >
              <div className="-rotate-20 text-[100vw] w-full text-center leading-[60%]">
                8
              </div>
              <div className="rotate-20 text-[100vw] leading-[100%] -translate-y-1/12">
                n
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#f0e7d4] text-black relative flex justify-between p-6">
        <div className="text-7xl font-bold leading-none max-w-1/2">
          <h1>The Art of Letters</h1>
          <h1>Coming Together</h1>
        </div>
        <div className="col-start-3 leading-none max-w-2/5 text-2xl">
          <p>
            Where two letters become one. PP Neue Montréal's ligatures are
            quietly refined designed to let text flow without interruption,
            preserving the rhythm of a word while adding a layer of craft most
            readers will feel before they ever notice.
          </p>
        </div>
      </div>
    </>
  );
};

export default DisplayTextSection;

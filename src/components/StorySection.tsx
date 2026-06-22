"use client";

import { useScroll, motion, useTransform } from "motion/react";
import Image from "next/image";
import React, { useRef } from "react";
import Card3d from "./Card3d";

const StorySection = () => {
  const textRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start end", "start 20%"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <div className="w-full min-h-screen grid grid-cols-2 relative z-20 bg-black">
      <div className="flex flex-col justify-between border-r border-white p-6">
        <div className="text-2xl mt-25">
          {" "}
          Refined, <br /> Reworked, <br />
          Reintroduced.
        </div>
        <motion.div
          ref={textRef}
          initial={{ scale: 0.8 }}
          style={{
            scale: scale,
          }}
          className="flex flex-col w-full text-[8.5vw] font-extrabold leading-[80%] tracking-[-7%] "
        >
          <div className="[word-spacing:-1vw]">
            <span className="skew inline-block text-[#33A450]">Out</span>
            <span className="translate-y-full [word-spacing:normal] inline-block">
              <span className="skew-delay inline-block text-[#f0e7d4]">
                With the
              </span>
            </span>
          </div>
          <div className="opacity-0 [word-spacing:normal]">With the</div>
          <div className="w-full text-center skew-delay text-[#707070]">
            old,
          </div>
          <div className="text-left w-full">
            <span className="inline-block skew pr-[1vw] text-[#33A450]">
              in{" "}
            </span>
            <span className="skew-delay inline-block text-[#adadad]">
              {" "}
              with
            </span>
          </div>
          <div className="text-right w-full pr-[2vw] skew-delay">
            <span className="text-[#EFC21E] pr-[1vw]">the</span>
            <span className="text-[#33A450]">N</span>
            <span className="text-[#f03d3d]">e</span>
            <span className="text-[#4365ff]">u</span>
            <span className="text-[#d17416]">e</span>
            <span className="text-[#f0e7d4]">.</span>
          </div>
        </motion.div>
      </div>
      <div className="border-l border-white grid grid-rows-2 gap-8 p-12 overflow-hidden">
        <div className="relative h-full w-full">
          <Card3d>
            <Image
              fill
              alt="image"
              src="/images/card.webp"
              className="object-contain"
            />
          </Card3d>
        </div>
        <div className="relative h-full w-full">
          <Card3d>
            <Image
              fill
              alt="image"
              src="/images/card-2.webp"
              className="object-contain"
            />
          </Card3d>
        </div>
      </div>
    </div>
  );
};

export default StorySection;

"use client";

import { useScroll, motion, useTransform } from "motion/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Card3d from "./Card3d";

const evolutionYears = [
  { name: "2018" },
  { name: "2019" },
  { name: "2020" },
  { name: "2021" },
  { name: "2022" },
  { name: "2023" },
  { name: "2024" },
  { name: "2025" },
  { name: "2026" },
];

const evolutionNotes = [
  { name: "First Release" },
  { name: "Minor Updates" },
  { name: "Minor Updates" },
  { name: "Square Punctuations" },
  { name: "V02 Release" },
  { name: "Mono Version" },
  { name: "Squeezed Collection (Off-Type)" },
  { name: "Minor Updates" },
  { name: "V03 Release" },
];

const textWeights = [
  { name: "Thin", weight: 100 },
  { name: "Light", weight: 300 },
  { name: "Book", weight: 450 },
  { name: "Regular", weight: 400 },
  { name: "Medium", weight: 500 },
  { name: "Semibold", weight: 600 },
  { name: "Bold", weight: 700 },
  { name: "+Italics", weight: 400, italic: true },
];

export const displayWeights = [
  { name: "Hairline", weight: 100 },
  { name: "Extralight", weight: 200 },
  { name: "Thin", weight: 250 },
  { name: "Light", weight: 300 },
  { name: "Book", weight: 450 },
  { name: "Regular", weight: 400 },
  { name: "Medium", weight: 500 },
  { name: "Semibold", weight: 600 },
  { name: "Bold", weight: 700 },
  { name: "Extrabold", weight: 800 },
  { name: "Black", weight: 900 },
  { name: "+Italics", weight: 400, italic: true },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const childVariants = {
  hidden: {
    y: "10%",
    opacity: 0,
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      ease: "linear" as const,
    },
  },
};

const WeightItem = ({
  name,
  weight,
  italic,
}: {
  name: string;
  weight: number;
  italic?: boolean;
}) => (
  <motion.li
    className="cursor-default transition-all duration-150 list-none overflow-y-hidden"
    onMouseEnter={(e) => {
      e.currentTarget.style.fontWeight = String(weight);
      if (italic) e.currentTarget.style.fontStyle = "italic";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.fontWeight = "";
      e.currentTarget.style.fontStyle = "";
    }}
  >
    <motion.p variants={childVariants} className="">
      {name}
    </motion.p>
  </motion.li>
);

const StorySection = () => {
  const textRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start end", "start 20%"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <>
      <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 relative">
        <div className="flex flex-col justify-between border-b md:border-b-0 md:border-r border-white p-4 md:p-6">
          <div className="text-2xl mt-25">
            {" "}
            Refined, <br /> Reworked, <br />
            Reintroduced.
          </div>
          <motion.div
            ref={textRef}
            style={{
              scale: scale,
            }}
            className="flex flex-col w-full text-[16vw] md:text-[8.5vw] font-extrabold leading-[80%] tracking-[-7%] "
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
        <div className="md:border-l border-white grid grid-rows-2 gap-8 p-12 overflow-hidden">
          <div className="relative h-full w-full min-h-[320px]">
            <Card3d>
              <Image
                fill
                alt="image"
                src="/images/card.webp"
                className="object-contain card-animation relative backface-hidden "
                
              />
              <Image
                fill
                alt="image"
                src="/images/card-2.webp"
                className="object-contain card-animation-reverse absolute backface-hidden"
              />
            </Card3d>
          </div>
          <div className="relative h-full w-full">
            <Card3d>
              <Image
                fill
                alt="image"
                src="/images/card-2.webp"
                className="object-contain card-animation relative backface-hidden"
              />
              <Image
                fill
                alt="image"
                src="/images/card.webp"
                className="object-contain card-animation-reverse absolute backface-hidden"
              />
            </Card3d>
          </div>
        </div>
      </div>

      <div className="min-h-screen flex flex-col gap-8 p-4 md:p-6 text-[#f0e7d4] text-sm md:text-2xl justify-between">
        <div className="flex flex-col">
          <div className="">Story</div>
          <div className="w-full my-2 h-px bg-[#f0e7d4]"></div>
          <div className="grid grid-cols-1 md:grid-cols-10 gap-4 md:gap-0">
            <div className="md:col-span-4 flex flex-col gap-8 pr-6">
              <p>
                PP Neue Montreal is a neo-grotesk sans-serif typeface that
                reflects the design sensibilities of Montreal, Canada. Its clean
                lines and geometric forms are reminiscent of the city's
                modernist architecture and the International Typographic Style
                that influenced it.
              </p>
              <p>
                The font's subtle character and nuanced details evoke the city's
                history and cultural identity. With its balanced and versatile
                design, PP Neue Montreal is well-suited for a variety of
                applications, from digital media to print materials. The
                typeface's understated elegance and sophistication make it an
                effective tool for designers seeking to convey a sense of
                modernity and refinement.
              </p>
            </div>
            <div className="md:col-span-3 pt-2 md:pt-0 grid grid-cols-2 md:ps-2 border-t md:border-l md:border-t-0 border-[#f0e7d4]">
              <p className="">Text</p>
              <motion.ul
                variants={container}
                initial={"hidden"}
                whileInView={"visible"}
              >
                {textWeights.map((w) => (
                  <WeightItem key={w.name + w.weight} {...w} />
                ))}
              </motion.ul>
            </div>
            <div className="md:col-span-3 pt-2 md:pt-0 grid grid-cols-2 md:ps-2 border-t md:border-t-0 md:border-l border-[#f0e7d4]">
              <p className="">Display</p>
              <motion.ul
                variants={container}
                initial={"hidden"}
                whileInView={"visible"}
              >
                {displayWeights.map((w) => (
                  <WeightItem key={w.name + w.weight} {...w} />
                ))}
              </motion.ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="">Typeface Evolution</div>
          <div className="w-full my-2 h-px bg-[#f0e7d4]"></div>
          <div className="grid grid-cols-2 ">
            <div>
              <motion.ul
                variants={container}
                initial={"hidden"}
                whileInView={"visible"}
              >
                {evolutionYears.map((y) => (
                  <WeightItem key={y.name} name={y.name} weight={400} />
                ))}
              </motion.ul>
            </div>
            <div className="border-l ps-2 border-[#f0e7d4]">
              <motion.ul
                variants={container}
                initial={"hidden"}
                whileInView={"visible"}
              >
                {evolutionNotes.map((n, i) => (
                  <WeightItem key={i} name={n.name} weight={400} />
                ))}
              </motion.ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StorySection;

"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const CIRCLE_CONFIG = {
  sm: { imgSize: 28, containerSize: 100 },
  md: { imgSize: 38, containerSize: 140 },
  xl: { imgSize: 46, containerSize: 180 },
  "2xl": { imgSize: 54, containerSize: 217 },
};

const HeroSection = () => {
  const bp = useBreakpoint();
  const config = bp ? CIRCLE_CONFIG[bp] : null;
  const imgSize = config?.imgSize ?? 0;
  const radius = config ? (config.containerSize - config.imgSize) / 2 : 0;

  return (
    <>
      <div className="w-full min-h-screen flex flex-col justify-between fixed inset-0 z-0">
        <Image
          src={"/images/red-bg.jpg"}
          fill
          alt="bg"
          className="w-screen h-auto absolute z-10"
        />
        <div className="relative z-20 w-full h-full flex flex-col p-4 md:p-6 pt-20 md:pt-20">
          <motion.div
            initial={{ opacity: 0, y: "10%" }}
            animate={{ opacity: 1, y: "0%" }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 0.15 * 2,
            }}
            className="shrink-0 flex justify-between pb-6 items-start"
          >
            <div className="text-white text-[2rem] sm:text-[3rem] md:text-[3.5rem] 2xl:text-[4.5rem] font-extrabold leading-[100%]">
              Official <br /> Travel Guide
            </div>
            <div
              style={{ animationDuration: "10s" }}
              className="w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] md:w-[180px] md:h-[180px] 2xl:w-[217px] 2xl:h-[217px] relative animate-spin"
            >
              {Array.from({ length: 8 }).map((_, i) => {
                const angle = (i * 2 * Math.PI) / 8 - Math.PI / 2;
                const cx = radius + radius * Math.cos(angle);
                const cy = radius + radius * Math.sin(angle);
                const rotateDeg = (i * 360) / 8;
                return (
                  <Image
                    key={i}
                    src={"/images/logo-black.png"}
                    width={imgSize}
                    height={imgSize}
                    alt="bg"
                    style={{
                      position: "absolute",
                      left: cx,
                      top: cy,
                      transform: `rotate(${rotateDeg}deg)`,
                      zIndex: 10,
                      visibility: config ? "visible" : "hidden",
                    }}
                  />
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: "10%" }}
            animate={{ opacity: 1, y: "0%" }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 0.15 * 1,
            }}
            className="text-black border-y border-black shrink-0 md:flex-1 text-base sm:text-lg md:text-xl 2xl:text-2xl pt-2 leading-[100%] flex items-start justify-between gap-4"
          >
            <div className="pt-1">
              Everything you need to know to experience{" "}
              <br className="hidden md:block" />
              PP Neue Montreal to its fullest.
            </div>

            <div className="hidden md:block xl:hidden relative shrink-0 h-full w-auto overflow-hidden aspect-4/3">
              <Image
                src={"/images/card.webp"}
                fill
                alt="Montreal"
                className="object-contain"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: "10%" }}
            animate={{ opacity: 1, y: "0%" }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="flex-1 h-full shrink-0"
          >
            <div className="text-black text-[20vw] flex flex-col-reverse md:flex-row gap-8 pb-2 justify-between xl:text-[15rem] -translate-x-1 2xl:-translate-x-4 font-extrabold shrink-0 leading-[80%] border-b tracking-[-2px] sm:tracking-[-4px] md:tracking-[-2%] 2xl:tracking-[-8px] items-center h-full">
              <div>
                Neue <br /> Montreal
              </div>
              <div className="block w-full h-auto md:hidden xl:block lg:h-full lg:w-auto aspect-4/3 relative overflow-hidden my-3">
                <Image
                  src={"/images/card.webp"}
                  fill
                  alt="Montreal"
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

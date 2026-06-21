import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col justify-between fixed inset-0 z-0">
        <Image
          src={"/images/red-bg.jpg"}
          fill
          alt="bg"
          className="w-screen h-auto absolute z-10"
        />
        <div className="relative z-20 w-full h-full flex flex-col p-6 pt-20">
          <div className=" shrink-0 flex justify-between pb-6 items-start">
            <div className="text-white text-[4.5rem] font-extrabold leading-[100%] ">
              Official <br /> Travel Guide
            </div>
            <div
              style={{ animationDuration: "10s" }}
              className="w-[217px] h-[217px] relative animate-spin "
            >
              {Array.from({ length: 8 }).map((_, i) => {
                const angle = (i * 2 * Math.PI) / 8 - Math.PI / 2;
                const size = 217;
                const imgSize = 50;
                const radius = (size - imgSize) / 2;
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
                    }}
                  />
                );
              })}
            </div>
          </div>
          <div className=" text-black border-y border-black flex-1 text-2xl pt-2 leading-[100%]">
            Everything you need to know to experience <br />
            PP Neue Montreal to its fullest.
          </div>
          <div className="text-black text-[16rem] -translate-x-4 font-extrabold shrink-0 leading-[80%] border-b tracking-[-8px]">
            Neue <br /> Montreal
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

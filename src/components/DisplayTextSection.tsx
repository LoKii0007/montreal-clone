"use client";

import { useScroll, motion, useTransform } from "motion/react";
import React, { useRef, useState } from "react";

const ligatures = [
  { pair: "ss", square: "#22c55e", circle: "#f9683a" },
  { pair: "oe", square: "#6b5fe0", circle: "#22c55e" },
  { pair: "ae", square: "#f9683a", circle: "#6b5fe0" },
];

const weights = {
  Display: [
    { name: "Hairline", value: 100 },
    { name: "Extralight", value: 200 },
    { name: "Thin", value: 250 },
    { name: "Light", value: 300 },
    { name: "Book", value: 350 },
    { name: "Regular", value: 400 },
    { name: "Medium", value: 500 },
    { name: "Semibold", value: 600 },
    { name: "Bold", value: 700 },
    { name: "Extrabold", value: 800 },
    { name: "Black", value: 900 },
  ],
  Text: [
    { name: "Thin", value: 250 },
    { name: "Light", value: 300 },
    { name: "Book", value: 350 },
    { name: "Regular", value: 400 },
    { name: "Medium", value: 500 },
    { name: "Semibold", value: 600 },
    { name: "Bold", value: 700 },
  ],
};

const DisplayTextSection = () => {
  const targetRef = useRef(null);
  const [activeWeight, setActiveWeight] = useState("Black");
  const [mode, setMode] = useState<"Display" | "Text">("Display");
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
            Where two letters become one. PP Neue MontrÃ©al's ligatures are
            quietly refined designed to let text flow without interruption,
            preserving the rhythm of a word while adding a layer of craft most
            readers will feel before they ever notice.
          </p>
        </div>
      </div>

      <div className="w-full bg-[#f0e7d4] grid grid-cols-3 ">
        {ligatures.map(({ pair, square, circle }) => (
          <div
            key={pair}
            className="aspect-square flex items-center justify-center group overflow-hidden relative text-[20vw]"
            style={{ backgroundColor: square }}
          >
            <div
              className="w-full relative z-20 aspect-square transition-all duration-1500  rounded-full flex items-center justify-center group-hover:rotate-360 group-hover:translate-x-full"
              style={{ backgroundColor: circle }}
            >
              <span className="text-black font-medium leading-none translate-y-[-7%]">
                {pair}
              </span>
            </div>
            <div className="w-full absolute z-10 aspect-square rounded-full flex items-center justify-center  bg-black text-[#f9f5e3] tracking-[-15%]">
              <span className="font-medium leading-none translate-y-[-7%]">
                {pair}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#f0e7d4] w-full py-6">
      </div>
      <div className="w-full bg-[#f0e7d4] text-black relative grid grid-cols-12 gap-6 p-6 border-t border-black min-h-[90vh]">
        <div className="col-span-3 flex flex-col justify-between">
          <h2 className="text-2xl font-bold leading-none">
            Weights
            <br />
            Chart
          </h2>

          <div className="space-y-16">
            <div className="flex flex-col gap-1 text-2xl font-bold">
              {weights[mode].map(({ name, value }) => (
                <button
                  key={name}
                  type="button"
                  onMouseEnter={() => setActiveWeight(name)}
                  className={`text-left transition-colors w-fit ${
                    activeWeight === name ? "text-black" : "text-black/35"
                  }`}
                  style={{ fontWeight: value }}
                >
                  {name}
                </button>
              ))}
            </div>

            <div className="flex gap-3 text-2xl font-bold">
              {(["Display", "Text"] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  onMouseEnter={() => {
                    setMode(m);
                    if (!weights[m].some((w) => w.name === activeWeight)) {
                      setActiveWeight(weights[m][weights[m].length - 1].name);
                    }
                  }}
                  className={`transition-colors ${
                    mode === m ? "text-black underline" : "text-black/35"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-9 flex items-end text-right">
          <p
            className={`leading-[0.95] ${
              mode === "Display"
                ? "text-[8vw] tracking-tight"
                : "text-[6vw] tracking-normal"
            }`}
            style={{
              fontWeight:
                weights[mode].find((w) => w.name === activeWeight)?.value ??
                400,
            }}
          >
            Jovial QuÃ©bec fans mix waltz, bringing Expo 67 charm to MontrÃ©al.
          </p>
        </div>
      </div>
    </>
  );
};

export default DisplayTextSection;

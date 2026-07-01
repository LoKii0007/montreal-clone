"use client";

import { useScreenSize } from "@/hooks/useScreenSize";
import { useScroll, useTransform, motion, AnimatePresence } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

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
];

const items = [
  {
    id: 1,
    title: "Hairline",
    color: "#d63d8b",
    heading: "Plateau Mont‑Royal",
    desc: "The Plateau is Montréal's most intensely alive neighbourhood. Lined with colourful triplexes, wrought-iron staircases, and corner dépanneurs, it radiates an effortless cool that no other city has quite managed to replicate. Artists, families, students and lifelong residents share its streets with an easy pride. Rue Mont-Royal and Avenue Laurier buzz with terrasses, record shops, and independent restaurants. The Plateau doesn't perform its identity, it simply lives it, one long summer evening at a time.",
  },
  {
    id: 2,
    title: "Extralight",
    color: "#ff6b35",
    heading: "Plateau Mont‑Royal",
    desc: "The Plateau is Montréal's most intensely alive neighbourhood. Lined with colourful triplexes, wrought-iron staircases, and corner dépanneurs, it radiates an effortless cool that no other city has quite managed to replicate. Artists, families, students and lifelong residents share its streets with an easy pride. Rue Mont-Royal and Avenue Laurier buzz with terrasses, record shops, and independent restaurants. The Plateau doesn't perform its identity, it simply lives it, one long summer evening at a time.",
  },
  {
    id: 3,
    title: "Thin",
    color: "#e8ea19",
    heading: "Plateau Mont‑Royal",
    desc: "The Plateau is Montréal's most intensely alive neighbourhood. Lined with colourful triplexes, wrought-iron staircases, and corner dépanneurs, it radiates an effortless cool that no other city has quite managed to replicate. Artists, families, students and lifelong residents share its streets with an easy pride. Rue Mont-Royal and Avenue Laurier buzz with terrasses, record shops, and independent restaurants. The Plateau doesn't perform its identity, it simply lives it, one long summer evening at a time.",
  },
  {
    id: 4,
    title: "Light",
    color: "#25c43f",
    heading: "Plateau Mont‑Royal",
    desc: "The Plateau is Montréal's most intensely alive neighbourhood. Lined with colourful triplexes, wrought-iron staircases, and corner dépanneurs, it radiates an effortless cool that no other city has quite managed to replicate. Artists, families, students and lifelong residents share its streets with an easy pride. Rue Mont-Royal and Avenue Laurier buzz with terrasses, record shops, and independent restaurants. The Plateau doesn't perform its identity, it simply lives it, one long summer evening at a time.",
  },
  {
    id: 5,
    title: "Book",
    color: "#4e6cf6",
    heading: "Plateau Mont‑Royal",
    desc: "The Plateau is Montréal's most intensely alive neighbourhood. Lined with colourful triplexes, wrought-iron staircases, and corner dépanneurs, it radiates an effortless cool that no other city has quite managed to replicate. Artists, families, students and lifelong residents share its streets with an easy pride. Rue Mont-Royal and Avenue Laurier buzz with terrasses, record shops, and independent restaurants. The Plateau doesn't perform its identity, it simply lives it, one long summer evening at a time.",
  },
  {
    id: 6,
    title: "Regular",
    color: "#6259bf",
    heading: "Plateau Mont‑Royal",
    desc: "The Plateau is Montréal's most intensely alive neighbourhood. Lined with colourful triplexes, wrought-iron staircases, and corner dépanneurs, it radiates an effortless cool that no other city has quite managed to replicate. Artists, families, students and lifelong residents share its streets with an easy pride. Rue Mont-Royal and Avenue Laurier buzz with terrasses, record shops, and independent restaurants. The Plateau doesn't perform its identity, it simply lives it, one long summer evening at a time.",
  },
  {
    id: 7,
    title: "Medium",
    color: "#9a72d4",
    heading: "Plateau Mont‑Royal",
    desc: "The Plateau is Montréal's most intensely alive neighbourhood. Lined with colourful triplexes, wrought-iron staircases, and corner dépanneurs, it radiates an effortless cool that no other city has quite managed to replicate. Artists, families, students and lifelong residents share its streets with an easy pride. Rue Mont-Royal and Avenue Laurier buzz with terrasses, record shops, and independent restaurants. The Plateau doesn't perform its identity, it simply lives it, one long summer evening at a time.",
  },
  {
    id: 8,
    title: "Semibold",
    color: "#d85ab6",
    heading: "Plateau Mont‑Royal",
    desc: "The Plateau is Montréal's most intensely alive neighbourhood. Lined with colourful triplexes, wrought-iron staircases, and corner dépanneurs, it radiates an effortless cool that no other city has quite managed to replicate. Artists, families, students and lifelong residents share its streets with an easy pride. Rue Mont-Royal and Avenue Laurier buzz with terrasses, record shops, and independent restaurants. The Plateau doesn't perform its identity, it simply lives it, one long summer evening at a time.",
  },
  {
    id: 9,
    title: "Bold",
    color: "#b56f46",
    heading: "Plateau Mont‑Royal",
    desc: "The Plateau is Montréal's most intensely alive neighbourhood. Lined with colourful triplexes, wrought-iron staircases, and corner dépanneurs, it radiates an effortless cool that no other city has quite managed to replicate. Artists, families, students and lifelong residents share its streets with an easy pride. Rue Mont-Royal and Avenue Laurier buzz with terrasses, record shops, and independent restaurants. The Plateau doesn't perform its identity, it simply lives it, one long summer evening at a time.",
  },
  {
    id: 10,
    title: "Extrabold",
    color: "#bdbdbd",
    heading: "Plateau Mont‑Royal",
    desc: "The Plateau is Montréal's most intensely alive neighbourhood. Lined with colourful triplexes, wrought-iron staircases, and corner dépanneurs, it radiates an effortless cool that no other city has quite managed to replicate. Artists, families, students and lifelong residents share its streets with an easy pride. Rue Mont-Royal and Avenue Laurier buzz with terrasses, record shops, and independent restaurants. The Plateau doesn't perform its identity, it simply lives it, one long summer evening at a time.",
  },
  {
    id: 11,
    title: "Black",
    color: "#a7a7a7",
    heading: "Plateau Mont‑Royal",
    desc: "The Plateau is Montréal's most intensely alive neighbourhood. Lined with colourful triplexes, wrought-iron staircases, and corner dépanneurs, it radiates an effortless cool that no other city has quite managed to replicate. Artists, families, students and lifelong residents share its streets with an easy pride. Rue Mont-Royal and Avenue Laurier buzz with terrasses, record shops, and independent restaurants. The Plateau doesn't perform its identity, it simply lives it, one long summer evening at a time.",
  },
];

const PinSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const [wIndex, setWIndex] = useState(0);
  const [active, setActive] = useState(1);
  const [openId, setOpenId] = useState<number | null>(null);
  const size = useScreenSize();

  const fontWeight = useTransform(scrollYProgress, [0, 1], [900, 100]);
  const fontWeightReverse = useTransform(scrollYProgress, [0, 1], [100, 900]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (p) => {
      const index = Math.min(
        Math.floor(p * displayWeights.length),
        displayWeights.length - 1,
      );

      setWIndex(displayWeights.length - 1 - index);
    });

    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <>
      <div
        ref={containerRef}
        className="min-h-screen h-[250vh] w-full relative "
      >
        <div className="h-screen flex items-center justify-center sticky top-0 overflow-hidden">
          <video
            src="/videos/pinned-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute object-cover w-full h-full z-10 inset-0"
          ></video>
          <div className="flex relative z-20 flex-col max-w-3xl mx-auto font-(--font-inter) justify-center items-center text-[#ebebeb]">
            <motion.div
              style={{
                fontWeight,
              }}
              className="text-center"
            >
              <h6 className="text-[10px] md:text-sm">{displayWeights[wIndex].name}</h6>
              <h1 className="text-3xl md:text-[84px] text-center leading-[80%] tracking-[-5%] whitespace-nowrap">
                From Vieux-Montreal <br /> to Neue-Montreal
              </h1>
            </motion.div>
            <motion.div
              style={{
                fontWeight: fontWeightReverse,
              }}
              className="text-center"
            >
              <h4 className="w-full max-w-2xl mx-auto text-center text-[13px] md:text-base">
                Montreal is a vibrant city where North American energy meets
                European charm. Located on an island in the Saint Lawrence
                River, it is known for its rich history, diverse culture, and
                creative spirit. The city blends old and new effortlessly, from
                the cobblestone streets of Old Montreal to the modern skyline of
                downtown. French is the main language, but English and many
                other languages can be heard throughout its neighborhoods,
                giving the city an international feel.
              </h4>
              <p className="text-[10px] md:text-base">Text {displayWeights[10 - wIndex].name}</p>
            </motion.div>
          </div>
        </div>
      </div>

      <section className="hidden lg:flex h-screen overflow-hidden bg-[#ece6d8] text-black">
        <div className="w-[20vw] p-4 md:p-6 flex flex-col justify-between">
          <h1 className="text-[7rem] leading-[0.9] font-light tracking-tight wrap-break-word">
            Must-See Attractions
          </h1>

          <p className="text-[1.75rem] leading-tight">
            Montréal is a city of contrasts, where centuries-old cobblestone
            meets bold brutalist architecture, and every neighbourhood tells a
            different story.
          </p>
        </div>

        <div className="flex-1 relative flex">
          {items.map((item, index) => {
            const STRIPS = 14;
            const expanded = active === item.id;
            const stripWidth = (size.width * 0.8) / STRIPS;

            let x = "0px";
            if (item.id > 1 && item.id <= active) {
              x = `-${stripWidth * 3}px`;
            }

            return (
              <motion.div
                key={item.id}
                onHoverStart={() => setActive(item.id)}
                onMouseLeave={() => setActive(1)}
                className="inset-y-0 border-l border-black/20 absolute grid grid-cols-4 "
                animate={{
                  x,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 28,
                }}
                style={{
                  backgroundColor: item.color,
                  left: index == 0 ? "0%" : `${((index + 3) * 100) / STRIPS}%`,
                  width: `${stripWidth * 4}px`,
                }}
              >
                <div
                  style={{ fontSize: stripWidth * 0.8 }}
                  className=" border-r border-black p-2 relative overflow-hidden"
                >
                  <div className="flex flex-col  justify-between translate-x-1/6 w-full h-full">
                    <div
                      style={{ fontWeight: displayWeights[item.id - 1].weight }}
                      className="-rotate-90 absolute top-4 origin-top-right right-full leading-[120%]"
                    >
                      {item.title}
                    </div>
                    <div className="-rotate-90 absolute bottom-4 origin-bottom-left left-full leading-[120%] ">
                      {item.id}
                    </div>
                  </div>
                </div>
                <AnimatePresence>
                  <motion.div
                    initial={{ x: "20%" }}
                    animate={{
                      x: expanded ? "0%" : "20%",
                      transition: {
                        ease: "linear",
                      },
                    }}
                    className="col-span-3 flex flex-col h-full justify-between p-2"
                  >
                    <div className="text-5xl wrap-break-word">
                      {item?.heading}
                    </div>
                    <div className="whitespace-break-spaces">{item?.desc}</div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Mobile / tablet: stacked accordion list */}
      <section className="lg:hidden bg-[#ece6d8] text-black">
        <div className="px-5 pt-10 pb-8 flex flex-col gap-8">
          <h1 className="text-[3.5rem] sm:text-[5rem] leading-[0.9] font-light tracking-tight wrap-break-word">
            Must-See Attractions
          </h1>

          <p className="text-lg sm:text-2xl leading-tight">
            Montréal is a city of contrasts, where centuries-old cobblestone
            meets bold brutalist architecture, and every neighbourhood tells a
            different story.
          </p>
        </div>

        <div className="flex flex-col">
          {items.map((item) => {
            const open = openId === item.id;
            return (
              <div
                key={item.id}
                style={{ backgroundColor: item.color }}
                className="border-b border-black/20"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(open ? null : item.id)}
                  className="w-full flex items-center gap-4 px-5 py-4 text-left"
                >
                  <span
                    style={{ fontWeight: displayWeights[item.id - 1].weight }}
                    className="w-8 shrink-0 text-2xl tabular-nums"
                  >
                    {item.id}
                  </span>
                  <span
                    style={{ fontWeight: displayWeights[item.id - 1].weight }}
                    className="flex-1 text-2xl sm:text-3xl leading-tight"
                  >
                    {item.heading}
                  </span>
                  <motion.svg
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="shrink-0"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </motion.svg>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-base leading-snug">
                        {item.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      <div className="h-16 bg-[#ece6d8]">

      </div>
    </>
  );
};

export default PinSection;

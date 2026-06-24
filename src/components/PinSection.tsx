"use client";

import { useScroll, useTransform, motion } from "motion/react";
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
  { id: 5, title: "Book", color: "#4e6cf6" },
  { id: 6, title: "Regular", color: "#6259bf" },
  { id: 7, title: "Medium", color: "#9a72d4" },
  { id: 8, title: "Semibold", color: "#d85ab6" },
  { id: 9, title: "Bold", color: "#b56f46" },
  { id: 10, title: "Extrabold", color: "#bdbdbd" },
  { id: 11, title: "Black", color: "#a7a7a7" },
];

const PinSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const [wIndex, setWIndex] = useState(0);
  const [active, setActive] = useState(1);

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
        className="min-h-screen h-[250vh] w-full relative"
      >
        <div className="h-screen  flex items-center justify-center sticky top-0">
          <div className="flex flex-col max-w-3xl mx-auto font-(--font-inter) justify-center items-center text-[#ebebeb]">
            <motion.div
              style={{
                fontWeight,
              }}
              className="text-center"
            >
              <h6 className="text-sm">{displayWeights[wIndex].name}</h6>
              <h1 className="text-[84px] text-center leading-[80%] tracking-[-5%] whitespace-nowrap">
                From Vieux-Montreal <br /> to Neue-Montreal
              </h1>
            </motion.div>
            <motion.div
              style={{
                fontWeight: fontWeightReverse,
              }}
              className="text-center"
            >
              <h4 className="w-full max-w-2xl mx-auto text-center">
                Montreal is a vibrant city where North American energy meets
                European charm. Located on an island in the Saint Lawrence
                River, it is known for its rich history, diverse culture, and
                creative spirit. The city blends old and new effortlessly, from
                the cobblestone streets of Old Montreal to the modern skyline of
                downtown. French is the main language, but English and many
                other languages can be heard throughout its neighborhoods,
                giving the city an international feel.
              </h4>
              <p>Text {displayWeights[10 - wIndex].name}</p>
            </motion.div>
          </div>
        </div>
      </div>

      <section className="flex h-screen overflow-hidden bg-[#ece6d8]">
        <div className="w-sm p-8 flex flex-col justify-between">
          <h1 className="text-[7rem] leading-[0.9] font-light tracking-tight">
            Must-See
            <br />
            Attractions
          </h1>

          <p className="max-w-[360px] text-[1.75rem] leading-tight">
            Montréal is a city of contrasts, where centuries-old cobblestone
            meets bold brutalist architecture, and every neighbourhood tells a
            different story.
          </p>
        </div>

        <div className="flex-1 relative flex">
          {items.map((item, index) => {
            const expanded = active === item.id;

            let x = expanded ? "300%" : "0%";

            // if (item.id > 1 && item.id < active) {
            //   x -= SHIFT;
            // }
            return (
              <motion.div
                key={item.id}
                onHoverStart={() => setActive(item.id)}
                className="inset-y-0 border-l border-black/20 flex"
                // animate={{
                //   x,
                //   // width: expanded ? EXPANDED : COLLAPSED,
                // }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 28,
                }}
                style={{
                  backgroundColor: item.color,
                  left: index == 0 ? "0%" : `${((index + 3) * 100) / 11}%`,
                  width: `${100 / 11}%}`,
                }}
              >
                <div className="flex flex-col relative justify-between">
                  <div className="-rotate-90 ">{item.title}</div>
                  <div className="-rotate-90 ">{item.id}</div>
                </div>
                <div
                style={{
                  position : index === 0 ? "relative" : "absolute"
                }}
                className="col-span-3 flex flex-col left-full">
                  <div>{item?.heading}</div>
                  <div>{item?.desc}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default PinSection;

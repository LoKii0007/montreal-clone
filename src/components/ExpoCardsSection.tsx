"use client";

import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

type Placement = { x: number; rotate: number; y: number };

type CardData = {
  bg: string;
  title: React.ReactNode;
  footer?: React.ReactNode;
  titleBottom?: boolean;
  open: Placement;
  openMobile: Placement;
};

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  return isMobile;
};

const cards: CardData[] = [
  {
    bg: "#f9683a",
    title: (
      <span className="font-bold leading-none tracking-tight">
        Neue
        <br />
        Montreal
        <br />
        Display
      </span>
    ),

    open: { x: -260, rotate: -10, y: 40 },
    openMobile: { x: -55, rotate: 0, y: -40 },
  },
  {
    bg: "#ece23a",
    title: (
      <span className="font-light text-sm md:text-lg italic leading-none tracking-tight">
        Before
        <br />
        Neue
        <br />
        Montreal
      </span>
    ),
    footer: (
      <span className="font-light italic text-xl md:text-5xl leading-none">
        There
        <br />
        was
        <br />
        Montreal
      </span>
    ),
    open: { x: 0, rotate: 2, y: -30 },
    openMobile: { x: 10, rotate: 0, y: 10 },
  },
  {
    bg: "#25c43f",
    title: (
      <span className="font-light leading-none tracking-tight">
        Neue
        <br />
        Montreal
        <br />
        Text
      </span>
    ),
    titleBottom: true,
    open: { x: 260, rotate: 12, y: 30 },
    openMobile: { x: 70, rotate: 0, y: 50 },
  },
];

const Card = ({
  card,
  index,
  progress,
  isMobile,
}: {
  card: CardData;
  index: number;
  progress: MotionValue<number>;
  isMobile: boolean;
}) => {
  const start = 0;
  const end = 1;

  const target = isMobile ? card.openMobile : card.open;

  const x = useTransform(progress, [start, end], [0, target.x]);
  const y = useTransform(progress, [start, end], [0, target.y]);
  const rotate = useTransform(progress, [start, end], [0, target.rotate]);

  return (
    <motion.div
      style={{
        x,
        y,
        rotate,
        backgroundColor: card.bg,
        zIndex: (index <= cards.length / 2 ? index : -index) * 10,
      }}
      className="absolute h-[50vh] md:h-[68vh] w-[clamp(180px,17vw,440px)] md:w-[clamp(280px,24vw,440px)] rounded-md p-2 md:p-8  flex flex-col justify-between text-black text-2xl md:text-[3.2vw] leading-none tracking-tight"
    >
      <div className={`leading-none tracking-tight${card.titleBottom ? " mt-auto" : ""}`}>
        {card.title}
      </div>
      {card.footer && <div>{card.footer}</div>}
    </motion.div>
  );
};

const ExpoCardsSection = () => {
  const containerRef = useRef(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="relative h-[200vh] w-full bg-[#ece6d8]"
    >
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        <div className="flex justify-between border-b border-black/60 px-6 py-3 text-black text-sm">
          <span>
            Born from the bold visual
            <br />
            language of Expo 67
          </span>
          <span className="text-right">
            A typeface shaped by
            <br />
            the streets and soul
            <br />
            of Montreal
          </span>
        </div>

        <div className="relative flex flex-1 items-center justify-center">
          {cards.map((card, i) => (
            <Card
              key={i}
              card={card}
              index={i}
              progress={scrollYProgress}
              isMobile={isMobile}
            />
          ))}
        </div>

        <p className="max-w-xl px-6 pb-8 text-black text-base leading-snug">
          A grotesque rooted in the typographic language of 1960s modernism,
          shaped by the visual ambition of Expo 67. Neue Montreal is its
          contemporary reimagining: refined, expanded, and built for
          today&apos;s screens and streets. Same city.
        </p>
      </div>
    </section>
  );
};

export default ExpoCardsSection;

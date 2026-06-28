"use client";

import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import React, { useRef } from "react";

type CardData = {
  bg: string;
  title: React.ReactNode;
  footer?: React.ReactNode;
  open: { x: number; rotate: number; y: number };
};

const cards: CardData[] = [
  {
    bg: "#ece23a",
    title: (
      <span className="font-light italic">
        Before
        <br />
        Neue
        <br />
        Montreal
      </span>
    ),
    footer: (
      <span className="font-light italic text-5xl leading-none">
        There
        <br />
        was
        <br />
        Montreal
      </span>
    ),
    open: { x: -260, rotate: -10, y: 40 },
  },
  {
    bg: "#f9683a",
    title: (
      <span className="font-bold">
        Neue
        <br />
        Montreal
        <br />
        Display
      </span>
    ),
    open: { x: 0, rotate: 2, y: -30 },
  },
  {
    bg: "#25c43f",
    title: (
      <span className="font-light">
        Neue
        <br />
        Montreal
        <br />
        Text
      </span>
    ),
    open: { x: 260, rotate: 12, y: 30 },
  },
];

const Card = ({
  card,
  index,
  progress,
}: {
  card: CardData;
  index: number;
  progress: MotionValue<number>;
}) => {
  const start = 0;
  const end = 1;

  const x = useTransform(progress, [start, end], [0, card.open.x]);
  const y = useTransform(progress, [start, end], [0, card.open.y]);
  const rotate = useTransform(progress, [start, end], [0, card.open.rotate]);

  return (
    <motion.div
      style={{
        x,
        y,
        rotate,
        backgroundColor: card.bg,
        zIndex: (cards.length - index) * 10,
      }}
      className="absolute h-[68vh] w-[clamp(280px,24vw,440px)] rounded-md p-8  flex flex-col justify-between text-black text-[3.2vw] leading-[0.95] tracking-tight"
    >
      <div>{card.title}</div>
      {card.footer && <div>{card.footer}</div>}
    </motion.div>
  );
};

const ExpoCardsSection = () => {
  const containerRef = useRef(null);
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
            <Card key={i} card={card} index={i} progress={scrollYProgress} />
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

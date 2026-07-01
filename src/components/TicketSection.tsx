"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  useAnimationFrame,
} from "motion/react";
import { wrap } from "motion";
import Image from "next/image";

const tickets = [
  { src: "/images/ticket-1.webp", w: 512, h: 334 },
  { src: "/images/ticket-2.webp", w: 512, h: 330 },
  { src: "/images/ticket-3.webp", w: 2611, h: 1657 },
  { src: "/images/ticket-4.webp", w: 1007, h: 2267 },
  { src: "/images/ticket-5.webp", w: 911, h: 1118 },
];

const TicketMarquee = () => {
  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (v) => `${v}%`);

  useAnimationFrame((_t, delta) => {
    baseX.set(wrap(-50, 0, baseX.get() - (delta / 1000) * 4));
  });

  return (
    <div className="overflow-hidden w-full">
      <motion.div
        style={{ x }}
        className="flex w-max gap-10 will-change-transform"
      >
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex gap-10 shrink-0"
            aria-hidden={copy === 1}
          >
            {tickets.map((t, i) => (
              <Image
                key={i}
                src={t.src}
                alt="Neue Montreal transit ticket"
                width={t.w}
                height={t.h}
                sizes="30vw"
                className="shrink-0 rounded-md shadow-2xl max-h-[60vh] shadow-black/40 w-[20vw] h-auto object-contain hover:rotate-6 transition-all duration-500"
              />
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const TicketSection = () => {
  return (
    <section className="bg-black text-[#ebebeb] w-full py-12 overflow-hidden">
      <div className="px-6">
        <div className="flex items-center justify-between border-b border-white/30 pb-3 text-sm">
          <span>Take your ticket</span>
        </div>

        <div className="grid grid-cols-12 gap-6 pt-10 pb-16">
          <h2 className="col-span-12 lg:col-span-7 text-3xl md:text-7xl font-bold leading-[0.95] tracking-[-0.02em]">
            Built for the city,
            <br />
            read on the move
          </h2>
          <p className="col-span-12 lg:col-span-4 lg:col-start-9 text-sm md:text-lg leading-snug">
            From platform signage to pocket-sized tickets, Neue Montreal was
            made for urban life. Its legibility holds at every scale whether
            printed on a transit pass or displayed on a departure board. A
            typeface that moves as fast as the city it was named after.
          </p>
        </div>
      </div>

      <TicketMarquee />
    </section>
  );
};

export default TicketSection;

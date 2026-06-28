"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  useAnimationFrame,
  useScroll,
} from "motion/react";
import { wrap } from "motion";
import Image from "next/image";
import { useRef } from "react";

const cards = [
  "/images/card-3.png",
  "/images/card-4.png",
  "/images/card-5.png",
  "/images/card-6.png",
  "/images/card-7.png",
  "/images/card-8.png",
  "/images/card-9.png",
  "/images/card-10.png",
];

const CARD_HEIGHT = 560; // 373 x 466 source ratio

const CardMarquee = () => {
  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (v) => `${v}%`);

  // Two identical copies sit side by side; wrapping 0 -> -50% loops seamlessly.
  useAnimationFrame((_t, delta) => {
    baseX.set(wrap(-50, 0, baseX.get() - (delta / 1000) * 3));
  });

  return (
    <div className="overflow-hidden w-full">
      <motion.div
        style={{ x }}
        className="flex w-max will-change-transform"
      >
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex gap-6 pr-6 shrink-0"
            aria-hidden={copy === 1}
          >
            {cards.map((src, i) => (
              <div
                key={i}
                style={{
                  height: CARD_HEIGHT,
                  width: (CARD_HEIGHT * 373) / 466,
                }}
                className="relative shrink-0"
              >
                <Image
                  src={src}
                  alt="Neue Montreal variant poster"
                  fill
                  sizes="40vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const VariantsSection = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["20%", "0%"]);

  return (
    <section className="bg-black text-[#ebebeb] w-full py-16 overflow-hidden min-h-[150vh] flex flex-col justify-center items-center">

      <div className="px-6 text-center flex flex-col items-center">
        <h2 className="text-6xl md:text-[7vw] font-bold leading-[0.9] tracking-[-0.03em]">
          One font fits all.
        </h2>
        <p className="mt-8 max-w-2xl text-lg md:text-2xl leading-snug text-white/85">
          There are also alternative versions: Squeezed tightens the
          letterforms, while Mono uses fixed-width spacing for a more rigid
          feel.
        </p>
      </div>

      <motion.div ref={targetRef} style={{ y }} className="mt-14">
        <CardMarquee />
      </motion.div>
    </section>
  );
};

export default VariantsSection;

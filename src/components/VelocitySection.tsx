"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useMotionValue,
  useAnimationFrame,
} from "motion/react";
import { wrap } from "motion";
import { useRef } from "react";

type Band = {
  glyphs: string;
  background: string;
  color: string;
  baseRotation: number;
  baseVelocity: number;
};

const bands: Band[] = [
  {
    glyphs: "ą å ã â á ă ä à ā ã",
    background: "#161616",
    color: "#4365ff",
    baseRotation: 5,
    baseVelocity: -3,
  },
  {
    glyphs: "ě ẽ é ĕ ê ë è ē ę ě",
    background: "#6b5fe0",
    color: "#161616",
    baseRotation: -5,
    baseVelocity: 4,
  },
  {
    glyphs: "ų ů ñ ú ŭ û ü ù ū ñ",
    background: "#f9683a",
    color: "#33A450",
    baseRotation: 5,
    baseVelocity: -3.5,
  },
];

const Marquee = ({
  glyphs,
  background,
  color,
  baseRotation,
  baseVelocity,
}: Band) => {
  const baseX = useMotionValue(0);

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  // Scroll velocity speeds up / reverses the scroll of the glyphs.
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  // The band's rotation nudges with scroll direction + velocity.
  const rotate = useTransform(
    smoothVelocity,
    [-2000, 0, 2000],
    [baseRotation + 4, baseRotation, baseRotation - 4],
    { clamp: true },
  );
  const smoothRotate = useSpring(rotate, { damping: 40, stiffness: 200 });

  // Each glyph group is repeated; wrap keeps the track seamless.
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((_t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <motion.div
      style={{ backgroundColor: background, rotate: smoothRotate }}
      className="relative w-[140%] -ml-[20%] overflow-hidden py-6"
    >
      <motion.div
        style={{ x, color }}
        className="flex whitespace-nowrap text-[10vw] font-bold leading-none tracking-[-0.02em] will-change-transform"
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="block pr-[0.3em]">
            {glyphs}
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
};

const VelocitySection = () => {
  return (
    <section className="bg-[#f0e7d4] text-black w-full overflow-hidden">
      <div className="flex flex-col gap-26 p-6">
        <div className="col-span-12 lg:col-span-7">
          <p className="text-2xl">Accents &amp; Diacritics</p>
          <h2 className="mt-8 text-3xl md:text-5xl lg:text-7xl font-bold leading-[0.95] tracking-[-0.02em]">
            Every mark,
            <br />
            perfectly placed
          </h2>
        </div>
        <div className=" flex justify-end">
          <p className=" text-sm md:text-2xl leading-snug max-w-xl">
            Inspired by the multicultural energy of Expo 67, where 62 nations
            converged on Montreal, Neue Montreal was built to speak every
            language fluently. Its extensive range of accents and diacritical
            marks ensures that no character loses its form or rhythm, no matter
            the tongue. Each accent is drawn with the same precision as the base
            letterform: nothing feels added, everything belongs.
          </p>
        </div>
      </div>

      <div className="relative flex flex-col gap-10 py-16 -mt-8 ">
        {bands.map((band, i) => (
          <Marquee key={i} {...band} />
        ))}
      </div>
    </section>
  );
};

export default VelocitySection;

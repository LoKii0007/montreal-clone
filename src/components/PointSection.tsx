"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  useAnimationFrame,
} from "motion/react";
import { wrap } from "motion";
import React from "react";

// A horizontally scrolling strip of alternating squares and circles.
const DotMarquee = ({ direction = 1 }: { direction?: number }) => {
  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (v) => `${v}%`);

  useAnimationFrame((_t, delta) => {
    baseX.set(wrap(-50, 0, baseX.get() - direction * (delta / 1000) * 3));
  });

  return (
    <div className="overflow-hidden w-full">
      <motion.div style={{ x }} className="flex w-max will-change-transform">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
            {Array.from({ length: 24 }).map((_, i) => (
              <span
                key={i}
                className={`mx-6 block h-20 w-20 bg-white ${
                  i % 2 === 0 ? "rounded-none" : "rounded-full"
                }`}
              />
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const PointSection = () => {
  return (
    <section className="relative  w-full">
      <div className="h-screen w-full overflow-hidden">
        {/* Pinned video background */}
        <video
          src="/videos/pinned-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 z-10 bg-black/20" />

        {/* Top + bottom marquee strips */}
        <div className="absolute top-6 left-0 z-20 w-full">
          <DotMarquee direction={1} />
        </div>
        <div className="absolute bottom-6 left-0 z-20 w-full">
          <DotMarquee direction={-1} />
        </div>

        {/* Foreground copy */}
        <div className="relative z-20 flex h-full items-center px-6">
          <div className="text-[#ebebeb]">
            <h2 className="text-6xl md:text-[7vw] font-bold leading-[0.95] tracking-[-0.03em]">
              Get from
              <br />
              one po<span className="text-[#1fd64a]">i</span>nt
              <span className="text-[#1fd64a]">,</span>
              <br />
              to another<span className="text-[#1fd64a]">!</span>
            </h2>
            <p className="mt-4 text-xl text-white/80">(Square to round dots)</p>
          </div>
        </div>

        {/* Oversized punctuation accent on the right */}
        <div className="pointer-events-none absolute right-[8%] top-1/2 z-20 hidden -translate-y-1/2 lg:block">
          <span className="block h-24 w-24 rounded-full bg-[#1fd64a]" />
          <span className="ml-4 block text-[16vw] leading-[0.4] text-[#1fd64a]">
            ,
          </span>
        </div>
      </div>
    </section>
  );
};

export default PointSection;

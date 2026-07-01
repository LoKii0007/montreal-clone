"use client";

import Image from "next/image";
import NavButton from "./NavButton";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";

const columns = [
  {
    title: "Navigation",
    links: [
      "Story",
      "In use",
      "Weights",
      "Ligatures",
      "Languages",
      "Accents",
      "Variants",
    ],
  },
  {
    title: "Versions of Neue Montreal",
    links: [
      "Neue Montreal Display",
      "Neue Montreal Text",
      "Neue Montreal Mono",
      "Neue Montreal Squeezed",
    ],
  },
  {
    title: "Pangram Pangram",
    links: ["About us", "Our fonts", "FAQ", "Contact us"],
  },
  {
    title: "Socials",
    links: ["Instagram", "Twitter", "Youtube", "Facebook"],
  },
];

const Footer = () => {
  const footerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["30% end", "end 90%"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "0%"]);
  return (
    <footer
      ref={footerRef}
      className="relative w-full overflow-hidden text-black p-6"
    >
      <Image
        fill
        alt="image"
        src={"/images/red-bg.jpg"}
        className="w-full h-auto object-cover absolute -z-10"
      />
      <div className="pb-6">
        <div className="grid grid-cols-2 gap-y-10 gap-x-6  pb-10 md:grid-cols-4 lg:grid-cols-[auto_repeat(4,1fr)]">
          {/* Spinning circular mark */}
          <div
            style={{ animationDuration: "10s" }}
            className="col-span-2 lg:col-span-1 relative w-20 h-20 shrink-0 animate-spin"
          >
            {Array.from({ length: 8 }).map((_, i) => {
              const imgSize = 22;
              const radius = (80 - imgSize) / 2;
              const angle = (i * 2 * Math.PI) / 8 - Math.PI / 2;
              const cx = radius + radius * Math.cos(angle);
              const cy = radius + radius * Math.sin(angle);
              const rotateDeg = (i * 360) / 8;
              return (
                <Image
                  key={i}
                  src="/images/logo-black.png"
                  width={imgSize}
                  height={imgSize}
                  alt="Neue Montreal mark"
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

          {columns.map((col, index) => (
            <div
              key={col.title}
              className={`border-black/40 lg:border-l lg:pl-4 ${
                index % 2 === 0 ? "border-l-0 pl-0" : "border-l pl-4"
              }`}
            >
              <h3 className="mb-4 text-base">{col.title}</h3>
              <ul className="space-y-1.5 text-base">
                {col.links.map((link) => (
                  <NavButton text={link} key={link} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <motion.div style={{ y }}>
        <h2 className="select-none text-center font-bold leading-[0.8] tracking-[-0.04em] text-[14vw] pt-[10vh] border-t border-black/40">
          Neue Montreal
        </h2>

        <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between border-t border-black/40 pt-3 text-sm">
          <span>
            All rights reserved{" "}
            <strong className="font-semibold">Pangram Pangram</strong>
          </span>
          <span>
            Site by <strong className="font-semibold">Demande Spéciale</strong>
          </span>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;

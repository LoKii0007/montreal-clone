"use client";

import { useState } from "react";
import NavButton from "./NavButton";
import Image from "next/image";
import { motion } from "motion/react";

const navLinks = [
  {
    label: "story",
    href: "#story",
  },
  {
    label: "In use",
    href: "#In use",
  },
  {
    label: "weights",
    href: "#weights",
  },
  {
    label: "liatures",
    href: "#liatures",
  },
  {
    label: "languages",
    href: "#languages",
  },
  {
    label: "accents",
    href: "#accents",
  },
  {
    label: "variants",
    href: "#variants",
  },
];

const Navbar = () => {
  const [hovered, setHovered] = useState(false);

  const container = {
    hidden: {
      transition: {
        staggerChildren: 0.03,
      },
    },
    visible: {
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const child = {
    hidden: {
      y: "0%",
    },
    visible: {
      y: "-100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const,
      },
    },
  };

  const bottomChild = {
    hidden: {
      y: "100%",
    },
    visible: {
      y: "0%",
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: "10%" }}
        animate={{ opacity: 1, y: "0%" }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.15 * 3,
        }}
        className="flex w-full justify-center items-center z-50 sticky top-0 "
      >
        <div className="w-full p-4 flex justify-between items-center">
          <button className="bg-white text-black px-4 py-2 rounded-full font-semibold">
            <Image
              src={"/images/logo-black.png"}
              width={32}
              height={32}
              alt="bg"
            />
          </button>
          <div className="px-5 py-3 bg-white rounded-full text-black lg:block hidden">
            <ul className="flex gap-4">
              {navLinks.map((nav) => (
                <NavButton key={nav.href} text={nav.label} />
              ))}
            </ul>
          </div>
          <button className="px-4 py-3 relative flex flex-col overflow-y-hidden ease-linear text-xs rounded-full border-white border-2 bg-black text-white hover:bg-white hover:text-black hover:border-black transition-all duration-300">
            <div
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="relative"
            >
              <motion.div
                variants={container}
                initial="hidden"
                animate={hovered ? "visible" : "hidden"}
                className=""
              >
                {"Get PP Neue Montreal".split("").map((letter, i) =>
                  letter === " " ? (
                    <span key={i}>&nbsp;</span>
                  ) : (
                    <span key={i} className="inline-block overflow-hidden">
                      <motion.span className="inline-block" variants={child}>
                        {letter}
                      </motion.span>
                    </span>
                  ),
                )}
              </motion.div>
              <motion.div
                variants={container}
                initial="hidden"
                animate={hovered ? "visible" : "hidden"}
                className="absolute top-0 left-0"
              >
                {"Get PP Neue Montreal".split("").map((letter, i) =>
                  letter === " " ? (
                    <span key={i}>&nbsp;</span>
                  ) : (
                    <span key={i} className="inline-block overflow-hidden">
                      <motion.span
                        className="inline-block"
                        variants={bottomChild}
                      >
                        {letter}
                      </motion.span>
                    </span>
                  ),
                )}
              </motion.div>
            </div>
          </button>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;

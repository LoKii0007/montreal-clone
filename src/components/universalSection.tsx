"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, animate } from "motion/react";

const UniversalSection = () => {
  const centerTextRef = useRef<HTMLDivElement>(null);
  const desc1Ref = useRef<HTMLDivElement>(null);
  const desc2Ref = useRef<HTMLDivElement>(null);
  const desc3Ref = useRef<HTMLDivElement>(null);

  const [center, setCenter] = useState({
    x: 0,
    y: 0,
    radius: 0,
  });

  const { scrollYProgress } = useScroll({
    target: centerTextRef,
    offset: ["start end", "center center"],
  });
  const { scrollYProgress: desc1Y } = useScroll({
    target: desc1Ref,
    offset: ["start 80%", "start 70%"],
  });
  const { scrollYProgress: desc2Y } = useScroll({
    target: desc2Ref,
    offset: ["start 80%", "start 70%"],
  });
  const { scrollYProgress: desc3Y } = useScroll({
    target: desc3Ref,
    offset: ["start 80%", "start 70%"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const desc1Opacity = useTransform(desc1Y, [0, 1], [0, 1]);
  const desc1YValue = useTransform(desc1Y, [0, 1], ["100%", "0%"]);

  const desc2Opacity = useTransform(desc2Y, [0, 1], [0, 1]);
  const desc2YValue = useTransform(desc2Y, [0, 1], ["100%", "0%"]);

  const desc3Opacity = useTransform(desc3Y, [0, 1], [0, 1]);
  const desc3YValue = useTransform(desc3Y, [0, 1], ["100%", "0%"]);

  useEffect(() => {
    const controls = animate(
      ".image-parent",
      { rotate: 360 },
      { duration: 10, repeat: Infinity, ease: "linear" },
    );
    controls.pause();

    const el = centerTextRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.boundingClientRect.top <= window.innerHeight) {
          controls.play();
        } else {
          controls.pause();
        }
      },
      { threshold: 0, rootMargin: "10% 0px -0px 0px" },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      controls.stop();
    };
  }, []);

  useEffect(() => {
    const el = centerTextRef.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();

      setCenter({
        x: rect.width / 2,
        y: rect.height / 2,
        radius: window.innerWidth * 0.3,
      });
    };

    update();

    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(el);

    window.addEventListener("resize", update);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="bg-black">
      <div className="relative flex min-h-[100vw] w-full items-center justify-center overflow-hidden">
        <div
          ref={centerTextRef}
          className="relative flex w-fit items-center justify-center overflow-visible p-12 text-8xl font-medium leading-[90%] tracking-[-0.05em] text-[#ebebeb]"
        >
          <div className="relative z-10">
            <div ref={desc1Ref} className="overflow-hidden">
              <motion.h1
                style={{
                  opacity: desc1Opacity,
                  y: desc1YValue,
                }}
              >
                The
              </motion.h1>
            </div>

            <div ref={desc2Ref} className="overflow-hidden">
              <motion.h1
                style={{
                  opacity: desc2Opacity,
                  y: desc2YValue,
                }}
              >
                Universal
              </motion.h1>
            </div>

            <div ref={desc3Ref} className="overflow-hidden">
              <motion.h1
                className="text-right"
                style={{
                  opacity: desc3Opacity,
                  y: desc3YValue,
                }}
              >
                Font
              </motion.h1>
            </div>
          </div>
          <motion.div
            initial
            style={{
              scale,
            }}
            className="absolute z-20 h-full w-full image-parent"
          >
            {Array.from({ length: 8 }).map((_, i) => {
              const angle = (i * 2 * Math.PI) / 8 - Math.PI / 2;

              const x = center.x + center.radius * Math.cos(angle);

              const y = center.y + center.radius * Math.sin(angle);

              const rotateDeg = (i * 360) / 8;

              const src = `/images/card-${i + 3}.png`;

              return (
                <Image
                  key={i}
                  src={src}
                  alt="card"
                  width={center.radius * 0.5}
                  height={center.radius * 0.5}
                  priority
                  style={{
                    position: "absolute",
                    left: x,
                    top: y,
                    transform: `translate(-50%, -50%) rotate(${rotateDeg}deg)`,
                    zIndex: 10,
                  }}
                  className="object-contain"
                />
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default UniversalSection;

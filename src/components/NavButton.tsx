"use client";

import React, { useEffect, useRef, useState } from "react";

const NavButton = ({ text }: { text: string }) => {
  const wordRef = useRef<HTMLSpanElement[]>([]);
  const isHoverRef = useRef(false);
  const rectsRef = useRef<DOMRect[]>([]);

  const cacheRects = () => {
    rectsRef.current = wordRef.current.map((el) => el.getBoundingClientRect());
  };

  const resetWeights = () => {
    wordRef.current.forEach((el) => (el.style.fontWeight = "400"));
  };

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!isHoverRef.current) return;
      const mouseX = e.clientX;
      const maxDistance = 30;

      rectsRef.current.forEach((rect, i) => {
        const centerX = rect.left + rect.width / 2;
        const distance = Math.abs(mouseX - centerX);
        const weight = Math.max(
          400,
          Math.round(900 - (distance / maxDistance) * 500),
        );
        wordRef.current[i].style.fontWeight = String(weight);
      });
    };

    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <li
      onMouseEnter={() => {
        isHoverRef.current = true;
        cacheRects();
      }}
      onMouseLeave={() => {
        isHoverRef.current = false;
        resetWeights();
      }}
      className="cursor-pointer flex"
    >
      {text.split("").map((letter, i) => (
        <span
          ref={(el) => {
            if (el) wordRef.current[i] = el;
          }}
          key={i}
          className="transition-all duration-150 font-(--font-inter) capitalize"
        >
          {letter}
        </span>
      ))}
    </li>
  );
};

export default NavButton;

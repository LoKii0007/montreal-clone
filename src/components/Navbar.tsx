import React from "react";
import NavButton from "./NavButton";

const Navbar = () => {
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

  return (
    <>
      <nav className="flex w-full justify-center items-center">
        <div className="w-full p-4 flex justify-between items-center">
          <div></div>
          <div className="px-5 py-3 bg-white rounded-full text-black">
            <ul className="flex gap-4">
              {navLinks.map((nav) => (
                <NavButton key={nav.href} text={nav.label} />
              ))}
            </ul>
          </div>
          <div></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

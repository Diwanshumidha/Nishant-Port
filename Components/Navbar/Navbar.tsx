"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isscrolled, setisscrolled] = useState(false);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setisscrolled(position > 400);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`text-4xl h-16 z-20 flex  px-9 fixed  w-full  items-center bg-black   `}
    >
      <Link href={"/"}>
        <span className=" Text-stylish text-white ">Nishant</span>
      </Link>
    </div>
  );
};

export default Navbar;

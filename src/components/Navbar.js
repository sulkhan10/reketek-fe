import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`bg-gray-800 flex h-12 fixed top-2 left-2 right-2 justify-between px-12 items-center rounded-xl ${
        isMenuOpen ? "rounded-t-xl " : "rounded-t-xl"
      }`}
    >
      <div>HOME</div>
      <div
        className={`flex items-center md:hidden ${
          isMenuOpen ? "relative " : ""
        }`}
      >
        <button
          type="button"
          onClick={toggleMenu}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            )}
          </svg>
        </button>
        {isMenuOpen && (
          <div className="fixed top-12 left-2 right-2 bottom-2 bg-gray-800 rounded-b-xl">
            <div className="flex flex-col items-center justify-center h-full">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/service">Service</Link>
              <div className="px-2 rounded-xl border-zinc-50 border-2">
          <Link href="/contact">Contact</Link>
        </div>            </div>
          </div>
        )}
      </div>
      <div className="hidden md:flex gap-8 items-center justify-center">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/service">Service</Link>
        <div className="px-2 rounded-xl border-zinc-50 border-2">
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

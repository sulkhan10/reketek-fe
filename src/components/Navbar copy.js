import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`bg-gray-950 flex h-12 fixed top-2 left-2 right-2 justify-between px-12 items-center shadow-xl z-50  ${
        isMenuOpen ? "rounded-t-xl " : "rounded-xl drop-shadow-[5px_5px_5px_rgba(255,255,255,0.20)]"
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
          <div className="fixed top-14 left-2 right-2 bottom-2 rounded-b-xl overflow-hidden bg-cover bg-[url('https://images.unsplash.com/photo-1637806486870-308bbc1471b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXJvd2FuYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60')]">
            <div className="bg-gray-900 bg-opacity-50 h-full">
              <div className="flex flex-col items-center justify-center h-full gap-[2vh]">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/service">Service</Link>
                <div className="px-2 rounded-xl border-zinc-50 border-2">
                  <Link href="/contact">Contact</Link>
                </div>
              </div>
            </div>
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

// ./src\app\about\page.tsx
"use client"
import React from "react";
import Navbar from "../../components/Navbar";

// Rest of the code...

// import Navbar from "@/components/Navbar";
// import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const DynamicNavbar = dynamic(() => import("../../components/Navbar"), {
  ssr: false,
});
export default function About() {
  return (
     <main className=" h-[100vh] bg-red-100  p-12 flex flex-col ">
      {/* <div className="bg-gray-800 flex h-12 fixed top-2 left-2 right-2  justify-between px-12 items-center  rounded-xl">
        <div>HOME</div>
        <div className="flex gap-8 items-center justify-center">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/service">Service</Link>
          <div className="px-2 rounded-xl border-zinc-50 border-2">

          <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div> */}
      <DynamicNavbar />
      <div>
        About
      </div>
    </main>
  );
}

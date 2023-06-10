
"use client"
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";

const DynamicNavbar = dynamic(() => import("../../components/Navbar"), {
  ssr: false,
});
export default function Contact() {
  return (
     <main className=" h-[100vh] bg-red-100  p-12 flex flex-col ">
         <DynamicNavbar />

      <div>
        About
      </div>
    </main>
  );
}

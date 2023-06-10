"use client"

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "../../components/ProductCard.js";
import dynamic from "next/dynamic";

const DynamicNavbar = dynamic(() => import("../../components/Navbar.js"), {
  ssr: false,
});
export default function Service() {
  return (
    <main className=" h-[100vh] bg-red-100  p-12 flex flex-col ">
          <DynamicNavbar />


      <div className="z-0">
      <ProductCard productName="Moto"/>
      </div>
    </main>
  );
}

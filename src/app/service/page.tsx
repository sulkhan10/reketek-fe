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
    <main className="md:h-screen bg-red-100 p-12 flex flex-col">
    <DynamicNavbar />
  
    <div className="flex flex-wrap justify-center md:flex-row gap-10 pt-12 md:pt-24">
      <ProductCard productName="Moto" />
      <ProductCard productName="Card 2" />
      <ProductCard productName="Card 3" />
      <ProductCard productName="Card 4" />
      <ProductCard productName="Card 5" />
      <ProductCard productName="Card 6" />
      <ProductCard productName="Card 7" />
      <ProductCard productName="Card 8" />
    </div>
  </main>
  
  );
}

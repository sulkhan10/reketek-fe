"use client"

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "../../components/ProductCard.js";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";

const DynamicNavbar = dynamic(() => import("../../components/Navbar.js"), {
  ssr: false,
});
export default function Service() {
  return (
    <main className=" bg-gray-200  flex flex-col">
    <DynamicNavbar />
  
    {/* <div className="flex flex-wrap justify-center md:flex-row gap-10 pt-12 md:py-24">
      <ProductCard productName="Moto" />
      <ProductCard productName="Card 2" />
      <ProductCard productName="Card 3" />
      <ProductCard productName="Card 4" />
      <ProductCard productName="Card 5" />
      <ProductCard productName="Card 6" />
      <ProductCard productName="Card 7" />
      <ProductCard productName="Card 8" />
    </div> */}

<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-gray-700 uppercase rounded-full bg-blue-400">
            Brand new
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-700 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="bc9273ce-29bb-4565-959b-714607d4d027"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#bc9273ce-29bb-4565-959b-714607d4d027)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Choose</span>
          </span>{' '}
          your way. Advance everyday.
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>
      <div className="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
        <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
          <div className="relative w-full h-48">
            <img
              src="https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              className="object-cover w-full h-full rounded-t"
              alt="Plan"
            />
          </div>
          <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
            <div>
            <div className="text-lg text-gray-900 font-semibold">
                Basic</div>
              <p className="text-sm text-gray-900">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                doloremque.
              </p>
              <div className="mt-1 mb-4 mr-1 text-4xl text-gray-900 font-bold sm:text-5xl">
                $12
              </div>
            </div>
          <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-100 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
            >
              Buy Basic
            </a>
          </div>
        </div>
        <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
          <div className="relative w-full h-48">
            <img
              src="https://images.pexels.com/photos/3183181/pexels-photo-3183181.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              className="object-cover w-full h-full rounded-t"
              alt="Plan"
            />
          </div>
          <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
            <div>
              <div className="text-lg text-gray-900 font-semibold">
                Advanced</div>
              <p className="text-sm text-gray-900">
                A flower in my garden, a mystery in my panties. Heart attack
                never was so close.
              </p>
              <div className="mt-1 mb-4 mr-1 text-4xl text-gray-900 font-bold sm:text-5xl">
                $38
              </div>
            </div>
            <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-100 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
            >
              Buy Advanced
            </a>
          </div>
        </div>
        <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
          <div className="relative w-full h-48">
            <img
              src="https://images.pexels.com/photos/3182743/pexels-photo-3182743.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              className="object-cover w-full h-full rounded-t"
              alt="Plan"
            />
          </div>
          <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
            <div>
            <div className="text-lg text-gray-900 font-semibold">
                Pro</div>
              <p className="text-sm text-gray-900">
                We never had the chance to. Maybe it was the eleven months he
                spent in the womb.
              </p>
              <div className="mt-1 mb-4 mr-1 text-4xl text-gray-900 font-bold sm:text-5xl">
                $78
              </div>
            </div>
          <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-100 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
            >
              Buy Pro
            </a>
          </div>
        </div>
      </div>
      <div className="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto pt-12">
        <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
          <div className="relative w-full h-48">
            <img
              src="https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              className="object-cover w-full h-full rounded-t"
              alt="Plan"
            />
          </div>
          <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
            <div>
            <div className="text-lg text-gray-900 font-semibold">
                Basic</div>
              <p className="text-sm text-gray-900">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                doloremque.
              </p>
              <div className="mt-1 mb-4 mr-1 text-4xl text-gray-900 font-bold sm:text-5xl">
                $12
              </div>
            </div>
          <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-100 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
            >
              Buy Basic
            </a>
          </div>
        </div>
        <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
          <div className="relative w-full h-48">
            <img
              src="https://images.pexels.com/photos/3183181/pexels-photo-3183181.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              className="object-cover w-full h-full rounded-t"
              alt="Plan"
            />
          </div>
          <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
            <div>
              <div className="text-lg text-gray-900 font-semibold">
                Advanced</div>
              <p className="text-sm text-gray-900">
                A flower in my garden, a mystery in my panties. Heart attack
                never was so close.
              </p>
              <div className="mt-1 mb-4 mr-1 text-4xl text-gray-900 font-bold sm:text-5xl">
                $38
              </div>
            </div>
            <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-100 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
            >
              Buy Advanced
            </a>
          </div>
        </div>
        <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
          <div className="relative w-full h-48">
            <img
              src="https://images.pexels.com/photos/3182743/pexels-photo-3182743.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              className="object-cover w-full h-full rounded-t"
              alt="Plan"
            />
          </div>
          <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
            <div>
            <div className="text-lg text-gray-900 font-semibold">
                Pro</div>
              <p className="text-sm text-gray-900">
                We never had the chance to. Maybe it was the eleven months he
                spent in the womb.
              </p>
              <div className="mt-1 mb-4 mr-1 text-4xl text-gray-900 font-bold sm:text-5xl">
                $78
              </div>
            </div>
          <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-100 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
            >
              Buy Pro
            </a>
          </div>
        </div>
      </div>
    </div>

    <Footer/>

  </main>
  
  );
}

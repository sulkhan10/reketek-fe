import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ productName }) => {
  const phoneNumber = process.env.WHATSAPP_NUMBER;
  const encodedProductName = encodeURIComponent(productName);

  return (
    <Link
      href={`https://wa.me/${phoneNumber}?text=${encodedProductName}`}
      target="_blank"
      className=""
    >
      <div className="relative w-80 p-4 overflow-hidden bg-white shadow-lg rounded-2xl">
        <Image
          src="/image1.jpg"
          alt="moto"
          width={200}
          height={200}
          className="absolute w-40 h-40 mb-4 -right-20 -bottom-8"
        />
        <div className="w-4/6">
          <p className="mb-2 text-lg font-medium text-gray-800">
            {productName}
          </p>
          <p className="text-xs text-gray-400">
            Detail is not an obsession, it is the very essence of perfection.
          </p>
          <p className="text-xl font-medium text-indigo-500">$399</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

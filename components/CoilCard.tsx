"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CoilCardProps {
  name: string;
  type: string;
  description: string;
  price: number;
  image: string;
  resistance: string;
  diameter: string;
  material: string;
  wattage: string;
  bestFor: string;
  onAddToCart: () => void;
}
const CoilCard = ({
  name,
  type,
  description,
  price,
  image,
  resistance,
  diameter,
  material,
  wattage,
  bestFor,
  onAddToCart,
}: CoilCardProps) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-red-500 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10">
      {/* Coil Image */}
      <div className="relative h-64 bg-black">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-t-lg h-full"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Badge */}
        <span className="absolute top-2 right-2 bg-red-600 text-xs font-bold px-2 py-1 rounded">
          {type}
        </span>
      </div>

      {/* Coil Details */}
      <div className="p-4">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-gray-400 text-sm mb-3">{description}</p>

        {/* Technical Specs */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="bg-gray-900/50 p-2 rounded">
            <p className="text-xs text-gray-400">Resistance</p>
            <p className="font-mono">{resistance}</p>
            <p className="text-xs text-gray-400">ID</p>
            <p className="font-mono">{diameter}</p>
          </div>
          <div className="bg-gray-900/50 p-2 rounded">
            <p className="text-xs text-gray-400">Material</p>
            <p className="font-medium">{material}</p>
          </div>
          <div className="bg-gray-900/50 p-2 rounded">
            <p className="text-xs text-gray-400">Wattage</p>
            <p className="font-medium">{wattage}</p>
          </div>
          <div className="bg-gray-900/50 p-2 rounded">
            <p className="text-xs text-gray-400">Best For</p>
            <p className="font-medium">{bestFor}</p>
          </div>
        </div>
        {/* Price and Action */}
        <div className="mt-auto">
          <p className="text-2xl font-bold text-red-500 mb-4">
            Rp {price.toLocaleString()}
          </p>
          <Button
            onClick={onAddToCart} // Panggil onAddToCart saat tombol diklik
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition-colors"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CoilCard;

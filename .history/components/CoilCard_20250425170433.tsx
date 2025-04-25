"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

interface CoilCardProps {
  name: string;
  type: string;
  description: string;
  price: number;
  image: string;
  resistance: string;
  material: string;
  wattage: string;
  bestFor: string;
}
const CoilCard = ({ name, type, description, price, image, resistance, material, wattage, bestFor }: CoilCardProps) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-red-500 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10">
      {/* Coil Image */}
      <div className="relative h-48 bg-black">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain p-4"
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
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-red-400">${price}</span>
          <Button className="bg-red-600 hover:bg-red-700 px-4 py-2 text-sm">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CoilCard;
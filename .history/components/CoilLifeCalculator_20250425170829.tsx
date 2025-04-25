// components/CoilLifeCalculator.jsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const CoilLifeCalculator = () => {
  const [puffsPerDay, setPuffsPerDay] = useState(100);
  const [eLiquidType, setELiquidType] = useState("70/30");

  const calculateLife = () => {
    // Logika perhitungan
    const baseDays = eLiquidType === "50/50" ? 14 : 10;
    return Math.floor(baseDays * (100 / puffsPerDay));
  };

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          COIL LIFESPAN CALCULATOR
        </h2>
        
        <div className="bg-gray-900 rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <label className="block mb-2">Puffs per day</label>
              <input 
                type="range" 
                min="50" 
                max="300" 
                value={puffsPerDay}
                onChange={(e) => setPuffsPerDay(parseInt(e.target.value))}
                className="w-full"
              />
              <div className="text-center mt-2">{puffsPerDay} puffs/day</div>
            </div>
            
            <div>
              <label className="block mb-2">E-liquid VG/PG Ratio</label>
              <select 
                value={eLiquidType}
                onChange={(e) => setELiquidType(e.target.value)}
                className="w-full bg-gray-800 p-3 rounded"
              >
                <option value="50/50">50/50 (Sweet)</option>
                <option value="70/30">70/30 (Balanced)</option>
                <option value="80/20">80/20 (Cloud)</option>
              </select>
            </div>
          </div>
          
          <div className="text-center p-6 bg-red-900/30 rounded-lg">
            <h3 className="text-xl font-bold mb-2">ESTIMATED COIL LIFE</h3>
            <p className="text-4xl font-bold">{calculateLife()} Days</p>
            <p className="text-gray-400 mt-2">Based on average usage</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoilLifeCalculator;
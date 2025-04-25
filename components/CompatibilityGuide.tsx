// components/CompatibilityGuide.jsx
const compatibleDevices = [
  {
    brand: "Voopoo",
    models: ["Drag Series", "Argus Pro", "Vinci"],
  },
  // Tambahkan brand lainnya...
];

const CompatibilityGuide = () => {
  return (
    <section className="py-16 bg-gray-900 text-white mb-20 rounded-xl">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">DEVICE COMPATIBILITY</h2>
            <p className="text-gray-400 mb-8">
              Our coils work with most popular pod systems and mods
            </p>
            <ul className="space-y-4">
              {compatibleDevices.map((device, index) => (
                <li key={index} className="border-l-2 border-red-500 pl-4">
                  <h3 className="font-bold">{device.brand}</h3>
                  <p className="text-gray-400">{device.models.join(", ")}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-1/2 bg-gray-800 rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4">HOW TO INSTALL</h3>
            <ol className="list-decimal pl-5 space-y-3 text-gray-300">
              <li>Prime your coil with e-liquid</li>
              <li>Insert into tank/pod until snug</li>
              <li>Wait 5 minutes before first use</li>
              <li>Start at lower wattage and adjust</li>
            </ol>
            <div className="mt-6 p-4 bg-black rounded border border-gray-700">
              <p className="text-red-400 font-medium">Pro Tip:</p>
              <p>For best longevity, stay within recommended wattage range</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompatibilityGuide;
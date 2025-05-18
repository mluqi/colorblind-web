const CompatibilityGuide = () => {
  return (
    <section className="py-16 bg-gray-900 text-white mb-20 rounded-xl mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 bg-gray-800 rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4">HOW TO INSTALL COIL</h3>
            <ol className="list-decimal pl-5 space-y-3 text-gray-300">
              <li>Cut and adjust the coil legs to the appropriate length</li>
              <li>Install it into the atomizer and tighten the screws</li>
              <li>Burn the coil at a low wattage (15 - 25 watts)</li>
              <li>Wait 2 minutes for the coil to cool down</li>
              <li>Insert the cotton with a suitable thickness</li>
              <li>Drip e-liquid and heat it at low wattage</li>
            </ol>
            <div className="mt-6 p-4 bg-black rounded border border-gray-700">
              <p className="text-red-400 font-medium">Pro Tip:</p>
              <p>For best longevity, stay within recommended wattage range</p>
            </div>
          </div>
          <div className="lg:w-1/2 bg-gray-800 rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4">HOW TO CHANGE COTTON</h3>
            <ol className="list-decimal pl-5 space-y-3 text-gray-300">
              <li>Prepare your favorite cotton (only use cotton for vaping)</li>
              <li>Take the amount of cotton needed for either a double or single coil</li>
              <li>Insert the cotton into the coil, fitting it to the required size</li>
              <li>Drip e-liquid into the cotton and burn it at a low wattage (15 - 25 watts)</li>
              <li>Enjoy your vaping time</li>
            </ol>
            <div className="mt-6 p-4 bg-black rounded border border-gray-700">
              <p className="text-red-400 font-medium">Pro Tip:</p>
              <p>Change your cotton 1 - 3 days to get the best flavour and durability of the coil</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompatibilityGuide;

// components/CoilComparison.jsx
const comparisonData = [
  {
    feature: "Material",
    basic: "Kanthal",
    premium: "Ni80/SS316L",
    expert: "Aliens/Claptons",
  },
  // Tambahkan data perbandingan lainnya...
];

const CoilComparison = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          FIND YOUR PERFECT COIL
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-4 px-6">Features</th>
                <th className="py-4 px-6">Basic Series</th>
                <th className="py-4 px-6">Premium Line</th>
                <th className="py-4 px-6">Expert Build</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-800 hover:bg-gray-900"
                >
                  <td className="py-4 px-6 font-medium">{row.feature}</td>
                  <td className="py-4 px-6 text-center">{row.basic}</td>
                  <td className="py-4 px-6 text-center">{row.premium}</td>
                  <td className="py-4 px-6 text-center">{row.expert}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default CoilComparison;
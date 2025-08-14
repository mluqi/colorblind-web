import Image from "next/image";
import Link from "next/link";

const ecommercePlatforms = [
  {
    name: "Tokopedia",
    logo: "/assets/ecommerce/tokopedia.png", 
    url: "https://tk.tokopedia.com/ZSSwHJPvf/",
  },
  {
    name: "Toco",
    logo: "/assets/ecommerce/toco.png", 
    url: "https://toco.id/store/colorblind-wire?utm_medium=social&utm_campaign=share-link&utm_content=store-profile",
  },
];

const ShopNow = () => {
  return (
    <div className="py-12 bg-black bg-opacity-20 backdrop-blur-sm rounded-lg">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-xl font-semibold text-gray-300 mb-8 tracking-wider">
            Or Shop Now on
        </h3>
        <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap">
          {ecommercePlatforms.map((platform) => (
            <Link
              href={platform.url}
              key={platform.name}
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-all duration-300 hover:scale-110"
            >
              <Image
                src={platform.logo}
                alt={`${platform.name} logo`}
                width={150}
                height={50}
                className="object-contain h-12 md:h-14 filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopNow;

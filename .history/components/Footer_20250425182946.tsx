import Link from "next/link";
import Image from "next/image";

import {FaFacebook, FaInstagram, FaTiktok} from "react-icons/fa";

const socmedicons = {
    name: Facebok,
}

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center">
              <Image 
                src="/assets/logo.png" 
                alt="Coil Masters Logo" 
                width={160} 
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-400">
              Premium prebuilt coils for the discerning vaper. Engineered for performance and flavor.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'instagram', 'twitter'].map((social) => (
                <Link 
                  key={social}
                  href={`https://${social}.com/yourbrand`} 
                  className="text-gray-400 hover:text-red-500 transition"
                >
                  <Image
                    src={`/assets/social/${social}.svg`}
                    alt={social}
                    width={24}
                    height={24}
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-red-400">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Shop Coils', href: '/shop' },
                { name: 'Compatibility Guide', href: '/compatibility' },
                { name: 'Coil Building Tutorials', href: '/tutorials' },
                { name: 'About Us', href: '/about' },
                { name: 'Contact', href: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-gray-400 hover:text-white transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-red-400">Products</h3>
            <ul className="space-y-3">
              {[
                { name: 'Clapton Coils', href: '/products/clapton' },
                { name: 'Mesh Coils', href: '/products/mesh' },
                { name: 'Alien Coils', href: '/products/alien' },
                { name: 'Fused Claptons', href: '/products/fused-clapton' },
                { name: 'Staple Coils', href: '/products/staple' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-gray-400 hover:text-white transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact/Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-red-400">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe for new products, tutorials, and exclusive deals.
            </p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-800 border border-gray-700 rounded px-4 py-2 text-white focus:border-red-500 focus:outline-none"
              />
              <button 
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition"
              >
                Subscribe
              </button>
            </form>
            <div className="mt-6">
              <h4 className="font-medium mb-2">Contact</h4>
              <p className="text-gray-400">support@coilmasters.com</p>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Coil Masters. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-500 hover:text-gray-300 text-sm transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-gray-300 text-sm transition">
              Terms of Service
            </Link>
            <Link href="/age-verification" className="text-gray-500 hover:text-gray-300 text-sm transition">
              Age Verification
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
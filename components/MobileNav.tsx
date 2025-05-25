"use client";

import { useState, useRef, useEffect } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { useCart } from "@/context/CartContext"; // Impor useCart
import { ShoppingCart } from "lucide-react"; // Impor ikon keranjang

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about us",
    path: "#about",
  },
  {
    name: "product",
    path: "#product",
  },
  {
    name: "contact",
    path: "#kontak",
  },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false); // State untuk mengontrol popup
  const [activeHash, setActiveHash] = useState(""); // State untuk hash aktif
  const triggerRef = useRef<HTMLButtonElement>(null); // Referensi ke tombol trigger
  const { openCart, cartItems } = useCart(); // Ambil fungsi dan data dari CartContext
  const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    // Update activeHash berdasarkan hash di URL
    const handleHashChange = () => {
      setActiveHash(window.location.hash || "/");
    };

    // Jalankan saat komponen dimount
    handleHashChange();

    // Tambahkan event listener untuk perubahan hash
    window.addEventListener("hashchange", handleHashChange);

    // Cleanup event listener saat komponen di-unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    if (path.startsWith("#")) {
      e.preventDefault(); // Mencegah perilaku default tautan
      const targetElement = document.querySelector(path);
      const navbarHeight = document.getElementById("navbar")?.offsetHeight || 0; // Ambil tinggi navbar
      const additionalOffset = 85; // Tambahkan offset tambahan untuk margin/padding
      if (targetElement) {
        window.scrollTo({
          top:
            targetElement.getBoundingClientRect().top +
            window.scrollY -
            navbarHeight -
            additionalOffset, // Scroll dengan offset tambahan
          behavior: "smooth",
        });
      }
      setActiveHash(path); // Perbarui hash aktif
    } else if (path === "/") {
      e.preventDefault(); // Mencegah perilaku default tautan
      window.scrollTo({
        top: 0, // Scroll ke paling atas
        behavior: "smooth",
      });
      setActiveHash("/"); // Perbarui hash aktif
    }
    setIsOpen(false); // Tutup popup setelah klik
  };

  const handleOpenCart = () => {
    openCart();
    setIsOpen(false); // Tutup popup mobile nav setelah membuka keranjang
  };


  return (
    <>
      {/* Trigger untuk membuka popup */}
      <button
        ref={triggerRef}
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-center items-center"
      >
        <CiMenuBurger className="text-[32px] text-accent" />
      </button>

      {/* Popup */}
      {isOpen && (
        <div
          className="absolute bg-white shadow-lg rounded-lg top-10 p-4 z-50 pr-16 border-b-2 border-accent"
          style={{
            top: (triggerRef.current?.getBoundingClientRect().bottom || 0) + 30, // Posisi di bawah tombol trigger
            left: Math.min(
              triggerRef.current?.getBoundingClientRect().left || 0,
              window.innerWidth - 200 // Pastikan popup tidak keluar dari viewport (200px adalah lebar popup)
            ),
          }}
        >
          {/* Navigation Links */}
          <div className="flex flex-col space-y-4">
            {links.map((link, index) => (
              <a
                href={link.path}
                key={index}
                onClick={(e) => handleScroll(e, link.path)} // Tambahkan handler scroll
                className="text-gray-800 border-b-2 border-white/20 capitalize text-lg hover:text-accent transition-all"
              >
                {link.name}
              </a>
            ))}
            {/* Tombol/Link Keranjang Belanja untuk Mobile */}
            <button
              onClick={handleOpenCart}
              className="flex items-center gap-2 text-gray-800 border-b-2 border-white/20 capitalize text-lg hover:text-accent transition-all w-full text-left py-1"
              aria-label="View shopping cart"
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Cart</span>
              {totalItemsInCart > 0 && (
                <span className="ml-auto bg-accent text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItemsInCart}
                </span>
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;

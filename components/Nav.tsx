"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  {
    name: "home",
    path: "#home",
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

const Nav = () => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState<string>("");
  const { openCart, cartItems } = useCart();
  const totalItemsInCart = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  useEffect(() => {
    const handleScroll = () => {
      links.forEach((link) => {
        if (link.path.startsWith("#")) {
          const targetElement = document.querySelector(link.path);
          if (targetElement) {
            const rect = targetElement.getBoundingClientRect();
            const navbarHeight =
              document.getElementById("navbar")?.offsetHeight || 0;
            if (
              rect.top <= navbarHeight + 10 &&
              rect.bottom > navbarHeight + 10
            ) {
              setActiveLink(link.path);
            }
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    if (path.startsWith("#")) {
      e.preventDefault();
      const targetElement = document.querySelector(path);
      const navbarHeight = document.getElementById("navbar")?.offsetHeight || 0;
      const additionalOffset = 85;
      if (targetElement) {
        window.scrollTo({
          top:
            targetElement.getBoundingClientRect().top +
            window.scrollY -
            navbarHeight -
            additionalOffset,
          behavior: "smooth",
        });
      }
    } else if (path === "/") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav id="navbar" className="flex items-center gap-x-8">
      {" "}
      {/* Menggunakan gap-x-8 untuk konsistensi */}
      {links.map((link, index) => (
        <a
          key={index}
          href={link.path}
          onClick={(e) => handleClick(e, link.path)}
          className={`${
            activeLink === link.path
              ? "text-accent border-b-2 border-accent"
              : ""
          } capitalize font-medium hover:text-accent transition-all`}
        >
          {link.name}
        </a>
      ))}
      {/* Tombol Keranjang Belanja */}
      <Button
        onClick={openCart}
        variant="ghost"
        className="relative p-2 hover:text-accent hover:bg-transparent transition-all"
        aria-label="View shopping cart"
      >
        <ShoppingCart className="h-5 w-5" />
        {totalItemsInCart > 0 && (
          <span className="absolute -top-2 -right-2 bg-accent text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {totalItemsInCart}
          </span>
        )}
      </Button>
    </nav>
  );
};

export default Nav;

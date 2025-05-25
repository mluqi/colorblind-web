"use client";

import Image from "next/image";
import { useCart, CartItem as CartItemType } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

const CartSidebar = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    isCartOpen,
    closeCart,
  } = useCart();

  if (!isCartOpen) {
    return null;
  }

  const handleCheckout = () => {
    // GANTI DENGAN NOMOR WHATSAPP ANDA (format internasional tanpa '+', misal: 6281234567890)
    const phoneNumber = "6289504319908";

    // if (!phoneNumber || phoneNumber === "YOUR_PHONE_NUMBER_HERE" || phoneNumber.trim() === "") {
    //     alert("Nomor WhatsApp tujuan belum diatur oleh admin. Silakan hubungi admin.");
    //     console.warn("Nomor WhatsApp belum diatur untuk checkout.");
    //     return;
    // }

    let message = "Halo, saya ingin memesan produk berikut:\n\n";
    cartItems.forEach((item) => {
      message += `- ${item.name} (Qty: ${
        item.quantity
      }) - Rp ${item.price.toLocaleString()}\n`;
    });
    message += `\nTotal Pesanan: Rp ${getCartTotal().toLocaleString()}`;
    message += `\n\nMohon konfirmasi ketersediaan dan proses selanjutnya. Terima kasih!`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 z-40 transition-opacity duration-300 ease-in-out"
      onClick={closeCart}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="fixed top-0 right-0 h-full w-full max-w-sm bg-gray-900 text-white shadow-2xl z-50 flex flex-col transform transition-transform duration-300 ease-in-out translate-x-0"
        onClick={(e) => e.stopPropagation()} // Mencegah penutupan saat klik di dalam sidebar
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <h2 className="text-2xl font-semibold text-red-500">
            Keranjang Anda
          </h2>
          <Button
            variant="ghost"
            onClick={closeCart}
            className="text-gray-400 hover:text-white p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Button>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-gray-400 text-center p-10">
            Keranjang Anda kosong.
          </p>
        ) : (
          <>
            <div className="flex-grow overflow-y-auto p-6 space-y-4">
              {cartItems.map((item: CartItemType) => (
                <div
                  key={item.id}
                  className="flex items-start gap-4 p-4 bg-gray-800 rounded-lg"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={70}
                    height={70}
                    className="rounded-md object-cover border border-gray-700"
                  />
                  <div className="flex-grow">
                    <h3 className="font-semibold text-md">{item.name}</h3>
                    <p className="text-sm text-red-400">
                      Rp {item.price.toLocaleString()}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="px-2 h-7 text-xs"
                      >
                        {" "}
                        -{" "}
                      </Button>
                      <span className="text-sm w-5 text-center">
                        {item.quantity}
                      </span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="px-2 h-7 text-xs"
                      >
                        {" "}
                        +{" "}
                      </Button>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-500 hover:text-red-500 p-1 self-start"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12.56 0c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </Button>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <p className="text-xl font-semibold">Total:</p>
                <p className="text-2xl font-bold text-red-500">
                  Rp {getCartTotal().toLocaleString()}
                </p>
              </div>
              <Button
                onClick={handleCheckout}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg text-lg"
              >
                Checkout via WhatsApp
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;

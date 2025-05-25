import { X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

interface CartOffcanvasProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartOffcanvas: React.FC<CartOffcanvasProps> = ({ isOpen, onClose }) => {
  const { cartItems: cart, removeFromCart, updateQuantity } = useCart();

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
      <div className="bg-gray-900 w-80 h-full p-6 text-white overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>
        {cart.length === 0 ? (
          <p className="text-gray-400">Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="py-4 border-b border-gray-700">
                <div className="flex items-center justify-between">
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <Button
                    onClick={() => removeFromCart(item.id)}
                    size="sm"
                    variant="destructive"
                  >
                    Remove
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-8">
          <Button className="w-full">Go to Checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default CartOffcanvas;

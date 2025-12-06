"use client";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQty, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const increment = (id) => {
    const item = cart.find((i) => i.id === id);
    if (item) updateQty(id, item.qty + 1);
  };

  const decrement = (id) => {
    const item = cart.find((i) => i.id === id);
    if (item && item.qty > 1) updateQty(id, item.qty - 1);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl mb-6">Your Cart</h1>

      {cart.length === 0 && <p>No items in cart.</p>}

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border p-4 mb-4"
        >
          {/* Item Info */}
          <div>
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-gray-600">${item.price}</p>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => decrement(item.id)}
              className="bg-gray-300 px-2 py-1 rounded text-lg"
            >
              −
            </button>

            <span className="w-8 text-center">{item.qty}</span>

            <button
              onClick={() => increment(item.id)}
              className="bg-gray-300 px-2 py-1 rounded text-lg"
            >
              +
            </button>

            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white px-3 py-1 rounded ml-4"
            >
              X
            </button>
          </div>
        </div>
      ))}

      {cart.length > 0 && (
        <div className="flex items-center justify-between mt-6">
          <h2 className="text-xl font-semibold">Total: ${total}</h2>

          <div className="flex flex-col ">
            <button
              onClick={clearCart}
              className="mt-4 px-6 py-2 bg-gray-700 text-white rounded cursor-pointer"
            >
              Clear Cart
            </button>
            <button className="mt-4 px-6 py-2 bg-gray-700 text-white rounded cursor-pointer">
              Payment Proceed
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

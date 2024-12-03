"use client"

import Image from "next/image";
import Header from "../components/Header";
import { useState } from "react";

const Cart = () => {
  // Sample cart items (can be dynamic from a backend)
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 20, image: '/images/product1.jpg' },
    { id: 2, name: 'Product 2', price: 35, image: '/images/product2.jpg' },
    { id: 3, name: 'Product 3', price: 50, image: '/images/product3.jpg' },
  ]);

  // Calculate subtotal
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);

  // Handlers
  const handleEmptyCart = () => setCartItems([]);
  const handleCheckout = () => alert('Proceeding to checkout!');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Cart Content */}
      <main className="px-6 min-h-screen flex flex-col items-center justify-center bg-white">
        <h1 className="text-4xl text-black font-bold text-center mb-10">
          Your Cart
        </h1>

        <div className="w-full max-w-md p-8 bg-gray-100 rounded-lg shadow-md">
          {cartItems.length > 0 ? (
            <ul className="mb-6">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between py-4 border-b"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.image}
                      width={64}
                      height={64}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div>
                      <p className="text-lg font-semibold">{item.name}</p>
                      <p className="text-gray-600">${item.price}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-lg text-gray-700 mb-6">Your cart is empty.</p>
          )}

          <div className="text-lg font-bold mb-4">
            Subtotal: ${subtotal.toFixed(2)}
          </div>

          <div className="flex flex-col gap-4">
            <button
              onClick={handleCheckout}
              disabled={cartItems.length === 0}
              className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:bg-blue-300"
            >
              Proceed to Checkout
            </button>
            <button
              onClick={handleEmptyCart}
              disabled={cartItems.length === 0}
              className="w-full py-3 px-6 bg-red-600 text-white rounded-lg hover:bg-red-700 transition disabled:bg-red-300"
            >
              Empty Cart
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Cart;

"use client";

import { useState } from "react";
// import Header from "@/app/component/Menu";
import ProductList from "@/app/components/ProductList";
import useGetCartProducts from "@/app/hooks/useGetCartProducts";
import Menu from "./components/Menu";
import CartTable from "./components/CartTable";


export default function Home() {
  const [cart, setCart] = useState([]);

  const { products, loading, error } = useGetCartProducts();

  const addToCart = (product) => {
    setCart((prevCart) => {
      const exists = prevCart.find((item) => item.id === product.id);
      if (exists) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, delta) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const getTotal = () =>
    cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header component */}
      <Menu cartCount={cart.length} />

      <main className="max-w-5xl mx-auto px-4 py-6">
        <h2 className="text-xl font-semibold mb-4">Products</h2>
        <ProductList products={products} onAdd={addToCart} />

        <h2 className="text-xl font-semibold mt-10 mb-4">Your Cart</h2>
        <CartTable cart={cart} updateQuantity={updateQuantity} removeItem={removeItem} />

      </main>
    </div>
  );
}

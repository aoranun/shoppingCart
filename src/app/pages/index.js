import { useEffect, useState } from 'react';
import ProductList from '@/components/ProductList';
import CartTable from '@/components/CartTable';
import Menu from '@/components/Menu';
import { API_BASE } from '@/utils/api';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE}/products/`)
      .then(res => res.json())
      .then(setProducts);

    fetchCart();
  }, []);

  const fetchCart = () => {
    fetch(`${API_BASE}/cart/`)
      .then(res => res.json())
      .then(data => setCart(data[0])); // If API returns list of carts
  };

  const addToCart = async (productId) => {
    await fetch(`${API_BASE}/cart/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        customer: 1,
        promotions: [2, 3], // Optional: Your promotion ids
        items: [{ product: productId, quantity: 1 }]
      })
    });
    fetchCart();
  };

  return (
    <div className="min-h-screen bg-white p-4">
      <Menu />
      <ProductList products={products} onAdd={addToCart} />
      <CartTable cart={cart} />
    </div>
  );
}

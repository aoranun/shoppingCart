import { useEffect, useState } from 'react';
import { getCartProducts } from '@/app/services/cartProductService';

export default function useGetCartProducts() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCartProducts()
      .then(setProducts)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { products, loading, error };
}

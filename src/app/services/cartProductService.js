import apiClient from '@/app/lib/apiClient';

export function getCartProducts() {
  const res = apiClient.get('/cart/products/');
  return res;
}
"use client";
export default function ProductList({ products, onAdd }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
      {products && products.map(product => (
        <div key={product.id} className="border p-4 rounded shadow">
          <h2 className="text-lg font-semibold">{product.product_name}</h2>
          <p>{product.detail}</p>
          <p className="font-bold mt-2">฿{product.price}</p>
          <button
            className="mt-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
            onClick={() => onAdd(product.id)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

// components/CartTable.js
import React from 'react';

const CartTable = ({ cartItems, updateQuantity, removeItem, total=[] }) => {
  if (!cartItems) return null;

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-2">Cart Summary</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">  
            <th className="p-2">Product</th>
            <th className="p-2">Qty</th>
            <th className="p-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems && cartItems?.map(item => (
            <tr key={item.id} className="border-t">
              <td className="p-2">{item.product}</td>
              <td className="p-2">{item.quantity}</td>
              <td className="p-2">{item.total_price} THB</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 text-right font-bold text-lg">
        Total: {total.total_price} THB
      </div>
      <div className="text-right text-sm text-green-600">
        Discount: {total.discount} THB
      </div>
    </div>
  );
};

export default CartTable;
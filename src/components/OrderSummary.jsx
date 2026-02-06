import { Tag, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'

const OrderSummary = ({ items = [] }) => {
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const { totalAmount, totalQty } = items.reduce(
      (acc, item) => {
        if (!item?.product) return acc; // safety check

        acc.totalAmount += item.quantity * item.product.price;
        acc.totalQty += item.quantity;
        return acc;
      },
      { totalAmount: 0, totalQty: 0 }
    );

    setTotal(totalAmount);
    setQuantity(totalQty);
  }, [items]);

  return (
    <div className="flex flex-col items-start space-y-2 bg-gray-100 px-2 py-2 rounded-xl">
      <p className="text-lg font-semibold">Order Summary</p>

      <div className="relative w-full">
        <input
          type="search"
          placeholder="Enter coupon code"
          className="border border-[#2596be] rounded-xl h-8 px-3 pr-20 w-full outline-none"
        />
        <button className="absolute top-0 right-0 h-8 px-4 rounded-r-xl text-[#2596be]">
          Apply
        </button>
      </div>

      <div className="flex justify-between items-center w-full border border-[#2596be] rounded-xl py-1 text-[#2596be]">
        <div className="flex items-center gap-1 px-2">
          <Tag size={16} className="-rotate-90" />
          <p>View Available Offer</p>
        </div>
        <ChevronRight size={18} />
      </div>

      <div className="w-full space-y-2">
        <div className="flex justify-between">
          <p>Items ({quantity})</p>
          <p>₹{total}</p>
        </div>

        <div className="flex justify-between">
          <p>Shipping</p>
          <p>₹100</p>
        </div>

        <div className="flex justify-between">
          <p>Your savings</p>
          <p>-₹100</p>
        </div>

        <div className="flex justify-between">
          <p>Estimated tax</p>
          <p>₹100</p>
        </div>

        <div className="flex justify-between font-semibold text-lg">
          <p>Sub Total</p>
          <p>₹{total}</p>
        </div>
       
        <button className="w-full rounded-xl bg-blue-500 text-white py-2">
          Check Out
        </button>
       
      </div>
    </div>
  );
};

export default OrderSummary;


import { useState, useEffect } from "react";
import CartCard from "../components/CartCard";
import OrderSummary from "../components/OrderSummary";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  
  useEffect(() => {
    const getCartData = async () => {
      const response = await fetch(
        "http://localhost:5000/api/cart/get-data",
        {
          credentials: "include",
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data)
        setCartItems(data.items || []);
      }
    };

    getCartData();
  }, []);

  return (
    <div className="my-4 min-h-screen">
      <h1 className="text-2xl font-semibold">Shopping Cart</h1>

      <div className="flex gap-6 mt-4">
        {/* LEFT: CART ITEMS */}
        <div className="flex-1 space-y-4">
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <CartCard
                key={item._id}
                product={item.product}
                quantity={item.quantity}
              />
            ))
          )}
        </div>
          <OrderSummary items={cartItems}  />
        {/* RIGHT: ORDER SUMMARY */}
        
      </div>
    </div>
  );
};

export default Cart;

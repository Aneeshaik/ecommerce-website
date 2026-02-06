import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartCard from "../components/CartCard";
import { setCart } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
/*previousSelectedValue !== nextSelectedValue
If ❌ same reference → no re-render

If ✅ different reference → re-render*/
  const [loading, setLoading] = useState(true);

  // 🔁 Format backend cart → UI cart
  const formatCartItems = (items = []) =>
    items.map(item => ({
      product: {
        _id: item.product._id,
        title: item.product.title,
        price: item.product.price,
        images: item.product.images,
      },
      quantity: item.quantity,
    }));

  // 🛒 Fetch cart on page load
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/api/cart/get-data",
          { credentials: "include" }
        );

        if (!res.ok) {
          setLoading(false);
          return;
        }

        const data = await res.json();
        dispatch(setCart(formatCartItems(data.items)));
      } catch (err) {
        console.error("Fetch cart failed:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [dispatch]);

  // ➕ Increase quantity
  const onIncrease = async (productId) => {
    const res = await fetch("http://localhost:5000/api/cart/add", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId, quantity: 1 }),
    });

    const data = await res.json();
    dispatch(setCart(formatCartItems(data.items)));
  };

  // ➖ Decrease quantity
  const onDecrease = async (productId) => {
    const res = await fetch("http://localhost:5000/api/cart/add", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId, quantity: -1 }),
    });

    const data = await res.json();
    dispatch(setCart(formatCartItems(data.items)));
  };

  // 🗑 Remove item
  const handleRemove = async (productId) => {
    const res = await fetch(
      "http://localhost:5000/api/cart/remove-from-cart",
      {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      }
    );

    const data = await res.json();
    dispatch(setCart(formatCartItems(data.items)));
  };

  return (
    <div className="my-4 min-h-screen text-black">
      <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>

      {loading ? (
        <p>Loading cart...</p>
      ) : cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item, index) =>
            item?.product ? (
              <CartCard
                key={item.product._id ?? index}
                product={item.product}
                quantity={item.quantity}
                onRemove={handleRemove}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
              />
            ) : null
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;

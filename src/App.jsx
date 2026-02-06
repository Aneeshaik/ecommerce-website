import './App.css'
import AppRoutes from './routes'
import { Suspense, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setCart } from './store/cartSlice'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const hydrateCart = async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/api/cart/get-data",
          { credentials: "include" }
        );

        if (!res.ok) return;

        const data = await res.json();
        const formatCartItems = (items) =>
          items.map(item => ({
            product: {
              _id: item.product._id,
              title: item.product.title,
              price: item.product.price,
              images: item.product.images,
            },
            quantity: item.quantity,
          }));
        dispatch(setCart(formatCartItems(data.items)));

      } catch {
        // silent fail (user not logged in, etc.)
      }
    };

    hydrateCart();
  }, []);

  return (
    <Suspense fallback={<div className='text-black'>Loading...</div>}>
      <AppRoutes />
    </Suspense>
  );
}

export default App;

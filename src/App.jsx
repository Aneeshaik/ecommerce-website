import './App.css'
import AppRoutes from './routes'
import { Suspense, useEffect, useContext } from 'react'
import { useDispatch } from 'react-redux'
import { setCart } from './store/cartSlice'
import AuthContext from './context/AuthContext'

function App() {
  const {isAuthenticated,loading,setIsAuthenticated, setLoading} = useContext(AuthContext);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loading) return  
    if(!isAuthenticated) {
      dispatch(setCart([]));
      return;
    }
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
          setIsAuthenticated(true);
          setLoading(false);
        dispatch(setCart(formatCartItems(data.items)));

      } catch {
        // silent fail (user not logged in, etc.)
      }
    };

    hydrateCart();
  }, [isAuthenticated,loading]);

  return (
    <Suspense fallback={<div className='text-black'>Loading...</div>}>
      
      <AppRoutes />
    </Suspense>
  );
}

export default App;

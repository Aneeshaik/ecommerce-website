{/*import { useLocation } from "react-router-dom"
import CartCard from "../components/CardCard"
import OrderSummary from "../components/OrderSummary"
const cartProducts = [];
const Cart = () => {
    const { state } = useLocation()
    const product = state?.product

    return (
        <div className="my-4 min-h-screen">
            <div className="text-black text-left text-2xl font-semibold">Shopping Cart</div>
            <div className="flex items-start gap-3 mt-4">
                <CartCard product={ product } />
                <OrderSummary product={ product }/>
            </div>
        </div>
    )
}

export default Cart*/}

import { useLocation } from "react-router-dom"
import {useState, useEffect} from "react";
import CartCard from "../components/CartCard"
import OrderSummary from "../components/OrderSummary"

const Cart = () => {
    const { state } = useLocation()
    const product = state?.product
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(()=>{
        if(!product) return;
        setCartProducts((prev)=>{
            const exists = prev.find((p)=>p.id===product.id);
            return exists ? prev : [...prev, product];
        });
        
    },[product]);

    return (
        <div className="my-4 min-h-screen">
            <div className="text-black text-left text-2xl font-semibold">Shopping Cart</div>
            {cartProducts.map((product,index)=>(
                <div key={index} className="flex items-start  mt-4  gap-4">
                <div className="flex-1"> <CartCard product={ product } /></div>
               
                <OrderSummary product={ product }/>
                </div>
            ))}
        </div>
    )
}

export default Cart
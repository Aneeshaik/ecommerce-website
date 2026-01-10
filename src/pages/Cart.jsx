import { useLocation } from "react-router-dom"
import CartCard from "../components/CardCard"
import OrderSummary from "../components/OrderSummary"

const Cart = () => {
    const { state } = useLocation()
    const product = state?.product

    return (
        <div className="my-4 min-h-screen">
            <div className="text-black text-left text-2xl font-semibold">Shopping Cart</div>
            <div className="flex items-start gap-3 mt-4">
                <CartCard product={product} />
                <OrderSummary />
            </div>
        </div>
    )
}

export default Cart
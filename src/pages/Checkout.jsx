import OrderSummary from '../components/OrderSummary'
import CartCard from '../components/CartCard'
import { useLocation } from 'react-router-dom'
import phonepe from '../assets/others/phonepe.jpg'
import { Banknote, Pencil } from 'lucide-react'
import {useState} from 'react'
const Checkout = () => {
    const { state } = useLocation()
    const product = state?.product
    const [editing,setEditing] = useState(false)
    const [address,setAddress] = useState('306, Hosur road, Bommanahalli, Bengaluru, Karnataka, 560068, India');

    return (

        <div className=" w-full px-4 sm:px-6 lg:px-8 ">
            <p className="text-left text-2xl font-medium">Secure Checkout</p>
            <div className="flex flex-col gap-1 lg:flex-row ">
                

                    <div className="flex flex-col mx-0 gap-2 flex-1">

                        <div className="bg-gray-100 rounded-2xl p-4">
                            <div className="flex flex-row justify-between">
                                <p className="font-semibold text-lg text-left mb-4 border-b-2  border-white pb-2">Delivering Information</p>
                                
                                <Pencil onClick={()=>setEditing(true)}/>
                            </div>
                            {!editing?
                             <p className="text-left">{address}</p>
                             :
                             <div className="flex gap-2"><p className="text-left">Delivery to </p>
                            <div className="flex justify-left gap-2">
                                <input type="text" value={address} onChange={e=>setAddress(e.target.value)} className="border-2" />
                                
                                    <button type="button" onClick={()=>setEditing(false)} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">Save</button>
                                
                                
                            </div></div>
                             
                             }
                            
                        </div>

                        <div className="bg-gray-100 rounded-2xl p-4">
                            <p className="font-semibold text-lg text-left mb-4 border-b-2  border-white pb-2">Payment</p>

                            <label htmlFor="phonepe" className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="payment" id="phonepe" />
                                <img
                                    src={phonepe}
                                    alt="PhonePe"
                                    className="h-5 w-5 object-contain"
                                />
                                <span>PhonePe</span>
                            </label>

                            <label htmlFor="cashondel" className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="payment" id="cashondel" />
                                <Banknote size={18} />
                                <span>Cash on Delivery</span>
                            </label>
                        </div>

                        <CartCard product={product} />


                    </div>



                
                <div className="w-full lg:w-96 lg:sticky lg:top-6 self-start">
                    <OrderSummary product={product} />
                </div>


            </div>

        </div>
    )
}


export default Checkout
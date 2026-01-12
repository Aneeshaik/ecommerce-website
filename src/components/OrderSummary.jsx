import {Tag, ChevronRight} from "lucide-react";
import tabby from "../assets/products/tabby.png"
import tamara from "../assets/products/tamara.jpg"

const OrderSummary = ({product}) => {
    const {
        title,
        images,
        price,
    } = product;
  return (
    <div className="flex flex-col items-start w-auto space-y-2 bg-gray-100 px-2 py-2 rounded-xl">
      <p className="text-lg font-semibold">Order Summary</p>

      <div className="relative w-full">
        <input
          type="search"
          placeholder="Enter coupon code"
          className="border border-[#2596be] rounded-xl h-8 px-3 pr-20 w-full outline-none"
        />

        <button
          className="absolute top-0 right-0 h-8 px-4 rounded-r-xl border-1 border-[#2596be] text-[#2596be] "
        >
          Apply
        </button>
      </div>

      <div className="flex flex-row  justify-between items-center w-full border-1 border-[#2596be] rounded-xl py-1 text-[#2596be]">
        <div className="flex flex-row items-center gap-1 px-2">
            <Tag size={16}  className="-rotate-270"/>
            <p>View Available Offer</p>
        </div>
        <ChevronRight size={18} />
      </div>
      <div className="w-full space-y-2">
        <div className="flex flex-row justify-between">
            <p>Items({1})</p>
            <p>₹{price}</p>
        </div>
        <div className="flex flex-row justify-between">
            <p>Shipping to ?</p>
            <p>₹100</p>
        </div>
        <div className="flex flex-row justify-between">
            <p>Your savings</p>
            <p>₹100</p>
        </div>
        <div className="flex flex-row justify-between">
            <p>Estimated sales tax</p>
            <p>₹100</p>
        </div>
        <div className="flex flex-row justify-between ">
            <p className="text-lg font-semibold">Sub Total:</p>
            <p>₹{price}</p>
        </div>
        <div className="flex items-start gap-2 w-full ">
            <input type="checkbox" className="mt-1 accent-[#2596be]"/>
            <div className="w-full">
                <div className="flex flex-row justify-between text-xs">
                    <p>Offset My Order's Carbon Footprint</p>
                    <p>₹{20}</p>
                </div>
                <div className="flex flex-row justify-between text-xs text-gray-500">
                    <p>Powered By EcoCart</p>
                    <p>Learn More</p>
                </div>
            </div>
        </div>
        <button type="button" className="w-full rounded-xl bg-blue  py-2"> Check Out</button>
        <div className="flex justify-center">
          <p className="text-gray-500 text-xs">Purchase protected by emos Money Bank Quarantee</p>
        </div>

        {/*<div className="flex flex-row justify-between">
          <p className="w-[40%] text-xs">Pay 4 interest-free Payments of</p>
          <div className="flex flex--row">
            <img src={tabby} alt="tabby" className="h-5 w-10" />
            <img src={tamara} alt="tamara" className="h-5 w-10" />
          </div>
        </div>
        <div className="flex justify-end">
          <p className="text-xs">Learn how</p>
        </div>*/}
      </div>

    </div>
  );
};

export default OrderSummary;

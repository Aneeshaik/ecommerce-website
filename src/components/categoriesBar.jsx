import { Gift, Radio, Menu, ChevronDown } from "lucide-react";

const CategoriesBar = () => {
  return (
    <div className="w-full  bg-white">
      <div className="max-w-[1280px] mx-auto px-10">
        <div className="flex items-center justify-between h-12 text-sm font-medium text-gray-700">
          
          {/* LEFT SIDE */}
          <div className="flex items-center gap-3 overflow-x-auto whitespace-nowrap">
            <button className="flex items-center  gap-1 font-semibold text-black">
              <Menu />
              
              All Categories
              <ChevronDown />
            </button>
            <div className="flex gap-3">
            <a href="#" className="text-[#91939B]">Electronics</a>
            <a href="#" className="text-[#91939B]">Fashion</a>
            <a href="#" className="text-[#91939B]">Women’s</a>
            <a href="#" className="text-[#91939B]">Kids Fashion</a>
            <a href="#" className="text-[#91939B]">Health & Beauty</a>
            <a href="#" className="text-[#91939B]">Pharmacy</a>
            <a href="#" className="text-[#91939B]">Groceries</a>
            <a href="#" className="text-[#91939B]">Luxury Items</a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Gift color="#68c2dd"/>
              <p className="text-[#68c2dd]">Best Deals</p>
            </div>

            <div className="flex items-center gap-1">
              Wearly
              <span className="text-red-500 font-semibold">Live</span>
              <Radio className="text-red-500 w-4 h-4" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CategoriesBar;

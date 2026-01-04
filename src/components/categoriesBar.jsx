import { Gift, Radio, Menu, ChevronDown } from "lucide-react";

const CategoriesBar = () => {
  const categories = [
    "Electronics",
    "Fashion",
    "Women’s",
    "Kids Fashion",
    "Health & Beauty",
    "Pharmacy",
    "Groceries",
    "Luxury Items",
  ];

  return (
    <div className="flex items-center justify-between h-12 text-sm font-medium text-gray-700">
      {/* LEFT SIDE */}
      <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap">
        <button
          type="button"
          className="flex items-center gap-1 font-semibold text-black cursor-pointer focus:outline-none"
        >
          <Menu size={16} className="block"/>
          <span className="leading-none">All Categories</span>
          <ChevronDown size={16} className="block"/>
        </button>
        <div class="h-4 w-px bg-gray-300"></div>
        <div className="flex gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => {}}
              className="
                p-2
                cursor-pointer
                text-black/70 
                hover:text-black
                focus:outline-none
              "
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-1">
        <Gift size={20} color="#018FFF"/>
        <p className="text-[#018FFF]">Best Deals</p>
      </div>
    </div>
  );
};

export default CategoriesBar;

import { ChevronRight } from 'lucide-react';
import CategoryCard from "./CategoryCard.jsx";
import mobile from "../assets/categories/mobile.png";
import laptops from "../assets/categories/laptop.png";
import wearables from "../assets/categories/watches/watch.png";
import watchAll from "../assets/categories/watches/watchAll.jpg";
import watchMen from "../assets/categories/watches/watchMen.jpg";
import watchWomen from "../assets/categories/watches/watchWomen.jpg";
import laptopAccessories from "../assets/categories/laptop-accessories.png";
import mobileAccessories from "../assets/categories/mobile-accessories.png";
import bluetooth from "../assets/categories/bluetooth.png";
import wallClock from "../assets/categories/wall-clock.png";
import watches from "../assets/data/watches.js";
import mobiles from "../assets/data/mobile.js";
const categories = [
  {
    id: 1,
    title: "Watches",
    image: wearables,
    subcategories:[{
      title:"All",
      image:watchAll,
    },{
      title:"Men",
      image:watchMen,
    },{
      title:"Women",
      image:watchWomen,
    },],
    products: watches,
  },

  {
    id: 2,
    title: "Mobile & Accessories",
    image: mobile,
    products:mobiles
  },
  {
    id: 3,
    title: "WallClocks",
    image: wallClock,
    products:watches
  },
  {
    id: 4,
    title: "Computers & Laptops",
    image: laptops,
    products:watches
  },
  {
    id: 5,
    title: "Laptop Accessories",
    image: laptopAccessories,
    products:watches
  },
  {
    id: 6,
    title: "Mobile Accessories",
    image: mobileAccessories,
    products:watches
  },
  {
    id: 7,
    title: "Bluetooth",
    image: bluetooth,
    products:watches
  },
];

const CategoriesSection = () => {
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-between'>
                <p className='text-black font-semibold text-2xl'>Explore Popular Categories</p>
                <button className='flex items-center text-[#018FFF] text-xs font-semibold cursor-pointer'>
                    <span className='leading-none'>View All</span>
                    <ChevronRight size={16} />
                </button>
            </div>
            <div style={{
              scrollbarWidth: 'none'
            }} className='flex gap-14 items-start overflow-x-auto'>
              {categories.map((item) => (
                <CategoryCard
                  key={item.id}
                  title={item.title}
                  image={item.image}
                  products={item.products || []}
                  subcategories={item.subcategories}
                />
              ))}
            </div>
        </div>
    )
}

export default CategoriesSection
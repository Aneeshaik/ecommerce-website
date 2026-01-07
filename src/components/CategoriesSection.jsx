import { ChevronRight } from 'lucide-react';
import CategoryCard from "./CategoryCard.jsx";
import mobile from "../assets/categories/mobile.jpg";
import laptops from "../assets/categories/laptops.jpg";
import tv from "../assets/categories/tv.jpg";
import home_appli from "../assets/categories/home_appli.jpg";
import kitchen_devices from "../assets/categories/kitchen_devices.jpg";
import wearables from "../assets/categories/wearables.jpg";
import cameras from "../assets/categories/cameras.jpg";
import security from "../assets/categories/security.jpg";
import gaming from "../assets/categories/gaming.jpg";
import audio_devices from "../assets/categories/audio_devices.jpg";

const categories = [
  {
    id: 1,
    title: "Mobile & Accessories",
    image: mobile,
  },
  {
    id: 2,
    title: "Computers & Laptops",
    image: laptops,
  },
  {
    id: 3,
    title: "TV, Audio & Entertainment",
    image: tv,
  },
  {
    id: 4,
    title: "Home Appliances",
    image: home_appli,
  },
  {
    id: 5,
    title: "Kitchen Appliances",
    image: kitchen_devices,
  },
  {
    id: 6,
    title: "Gaming & Accessories",
    image: gaming,
  },
  {
    id: 7,
    title: "Wearables & Smart Devices",
    image: wearables,
  },
  {
    id: 8,
    title: "Cameras & Imaging",
    image: cameras,
  },
  {
    id: 9,
    title: "Smart Home & Security",
    image: security,
  }

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
            }} className='flex gap-14 items-center  overflow-x-auto'>
              {categories.map((item) => (
                <CategoryCard
                  key={item.id}
                  title={item.title}
                  image={item.image}
                />
              ))}
            </div>
        </div>
    )
}

export default CategoriesSection
import { ChevronRight } from 'lucide-react';
import CategoryCard from "./CategoryCard.jsx";
import Electronics from "../assets/categories/electronics.jpg";
import Fashion from "../assets/categories/fashion.jpg";
import Groceries from "../assets/categories/groceries.jpg";
import HealthBeauty from "../assets/categories/health&beauty.jpg";
import HomeDecor from "../assets/categories/homedecor.jpg";
import Luxury from "../assets/categories/luxury.jpg";
const categories = [
  {
    id: 1,
    title: "Electronics",
    image: Electronics,
  },
  {
    id: 2,
    title: "Fashion",
    image: Fashion,
  },
  {
    id: 3,
    title: "Groceries",
    image: Groceries,
  },
  {
    id: 4,
    title: "Health & Beauty",
    image: HealthBeauty,
  },
  {
    id: 5,
    title: "Home Decor",
    image: HomeDecor,
  },
  {
    id: 6,
    title: "Luxury",
    image: Luxury,
  },
];

const CategoriesSection = () => {
    return (
        <div className='flex flex-col gap-4 my-4'>
            <div className='flex items-center justify-between'>
                <p className='text-black font-semibold text-2xl'>Explore Popular Categories</p>
                <button className='flex items-center text-[#018FFF] text-xs font-semibold cursor-pointer'>
                    <span className='leading-none'>View All</span>
                    <ChevronRight size={16} />
                </button>
            </div>
            <div style={{
              scrollbarWidth: 'none'
            }} className='flex gap-14 items-center overflow-x-auto'>
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
import { ChevronRight, Heart, Star } from 'lucide-react';
import ProductCard from './ProductCard.jsx';
import Mobile from "../assets/products/mobile.jpg";
import Shirt from "../assets/products/shirt.jpg";
import Ring from "../assets/products/ring.jpg";
import Sneakers from "../assets/products/sneakers.jpg";
import Sofa from "../assets/products/sofa.jpg";

export const products = [
  {
    id: 1,
    title: "Men Shirt",
    image: Shirt,
    rating: 4.5,
    reviews: 120,
    price: 999,
    currency: "INR",
  },
  {
    id: 2,
    title: "Mobile Phone",
    image: Mobile,
    rating: 4.6,
    reviews: 340,
    price: 15999,
    currency: "INR",
  },
  {
    id: 3,
    title: "Ring",
    image: Ring,
    rating: 4.4,
    reviews: 98,
    price: 7999,
    currency: "INR",
  },
  {
    id: 4,
    title: "Sneakers",
    image: Sneakers,
    rating: 4.7,
    reviews: 210,
    price: 2499,
    currency: "INR",
  },
  {
    id: 5,
    title: "Sofa",
    image: Sofa,
    rating: 4.3,
    reviews: 65,
    price: 18999,
    currency: "INR",
  },
];



const BestDeals = () => {
    return(
        <div className='flex flex-col gap-4 my-4'>
            <div className='flex items-center justify-between'>
                <p className='text-black font-semibold text-2xl'>Todays Best Deals For You</p>
                <button className='flex items-center text-[#018FFF] text-xs font-semibold cursor-pointer'>
                    <span className='leading-none'>View All</span>
                    <ChevronRight size={16} />
                </button>
            </div>
            <div style={{
                scrollbarWidth: 'none'
            }} className='flex gap-14 items-center overflow-x-auto'>
                {products.map((product) => (
                     <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default BestDeals;
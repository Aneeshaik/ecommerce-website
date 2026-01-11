import { ChevronRight, Heart, Star } from 'lucide-react';
import {Link} from 'react-router-dom';
import ProductCard from './ProductCard.jsx';
import Mobile from "../assets/products/mobile.jpg";
import Shirt from "../assets/products/shirt.jpg";
import Ring from "../assets/products/ring.jpg";
import Sneakers from "../assets/products/sneakers.jpg";
import Sofa from "../assets/products/sofa.jpg";


const products = [
  {
    id: 1,
    title: "Men Shirt",
    images: [Shirt,Shirt],
    rating: 4.5,
    reviews: 120,
    price: 999,
  },
  {
    id: 2,
    title: "Mobile Phone",
    images: [Mobile,Mobile],
    rating: 4.6,
    reviews: 340,
    price: 15999,
  },
  {
    id: 3,
    title: "Ring",
    images: [Ring,Ring],
    rating: 1.4,
    reviews: 98,
    price: 7999,
  },
  {
    id: 4,
    title: "Sneakers",
    images: [Sneakers,Sneakers],
    rating: 2.7,
    reviews: 210,
    price: 2499,
  },
  {
    id: 5,
    title: "Sofa",
    images: [Sofa,Sofa],
    rating: 3.3,
    reviews: 65,
    price: 18999,
  },
];

const TopDeals = () => {
    return(
        <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-between'>
                <p className='text-black font-semibold text-2xl'>Top Deals In</p>
                <button className='flex items-center text-[#018FFF] text-xs font-semibold cursor-pointer'>
                    <Link to="/allproductsdetails" state={{products,title:"Top Deals In"}}><span className='leading-none' >View All</span></Link>
                    
                    <ChevronRight size={16} />
                </button>
            </div>
            <div className='grid w-full gap-6 -cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
                {products.map((product) => (
                     <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default TopDeals;
//
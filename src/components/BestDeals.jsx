import { ChevronRight, Heart, Star } from 'lucide-react';
import {Link} from 'react-router-dom';
import ProductCard from './ProductCard.jsx';
import Mobile from "../assets/products/iphone15.jpg";
import watch from "../assets/products/watch.png";
import laptop from "../assets/products/laptop.jpg";
import Sneakers from "../assets/products/sneakers.jpg";
import Sofa from "../assets/products/sofa.jpg";

const products = [
  {
    id: 1,
    title: "LONGBO zenith Diamond Alalog watch for men",
    images: [watch, Mobile],
    rating: 4.5,
    reviews: 120,
    price: 999,
  },
  {
    id: 2,
    title: "Apple iphone 15(128 GB) - Green",
    images: [Mobile, Mobile],
    rating: 4.5,
    reviews: 9.8,
    price: 54790,
  },
  {
    id: 3,
    title: "Dell 15, Intel Core i3 13th Gen - 1305U, 16 GB:DDR4 RAM, 512GB, FHD 15.6 /39.6 cm Narrow Border Display, Windows 11, Office H&S 2024, Carbon Grey, Intel UHD Graphics, 1.66 Kg Thin & Light Laptop",
    images: [laptop, laptop],
    rating: 3.9,
    reviews: 231,
    price: 40990,
  },
  {
    id: 4,
    title: "Sneakers",
    images: [Sneakers, Sneakers],
    rating: 2.7,
    reviews: 210,
    price: 2499,
  },
  {
    id: 5,
    title: "Sofa",
    images: [Sofa, Sneakers],
    rating: 3.3,
    reviews: 65,
    price: 18999,
  },
];

const BestDeals = () => {
    return(
        <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-between'>
                <p className='text-black font-semibold text-2xl'>Todays Best Deals For You!</p>
                <button className='flex items-center text-[#018FFF] text-xs font-semibold cursor-pointer'>
                    <Link to="/allproductsdetails" state={{products,title:"Todays Best Deals For You!"}}><span className='leading-none' >View All</span></Link>
                    <ChevronRight size={16} />
                </button>
            </div>
            <div style={{
              scrollbarWidth: 'none'
            }} className='w-full flex flex-row overflow-x-auto gap-15'>
                {products.map((product) => (
                     <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default BestDeals;
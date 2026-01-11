{/*import {useLocation,Link} from 'react-router-dom';
import StarRating from "../components/StarRating";
import { Heart,  } from "lucide-react";
import {useEffect} from 'react';
const AllProductsDetails = () => {
    const {state} = useLocation();
    const products = state?.products || [];
    const title = state?.title;
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
    return(
        <div>
        <div className="flex font-bold text-[32px]">
            <p>{title}</p>
        </div>
        <div className='grid w-full gap-6 -cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
            {products.map((product)=>(
                <Link to="/productDetails"  key={product.id}>
                <div className="relative w-full h-52 rounded-xl flex items-center justify-center">
                    <div className="absolute top-2 right-2 bg-white p-2 rounded-full shadow cursor-pointer group">
                        <Heart size={18} className="text-gray-700 group-hover:text-red-500 group-hover:fill-red-500 transition" />
                    </div>
                    <img src={product.image[0]} alt={product.title} className="object-contain w-full h-full rounded-xl bg-[#F2F3F9]" />

                </div>
                <div className="flex flex-col items-start w-full space-y-1">
                    <p className="text-base font-semibold text-gray-900 line-clamp-2">{product.title.slice(0,20)}{product.title.length>20 && '...'}</p>
                    <StarRating rating={product.rating} reviews={product.reviews}/>
                    <div className="flex items-center gap-2">
                        <p className="font-semibold text-black">&#8377;{product.price}</p>
                    </div>
                    {product.oldPrice && (
                        <p className="text-sm text-gray-400 line-through">
                            {product.oldPrice} {product.currency}
                        </p>
                    )}
                </div>
                </Link>
            ))}
        </div>
        </div>
    )
}

export default AllProductsDetails;*/
}
{/* {
    id: 1,
    title: "Men Shirt",
    image: [Shirt,Shirt],
    rating: 4.5,
    reviews: 120,
    price: 999,
  } */}



  import { useLocation, Link } from "react-router-dom";
import StarRating from "../components/StarRating";
import { Heart } from "lucide-react";
import { useEffect } from "react";

const AllProductsDetails = () => {
  const { state } = useLocation();
  const products = state?.products || [];
  const title = state?.title || "All Products";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="flex font-bold text-[32px] mb-4">
        <p>{title}</p>
      </div>

      <div className="grid w-full gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {products.map((product) => (
          <Link
            to="/productDetails"
            state={{ product }}
            key={product.id}
          >
            <div>
              <div className="relative w-full h-52 rounded-xl flex items-center justify-center">
                <div className="absolute top-2 right-2 bg-white p-2 rounded-full shadow cursor-pointer group">
                  <Heart
                    size={18}
                    className="text-gray-700 group-hover:text-red-500 group-hover:fill-red-500 transition"
                  />
                </div>

                <img
                  src={product.image[0]}
                  alt={product.title}
                  className="object-contain w-full h-full rounded-xl bg-[#F2F3F9]"
                />
              </div>

              <div className="flex flex-col items-start w-full space-y-1">
                <p className="text-base font-semibold text-gray-900 line-clamp-2">
                  {product.title.slice(0, 20)}
                  {product.title.length > 20 && "..."}
                </p>

                <StarRating
                  rating={product.rating}
                  reviews={product.reviews}
                />

                <p className="font-semibold text-black">
                  ₹{product.price}
                </p>

                {product.oldPrice && (
                  <p className="text-sm text-gray-400 line-through">
                    ₹{product.oldPrice} {product.currency}
                  </p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllProductsDetails;

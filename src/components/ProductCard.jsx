import { Heart,  } from "lucide-react";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";

const ProductCard = ({ product }) => {
  const {
    title,
    image,
    rating,
    reviews,
    price,
    oldPrice,
    currency,
  } = product;

  
  return (
    <Link 
      to="/productDetails" 
      state={{ product }}
      className="flex flex-col items-start gap-2 w-full h-auto"
    >
      <div className="relative w-full h-52 rounded-xl flex items-center justify-center">
        <div className="absolute top-2 right-2 bg-white p-2 rounded-full shadow cursor-pointer group">
          <Heart
            size={18}
            className="text-gray-700 group-hover:text-red-500 group-hover:fill-red-500 transition"
          />
        </div>
        <img
          src={image[0]}
          alt={title}
          className="object-contain w-full h-full rounded-xl bg-[#F2F3F9]"
        />
      </div>
      <div className="flex flex-col items-start w-full space-y-1">
        <p className="text-base font-semibold text-gray-900 line-clamp-2">{title.slice(0,20)}{title.length > 20 && '...'}</p>
        <StarRating rating={rating} reviews={reviews} />
        <div className="flex items-center gap-2">
          <p className="font-semibold text-black">
            &#8377;{price}
          </p>

          {oldPrice && (
            <p className="text-sm text-gray-400 line-through">
              {oldPrice} {currency}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;

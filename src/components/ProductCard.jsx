import { Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";
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
    <Link to="#" className="w-44 block">
   
      <div className="relative bg-[#f2f3f7] w-44 h-44 rounded-xl flex items-center justify-center">
   
        <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow cursor-pointer group">
          <Heart
            size={18}
            className="text-gray-700 group-hover:text-red-500 group-hover:fill-red-500 transition"
          />
        </div>

        <img
          src={image}
          alt={title}
          className="object-contain w-full h-full rounded-xl"
        />
      </div>

      <div className="mt-3 w-44 space-y-1">
         <div className="flex items-center gap-1 text-sm">
            <p className="text-sm   font-medium text-gray-900 line-clamp-2">
              {title}
            </p>
         </div>
        

        <div className="flex items-center gap-1 text-sm">
          <Star size={16} className="text-blue-600 fill-blue-600" />
          <span className="font-semibold">{rating}</span>
          <span className="text-gray-500">({reviews})</span>
        </div>


        <div className="flex items-center gap-2">
          <span className="font-bold text-gray-900">
            {price} {currency}
          </span>

          {oldPrice && (
            <span className="text-sm text-gray-400 line-through">
              {oldPrice} {currency}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;

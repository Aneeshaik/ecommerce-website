/*import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import StarRating from "./StarRating";
import { useSelector, useDispatch } from 'react-redux';
import {removeItem} from '../store/wishlistSlice.js'
const ProductCard = ({ product }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    _id,
    title,
    images,
    rating,
    reviews,
    price,
    oldPrice,
    currency,
  } = product;



  const addToWishlist = async (e) => {
    e.preventDefault();
    e.stopPropagation();   //
    const response = await fetch("http://localhost:5000/api/wishlist/add", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId: _id }),
    });

    if (response.ok) {
      console.log("Added to wishlist");

    }
  };

    const wishlistItems = useSelector(state => state.wishlist.items);

  const isWishlisted = wishlistItems.some(
    item => item.product._id === _id
  );


  const removeFromWishlist = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const response = await fetch("http://localhost:5000/api/wishlist/remove", {
      credentials: "include",
      method: "DELETE",
      body: JSON.stringify({ productId: _id }),
      headers: { "Content-Type": "application/json" },
    })

    if (response.ok) {
      console.log("Removed from wishlist");
      dispatch(removeItem(_id))
    }
  }

  return (
    <div className="flex flex-col gap-2 w-full h-auto">


      <div className="relative w-full h-52 rounded-xl bg-[#F2F3F9]">
        <button
          type="button"
          onClick={(e) =>
            isWishlisted
              ? removeFromWishlist(e)
              : addToWishlist(e)
          }

          className="absolute top-2 right-2 z-50 pointer-events-auto"
        >
          <Heart
            size={18}
            className={`absolute top-2 right-2 cursor-pointer ${isWishlisted ? "text-red-500 fill-red-500" : ""}`}
          />
        </button>

        <div
          onClick={() => navigate(`/productDetails/${_id}`)}
          className="w-full h-full flex items-center justify-center cursor-pointer"
        >
          <img
            src={`http://localhost:5000${images[0]}`}
            alt={title}
            className="pointer-events-none"
          />
        </div>
      </div>

      <div
        onClick={() => navigate(`/productDetails/${_id}`)}
        className="cursor-pointer"
      >
        <p className="text-base font-semibold text-gray-900 line-clamp-2">
          {title.slice(0, 20)}
          {title.length > 20 && "..."}
        </p>

        <StarRating rating={rating} reviews={reviews} />

        <div className="flex items-center gap-2">
          <p className="font-semibold text-black">₹{price}</p>
          {oldPrice && (
            <p className="text-sm text-gray-400 line-through">
              {oldPrice} {currency}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
*/


import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import StarRating from "./StarRating";
import { useSelector, useDispatch } from 'react-redux';
import {removeItem,addItem} from '../store/wishlistSlice.js'
const ProductCard = ({ product }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    _id,
    title,
    images,
    rating,
    reviews,
    price,
    oldPrice,
    currency,
  } = product;


   const removeFromWishlist = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const response = await fetch("http://localhost:5000/api/wishlist/remove", {
      credentials: "include",
      method: "DELETE",
      body: JSON.stringify({ productId: _id }),
      headers: { "Content-Type": "application/json" },
    })

    if (response.ok) {
      console.log("Removed from wishlist");
      dispatch(removeItem(_id))
    }
  }

  const addToWishlist = async (e) => {
    e.preventDefault();
    e.stopPropagation();   //
    const response = await fetch("http://localhost:5000/api/wishlist/add", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId: _id }),
    });

    if (response.ok) {
  const data = await response.json();

  // Since backend returns populated items
  const addedItem = data.items.find(
    item => item.product._id === _id
  );

  dispatch(addItem(addedItem));
}

  };

    const wishlistItems = useSelector(state => state.wishlist.items);

  const isWishlisted = wishlistItems.some(
    item => item.product._id === _id
  );


  

  return (
    <div className="flex flex-col gap-2 w-full h-auto">


      <div className="relative w-full h-52 rounded-xl bg-[#F2F3F9]">
        <button
          type="button"
          onClick={(e) =>
            isWishlisted
              ? removeFromWishlist(e)
              : addToWishlist(e)
          }

          className="absolute top-2 right-2 z-50 pointer-events-auto"
        >
          <Heart
            size={18}
            className={`absolute top-2 right-2 cursor-pointer ${isWishlisted ? "text-red-500 fill-red-500" : ""}`}
          />
        </button>

        <div
          onClick={() => navigate(`/productDetails/${_id}`)}
          className="w-full h-full flex items-center justify-center cursor-pointer"
        >
          <img
            src={`http://localhost:5000${images[0]}`}
            alt={title}
            className="pointer-events-none"
          />
        </div>
      </div>

      <div
        onClick={() => navigate(`/productDetails/${_id}`)}
        className="cursor-pointer"
      >
        <p className="text-base font-semibold text-gray-900 line-clamp-2">
          {title.slice(0, 20)}
          {title.length > 20 && "..."}
        </p>

        <StarRating rating={rating} reviews={reviews} />

        <div className="flex items-center gap-2">
          <p className="font-semibold text-black">₹{price}</p>
          {oldPrice && (
            <p className="text-sm text-gray-400 line-through">
              {oldPrice} {currency}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
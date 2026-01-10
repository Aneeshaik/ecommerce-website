import { Heart, Star, WormIcon } from "lucide-react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const ProductDetails = () => {
    const { state } = useLocation();
    const product = state?.product;
    const {
        title,
        image,
        rating,
        reviews,
        price,
    } = product;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="flex gap-20 w-full text-black my-4 min-h-screen">
            <div className="relative w-[50%] h-[70%] bg-[#F2F3F9] flex justify-center items-center rounded-2xl">
                <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow cursor-pointer group">
                    <Heart
                        size={18}
                        className="text-gray-700 group-hover:text-red-500 group-hover:fill-red-500 transition"
                    />
                </div>
                <img src={image} alt={title} className="w-96 h-full object-contain p-4"/>
            </div>
            <div className="flex flex-col items-start gap-4 w-[50%]">
                <div className="flex flex-col items-start">
                    <p className="text-2xl font-semibold mt-4">{title}</p>
                    <div className="flex items-center gap-1">
                        <Star
                            size={16}
                            className="fill-[#018FFF] text-[#018FFF]"
                        />
                        <p>{rating}</p>
                        <p>({reviews})</p>
                    </div>
                </div>
                <p className="font-semibold text-3xl text-black">
                    &#8377;{price}
                </p>
                <Link
                    to="/cart"
                    state={{ product }}
                    className="bg-[#018FFF] w-full text-white p-2 rounded-3xl cursor-pointer"
                >Add to cart</Link>
            </div>
        </div>
    )
}

export default ProductDetails;
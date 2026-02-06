import { Heart, Star } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useParams} from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCart } from "../store/cartSlice";

const ProductDetails = () => {
  const { id } = useParams()

  const [product, setProduct] = useState({})

  const { title, info, images, rating, reviewsCount, price, category } = product

  const [activeImage, setActiveImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`http://localhost:5000/api/products/${id}`)
      
      if (response.ok) {
        const result = await response.json()
        const item = result.data
        setProduct(item)
      }
    }
    fetchProduct()
    window.scrollTo(0, 0);

  }, [id]);

  useEffect(() => {
    if (product?.images?.length) {
      setActiveImage(product.images[0]);
    }
  }, [product]);


  const addToCart = async () => {
    const response = await fetch('http://localhost:5000/api/cart/add', {
      method: 'POST',
      credentials: 'include',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        productId: product._id,
        quantity: 1
      })
    });
    if(response.ok) {
      const data = await response.json()
       const formattedItems = data.items.map(item => ({
    product: {
      _id: item.product._id,
      title: item.product.title,
      price: item.product.price,
      images: item.product.images,
    },
    quantity: item.quantity,
  }));
      dispatch(setCart(formattedItems));
    
      console.log("Added to Cart")
    }
  }




  return (
    <>
      <div className="flex flex-row justify-start my-2">
        <p>Home/ {category}/ {title}</p>
      </div>

      <div className="flex gap-16 w-full text-black my-4 min-h-screen">


        <div className="grid grid-cols-[auto_1fr] gap-4">

          <div className="flex flex-col gap-3 w-24">
            {images?.map((img, index) => (
              <img
                key={index}
                src={`http://localhost:5000${img}`}
                alt="thumbnail"
                onClick={() => setActiveImage(img)}
                className={`w-20 h-20 object-contain border rounded-lg cursor-pointer p-1
                  ${activeImage === img ? "border-blue-500" : "border-gray-300"}
                `}
              />
            ))}
          </div>

          <div className="relative bg-[#F2F3F9] flex justify-center items-center rounded-2xl   ">
            <div className="absolute top-3 right-3 bg-white  rounded-full shadow cursor-pointer group">
              <Heart
                size={18}
                className="text-gray-700 group-hover:text-red-500 group-hover:fill-red-500 transition"
              />
            </div>

            <img
              src={`http://localhost:5000${activeImage}`}
              alt={title}
              className="w-[50%]  object-cover  cursor-zoom-in"
              onClick={() => setPreviewImage(activeImage)}
            />
          </div>
        </div>


        {/* DETAILS SECTION */}
        <div className="flex flex-col items-start w-[50%] gap-4">
          <p className="text-left text-2xl font-semibold mt-4">{title}{info}</p>

          <div className="flex items-center gap-1">
            <Star size={16} className="fill-[#018FFF] text-[#018FFF]" />
            <p>{rating}</p>
            <p>({reviewsCount})</p>
          </div>

          <p className="font-semibold text-3xl text-black">
            &#8377;{price}
          </p>

          <button

            onClick={addToCart}
            className="bg-[#018FFF] w-full text-white p-2 rounded-3xl cursor-pointer text-center"
          >
            Add to cart
          </button>
          <Link to='/checkout'
            state={{ product }}
            className="bg-[#018FFF] w-full text-white p-2 rounded-3xl cursor-pointer text-center">
            Buy Now
          </Link>
        </div>
      </div>

      {/* FULL SCREEN IMAGE PREVIEW */}
      {previewImage && (
        <div
          className="fixed inset-0 bg-black flex items-center justify-center z-[999]"
          onClick={() => setPreviewImage(null)}
        >
          <img
            src={previewImage}
            alt={title}
            className="w-full h-full object-contain cursor-zoom-out"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute top-6 right-6 text-white text-3xl font-bold"
            onClick={() => setPreviewImage(null)}
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
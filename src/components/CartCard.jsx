import { Heart, Minus, Plus, Trash, Truck, Undo2 } from "lucide-react";

const CartCard = ({ product, quantity, onRemove, onIncrease, onDecrease }) => {
   if (!product) return null;
  const { _id, title, images, price } = product;

  return (
    <div className="relative flex items-start gap-3 text-black border-1 border-gray-100 bg-gray-100 rounded-2xl p-4">
      <div className="w-32 h-32 bg-[#F2F3F9] p-4 rounded-2xl mb-4 flex gap-4">
        <img
          src={`http://localhost:5000${images[0]}`}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex-1 flex items-start justify-between">
        <div className="flex flex-col gap-1 items-start">
          <p className="text-left text-xl font-semibold">{title}</p>
          <p className="text-black/60 text-sm">In Stock</p>

          <div className="flex items-center gap-2 text-black/60">
            <Undo2 className="w-4 h-4" />
            <span className="text-sm">Free 30-Day Returns</span>
          </div>

          <div className="flex items-center gap-2 text-black/60">
            <Truck className="w-4 h-4" />
            <span className="text-sm">Free Shipping</span>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <Plus
            className="w-4 h-4 p-0.5 border-2 border-black rounded-full cursor-pointer"
            onClick={() => onIncrease(_id)}
          />
          <span className="mx-2">{quantity}</span>
          <Minus
            className="w-4 h-4 p-0.5 border-2 border-black rounded-full cursor-pointer"
            onClick={() => onDecrease(_id)}
          />
        </div>
      </div>

      <div className="ml-12">
        <p className="text-2xl font-semibold">&#8377;{price}</p>
      </div>

      <div className="absolute right-3 bottom-3 flex gap-6">
        <div
          className="flex items-center gap-1 text-black/80 cursor-pointer"
          onClick={() => onRemove(_id)}
        >
          <Trash className="w-4 h-4" />
          <span className="text-sm">Remove</span>
        </div>

        <div className="flex items-center gap-1 text-black/80">
          <Heart className="w-4 h-4" />
          <span className="text-sm">Save for later</span>
        </div>
      </div>
    </div>
  );
};

export default CartCard;

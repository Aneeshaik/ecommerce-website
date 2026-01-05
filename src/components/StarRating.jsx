import { Star } from "lucide-react";

const StarRating = ({ rating = 0, reviews = 0, max = 5 }) => {
  return (
    <div className="flex items-center gap-1 text-sm">
      {[...Array(max)].map((_, index) => {
        const starValue = index + 1;
        return (
          <Star
            key={index}
            size={16}
            className={`${
              starValue <= rating
                ? "fill-[#018FFF] text-[#018FFF]"
                : "text-black/20"
            }`}
          />
        );
      })}

      <span className="ml-1 font-semibold text-black/70">{rating.toFixed(1)}</span>
      <span className="text-black/50">({reviews})</span>
    </div>
  );
};

export default StarRating;
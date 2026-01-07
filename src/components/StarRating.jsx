import { Star } from "lucide-react";

const StarRating = ({ rating = 0, reviews = 0, max = 5 }) => {
  return (
    <div className="flex items-center gap-1 text-sm">
      {[...Array(max)].map((_, index) => {
        const fill =  Math.max(0,Math.min(1, rating - index) )* 100;

        return (
          <div key={index} className="relative w-4 h-4">
            {/* Empty Star */}
            <Star
              size={16}
              className="text-black/20"
            />

            {/* Filled Star (clipped) */}
            <div
              className="absolute top-0 left-0 overflow-hidden"
              style={{ width: `${fill}%` }}
            >
              <Star
                size={16}
                className="fill-[#018FFF] text-[#018FFF]"
              />
            </div>
          </div>
        );
      })}

      <span className="ml-1 font-semibold text-black/70">
        {rating.toFixed(1)}
      </span>
      <span className="text-black/50">({reviews})</span>
    </div>
  );
};

export default StarRating;

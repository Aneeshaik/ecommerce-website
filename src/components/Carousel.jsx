import { useEffect, useState } from "react";

import img1 from "../assets/carousel/watches_banner.jpg";
import img2 from "../assets/carousel/mobilebanner.jpg";
import img3 from "../assets/carousel/mobileaccessories.jpg";
import img4 from "../assets/carousel/salebanner.jpg";

const images = [img1, img2, img3, img4];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl mb-6">
      <img
        src={images[currentIndex]}
        alt="Carousel"
        className="w-full h-[400px] object-cover transition-all duration-700"
      />

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index
                ? "bg-white"
                : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

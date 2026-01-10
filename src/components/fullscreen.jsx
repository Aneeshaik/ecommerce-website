const FullScreenImage = ({ image, alt, onClose }) => {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 bg-black flex items-center justify-center z-[999]"
      onClick={onClose}
    >
      <img
        src={image}
        alt={alt}
        className="w-full h-full object-contain cursor-zoom-out"
        onClick={(e) => e.stopPropagation()}
      />

      <button
        className="absolute top-6 right-6 text-white text-3xl font-bold"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        ✕
      </button>
    </div>
  );
};

export default FullScreenImage;

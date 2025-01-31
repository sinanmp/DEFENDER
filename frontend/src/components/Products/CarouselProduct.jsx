import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

export default function CarouselProduct({
  cardData = { images: [], video: {}, productName: "Product" },
  animationConfig = { stiffness: 260, damping: 20 },
}) {
  const { images, video, productName } = cardData;

  const [currentIndex, setCurrentIndex] = useState(0);

  // Get total number of slides (images + 1 for video if it exists)
  const totalSlides = images.length + (video.url ? 1 : 0);

  // Handle Next Button click
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  // Handle Previous Button click
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="relative w-full rounded-lg border-2 border-white border-opacity-50 overflow-hidden">
      <div className="absolute inset-0 z-10 flex items-center justify-between px-1">
        {/* Prev Button */}
        <button
          onClick={handlePrev}
          className="bg-gray-800 text-white px-2 py-1 rounded-full flex justify-center items-center shadow-md opacity-70 hover:opacity-100 transition-opacity duration-200"
        >
          <FontAwesomeIcon icon={faCaretLeft} />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="bg-gray-800 text-white px-2 py-1 flex justify-center items-center rounded-full shadow-md opacity-70 hover:opacity-100 transition-opacity duration-200"
        >
          <FontAwesomeIcon icon={faCaretRight} />
        </button>
      </div>

      <div
        className="relative z-0 flex transition-transform duration-300"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {/* Render images */}
        {images.map((image, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <img
              src={image.url}
              alt={`card-${index}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}

        {/* Render video first if it exists */}
        {video.url && currentIndex === images.length &&(
          <div className="w-full h-full flex-shrink-0">
            <video
              src={video.url}
              autoPlay
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        )}
      </div>

      {/* Product Name Overlay */}
      <div
        className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-gray-500 via-transparent
        to-transparent p-3 text-white z-50"
      >
        <h3 className="text-xs md:text-md font-bold truncate">{productName}</h3>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="absolute bottom-2 right-3 z-50">
        <a
          href="https://wa.me/+9660552278970"
          rel="noopener noreferrer"
          className="hover:cursor-pointer flex items-center justify-center gap-1 border-2 border-green-500 text-white px-1.5 py-1 lg:px-2.5 lg:py-1.5 lg:pb-2 rounded-full hover:bg-green-600 transition-colors duration-200 shadow-md"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-3 h-3 lg:w-4 lg:h-4"
          />
          <div className="text-[9px] md:text-xs font-medium">Order with us</div>
        </a>
      </div>
    </div>
  );
}

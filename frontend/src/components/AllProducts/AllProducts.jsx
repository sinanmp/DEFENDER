import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function AllProductsCard({ media, name, whatsappLink }) {
  


  return (
    <div className="relative max-w-xs mx-auto bg-gray-100 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Media Carousel */}
      <Swiper
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Navigation]}
        className="w-full h-64 relative"
      >
        {media.map((item, index) => (
          <SwiperSlide key={index}>
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={name}
                className="w-full h-64 object-cover"
              />
            ) : (
              <video
                src={item.src}
                controls
                className="w-full h-64 object-cover"
              />
            )}
          </SwiperSlide>
        ))}

        {/* Custom Navigation Arrows */}
        <div className="custom-prev absolute top-1/2 -translate-y-1/2 left-3 w-8 h-8 bg-black bg-opacity-30 text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-80 transition-opacity z-10">
          &#8592;
        </div>
        <div className="custom-next absolute top-1/2 -translate-y-1/2 right-3 w-8 h-8 bg-black bg-opacity-30 text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-80 transition-opacity z-10">
          &#8594;
        </div>
      </Swiper>

      {/* Overlay Name */}
      <div
        className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-gray-500 via-transparent
      to-transparent p-4 text-white"
      >
        <h3 className="text-lg font-bold truncate">{name}</h3>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="absolute bottom-4 right-4">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1 text-sm bg-green-500 text-white px-3 py-2 pb-2.5 rounded-full hover:bg-green-600 transition-colors duration-200 shadow-md"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-4 h-4"
          />
          <div className="text-sm font-medium">Order with us</div>
        </a>
      </div>
    </div>
  );
}

function AllProductsList({ }) {
    // Fetch All Products Function Here
    const sampleProducts = [
        {
          id: 0,
          name: "Stylish Jacket",
          whatsappLink:
            "https://wa.me/1234567890?text=I'm%20interested%20in%20Stylish%20Jacket",
          media: [
            { type: "image", src: "https://via.placeholder.com/300" },
            { type: "image", src: "https://via.placeholder.com/300/0000FF" },
            { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
          ],
        },
        {
          id: 1,
          name: "Classic Sneakers",
          whatsappLink:
            "https://wa.me/1234567890?text=I'm%20interested%20in%20Classic%20Sneakers",
          media: [
            { type: "image", src: "https://via.placeholder.com/300" },
            { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
          ],
        },
        {
          id: 2,
          name: "Stylish Sneakers",
          whatsappLink:
            "https://wa.me/1234567890?text=I'm%20interested%20in%20Classic%20Sneakers",
          media: [
            { type: "image", src: "https://via.placeholder.com/300" },
            { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
          ],
        },
        {
          id: 3,
          name: "Classic Jackets",
          whatsappLink:
            "https://wa.me/1234567890?text=I'm%20interested%20in%20Classic%20Sneakers",
          media: [
            { type: "image", src: "https://via.placeholder.com/300" },
            { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
          ],
        },
        {
          id: 4,
          name: "Stylish Jacket",
          whatsappLink:
            "https://wa.me/1234567890?text=I'm%20interested%20in%20Stylish%20Jacket",
          media: [
            { type: "image", src: "https://via.placeholder.com/300" },
            { type: "image", src: "https://via.placeholder.com/300/0000FF" },
            { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
          ],
        },
        {
          id: 4,
          name: "Stylish Jacket",
          whatsappLink:
            "https://wa.me/1234567890?text=I'm%20interested%20in%20Stylish%20Jacket",
          media: [
            { type: "image", src: "https://via.placeholder.com/300" },
            { type: "image", src: "https://via.placeholder.com/300/0000FF" },
            { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
          ],
        },
        {
          id: 4,
          name: "Stylish Jacket",
          whatsappLink:
            "https://wa.me/1234567890?text=I'm%20interested%20in%20Stylish%20Jacket",
          media: [
            { type: "image", src: "https://via.placeholder.com/300" },
            { type: "image", src: "https://via.placeholder.com/300/0000FF" },
            { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
          ],
        },
        {
          id: 4,
          name: "Stylish Jacket",
          whatsappLink:
            "https://wa.me/1234567890?text=I'm%20interested%20in%20Stylish%20Jacket",
          media: [
            { type: "image", src: "https://via.placeholder.com/300" },
            { type: "image", src: "https://via.placeholder.com/300/0000FF" },
            { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
          ],
        },
        {
          id: 4,
          name: "Stylish Jacket",
          whatsappLink:
            "https://wa.me/1234567890?text=I'm%20interested%20in%20Stylish%20Jacket",
          media: [
            { type: "image", src: "https://via.placeholder.com/300" },
            { type: "image", src: "https://via.placeholder.com/300/0000FF" },
            { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
          ],
        },
      ];
  return (
    <div
      className="h-[75vh]  overflow-y-scroll px-4 py-2 space-y-6"
      style={{
        scrollbarWidth: "none", // For Firefox
        msOverflowStyle: "none", // For IE and Edge
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sampleProducts.map((product, index) => (
          <AllProductsCard
            key={index}
            media={product.media}
            name={product.name}
            whatsappLink={product.whatsappLink}
          />
        ))}
      </div>
    </div>
  );
}

export default AllProductsList;

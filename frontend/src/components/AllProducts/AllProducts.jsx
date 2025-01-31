import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import api from "../../services/api";
import CarouselProduct from "../Products/CarouselProduct";



function AllProductsList() {
  const [products, setProducts] = useState([]); // Holds products fetched from the backend
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [data, setData] = useState("null");

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setData("Fetching data...");
        setIsLoading(true); // Set loading state to true before fetching
        const result = await api.getProducts(); // Fetch products from the API
        setData(`Data fetched: ${result.data.length} items`);
        setProducts(result.data); // Update the products state
        setIsLoading(false); // Set loading state to false after fetching
      } catch (error) {
        setData(`${error}`)
        console.error("Failed to fetch products:", error);
        setIsLoading(false); // Ensure loading state is false if there's an error
      }
    };

    fetchProducts();
  }, []); // Empty dependency array to run on component mount

  return (
    <div
      className="lg:h-[75vh] overflow-y-scroll px-4 py-2 space-y-6"
      style={{
        scrollbarWidth: "none", // For Firefox
        msOverflowStyle: "none", // For IE and Edge
      }}
    >
      {/* Loading Indicator */}
      {isLoading ? (
        <div className="flex justify-center items-center h-full">
          <div className="animate-spin w-12 h-12 border-4 border-t-4 border-blue-500 border-solid rounded-full"></div>
        </div>
      ) : (
        <>
          {/* Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {products.map((product, index) => (
              <CarouselProduct
                key={index}
                cardData={product} // Pass the product to CarouselProduct
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default AllProductsList;

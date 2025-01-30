import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import api from "../../services/api";
import CarouselProduct from "./CarouselProduct";

function ProductsList() {
  const [products, setProducts] = useState([]); // Holds products fetched from the backend
  const [numProducts, setNumProducts] = useState(4); // Default number of products to display

  // Adjust number of products based on screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 1024) {
        setNumProducts(8); // For large screens
      } else if (width >= 768) {
        setNumProducts(6); // For medium screens
      } else if (width >= 476) {
        setNumProducts(4); // For smaller screens
      } else {
        setNumProducts(2); // For extra small screens
      }
    };

    // Initial check
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await api.getProducts(); // Fetch products based on numProducts
        setProducts(result.data); // Update the products state
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, [numProducts]); // Refetch products whenever numProducts changes

  return (
    <div
      className="h-[75vh] px-4 py-2 space-y-6"
      style={{
        scrollbarWidth: "none", // For Firefox
        msOverflowStyle: "none", // For IE and Edge
      }}
    >
      {products.length === 0 ? (
        <div className="text-center text-xl text-gray-600">
          <p>No products available at the moment.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }} // Start off-screen and invisible
              animate={{ opacity: 1, y: 0 }} // Animate to fully visible and in place
              transition={{
                delay: index * 0.1, // Delay each product based on its index for staggered effect
                duration: 0.5, // Duration of each animation
              }}
            >
              <CarouselProduct
                cardData={product} // Pass the product to CarouselProduct
              />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductsList;

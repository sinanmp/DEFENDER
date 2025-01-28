import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import StackProducts from "./StackProducts";
import api from "../../services/api";

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
      console.log("trying to fetch")
      try {
        console.log("before trying to fetch")
        const result = await api.getProducts(); // Fetch products based on numProducts
        console.log("after trying to fetch")
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
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
            <StackProducts
              randomRotation={true}
              sensitivity={180}
              sendToBackOnClick={true}
              cardsData={product.media}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ProductsList;

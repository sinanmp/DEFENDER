import { useState, useEffect } from "react";
import { motion } from "framer-motion";  // Import motion from framer-motion
import StackProducts from "./StackProducts";

function ProductsList({ sampleProducts }) {
  const [numProducts, setNumProducts] = useState(4); // Default to 4 products

  // Update number of products based on window width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 1024) {
        setNumProducts(8); // For large screens (lg) and up
      } else if (width >= 768) {
        setNumProducts(6); // For medium screens (md)
      } else if(width >=476) {
        setNumProducts(4); // For smaller screens
      } else {
        setNumProducts(2); // For extra small screens (xs)
      }
    };

    // Initial check
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Get the products to display based on the current number of products
  const productsToDisplay = sampleProducts.slice(0, numProducts);

  return (
    <div
      className="h-[75vh] px-4 py-2 space-y-6"
      style={{
        scrollbarWidth: "none", // For Firefox
        msOverflowStyle: "none", // For IE and Edge
      }}
    >
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productsToDisplay.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}  // Start off-screen and invisible
            animate={{ opacity: 1, y: 0 }}   // Animate to fully visible and in place
            transition={{
              delay: index * 0.1,  // Delay each product based on its index for staggered effect
              duration: 0.5,  // Duration of each animation
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

import { useState, useEffect } from "react";
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

      } else if(width >=476){
        setNumProducts(2)
      } 
      
      else {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productsToDisplay.map((product, index) => (
          <StackProducts
            key={index}
            randomRotation={true}
            sensitivity={180}
            sendToBackOnClick={true}
            cardsData={product.media}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsList;

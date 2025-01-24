import { useNavigate } from "react-router-dom";

function ViewAllProducts({ activeNav, setActiveNav }) {
  // Check if the activeNav is "allProducts" or "products"
  const buttonText =
    activeNav === "#allProducts" ? "Go Back" : "View All Products";

  return (
    <>
      {/* Show the button only if activeNav is "allProducts" or "products" */}
      {(activeNav === "#allProducts" || activeNav === "#products") && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
          <button
            onClick={() => {
              if (activeNav === "#allProducts") {
                // Logic for going back
                setActiveNav("#products"); // Example: Set to products page
              } else {
                // Logic for navigating to all products
                setActiveNav("#allProducts");
              }
            }}
            className="text-xs lg:text-sm text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-semibold hover:bg-gray-700 transition duration-200 shadow-lg flex items-center justify-center border-2 border-white border-opacity-50 hover:border-gray-500"
            style={{
              background: "rgba(31, 41, 55, 0.3)", // Semi-transparent background
              backdropFilter: "blur(12px)", // Frosted-glass effect
              WebkitBackdropFilter: "blur(12px)", // Safari support
            }}
          >
            {buttonText}
          </button>
        </div>
      )}
    </>
  );
}

export default ViewAllProducts;

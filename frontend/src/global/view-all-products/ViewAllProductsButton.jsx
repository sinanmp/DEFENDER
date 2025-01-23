import { useNavigate } from "react-router-dom";

function ViewAllProducts({ activeNav, setActiveNav }) {
  // Check if the activeNav is "allProducts" or "products"
  const buttonText = activeNav === "#allProducts" ? "Go Back" : "View All Products";

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
            className="bg-gray-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition duration-200 shadow-lg flex items-center justify-center border-2 border-gray-600 hover:border-gray-500"
          >
            {buttonText}
          </button>
        </div>
      )}
    </>
  );
}

export default ViewAllProducts;

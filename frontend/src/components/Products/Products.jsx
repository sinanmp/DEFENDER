import React from "react";
import ProductCard from "./ProductsCard";
import ProductList from "./ProductsCard";
import AllProductsList from "../AllProducts/AllProducts";

function Products({ activeNav }) {
  // Fetch Latest 8 Products HERE instead of the SAMPLE PRODUCTS
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
  ];
  return (
    <>
      {activeNav === "#home" && (
        <section id="home" className="pt-9 bg-cover bg-center px-12 text-white">
          <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row lg:items-center">
            {/* Left Side */}
            <div className="flex-1">
              <h1 className="text-[4vw] sm:text-3xl md:text-4xl font-bold md:leading-normal">
                Defender: Where Style Meets Durability – Empowering You to
                Conquer Every Day with Confidence, Comfort, and Timeless
                Elegance.
              </h1>
            </div>

            {/* Center Space */}
            <div className="flex-[0.4] lg:flex-1"></div>

            {/* Right Side */}
            <div className="flex-1 text-center space-y-6 flex flex-col gap-6">
              <p className="sm:text-md md:text-lg leading-relaxed">
                At Defender, we believe fashion is more than just what you wear
                – it's how you express yourself, conquer challenges, and make a
                statement. <br />
                <span className="xl:block hidden">
                  Our collection is thoughtfully crafted to combine cutting-edge
                  style with unmatched durability, ensuring you’re always ready
                  for whatever life throws your way. <br />
                </span>
                Whether you're dressing for a casual day out or a formal event,
                Defender offers premium-quality products that prioritize
                comfort, elegance, and individuality. Join thousands of
                satisfied customers who trust Defender to redefine their
                everyday wardrobe.
              </p>
              <div>
                <button className="px-5 py-3 text-md bg-zinc-600 hover:bg-zinc-700 rounded-md">
                  Explore Products
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
      {activeNav === "#products" && (
        <section id="products" className="p-12 pt-3 w-full">
          <div className="">
            <ProductList products={sampleProducts}/>
          </div>
        </section>
      )}
      {activeNav === "#contact" && (
        <section id="contact" className="h-full p-12 bg-gray-300">
          <h2 className="text-2xl font-bold text-center">Contact Us</h2>
          {/* Add content for the Contact section here */}
        </section>
      )}
      {activeNav === "#allProducts" && (
        <section id = "allProducts" className="p-12 pt-3 w-full">
          <div>
            <AllProductsList/>
          </div>
        </section>
      )}
      
    </>
  );
}

export default Products;

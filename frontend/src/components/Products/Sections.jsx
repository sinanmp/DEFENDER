import React from "react";
import AllProductsList from "../AllProducts/AllProducts";
import Shoe from "../../assets/images/products/Shoe.jpg";
import ProductsList from "./ProductList";

function Sections({ activeNav }) {
  // Fetch Latest 8 Products HERE instead of the SAMPLE PRODUCTS
  const sampleProducts = [
    {
      id: 0,
      name: "Stylish Jacket",
      media: [
        { type: "image", src: `${Shoe}` },
        { type: "image", src: `${Shoe}` },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
      ],
    },
    {
      id: 1,
      name: "Classic Sneakers",
      media: [
        { type: "image", src: `${Shoe}` },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
      ],
    },
    {
      id: 2,
      name: "Stylish Sneakers",
      media: [
        { type: "image", src: `${Shoe}` },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
      ],
    },
    {
      id: 3,
      name: "Classic Jackets",
      media: [
        { type: "image", src: `${Shoe}` },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
      ],
    },
    {
      id: 4,
      name: "Stylish Jacket",
      media: [
        { type: "image", src: `${Shoe}` },
        { type: "image", src: `${Shoe}` },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
      ],
    },
    {
      id: 4,
      name: "Stylish Jacket",
      media: [
        { type: "image", src: `${Shoe}` },
        { type: "image", src: `${Shoe}` },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
      ],
    },
    {
      id: 4,
      name: "Stylish Jacket",
      media: [
        { type: "image", src: `${Shoe}` },
        { type: "image", src: `${Shoe}` },
        { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
      ],
    },
    {
      id: 4,
      name: "Stylish Jacket",
      media: [
        { type: "image", src: `${Shoe}` },
        { type: "image", src: `${Shoe}` },
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
            <ProductsList sampleProducts={sampleProducts} />
          </div>
        </section>
      )}

      {activeNav === "#contact" && (
        <section id="about" className="h-[70vh] p-10 flex items-center">
          <div className="flex flex-col md:flex-row justify-center items-center w-full">
            {/* Left Column: Mission & Vision */}
            <div
              className="flex-1 max-w-md mx-auto p-8 rounded-lg shadow-lg text-white "
              style={{
                background: "rgba(31, 41, 55, 0.2)", // Semi-transparent background
                backdropFilter: "blur(12px)", // Frosted-glass effect
                WebkitBackdropFilter: "blur(12px)", // Safari support
              }}
            >
              <h3 className="text-md lg:text-2xl font-semibold mb-4 text-center">
                Our Mission
              </h3>
              <p className="mb-4 text-justify text-xs lg:text-lg">
                At Defender, our mission is to redefine the way you think about
                fashion. We believe in creating stylish, durable, and
                comfortable products that not only enhance your wardrobe but
                empower your lifestyle.
              </p>
              <h3 className="text-md lg:text-2xl font-semibold mb-4 text-center">
                Our Vision
              </h3>
              <p className="text-justify text-xs lg:text-lg">
                To become a global leader in fashionable yet durable clothing
                that enables individuals to express their unique style, while
                always prioritizing comfort and performance.
              </p>
            </div>

            {/* Right Column: Values */}
            <div
              className="flex-1 max-w-md mx-auto  p-8 rounded-lg shadow-lg text-white"
              style={{
                background: "rgba(31, 41, 55, 0.2)", // Semi-transparent background
                backdropFilter: "blur(12px)", // Frosted-glass effect
                WebkitBackdropFilter: "blur(12px)", // Safari support
              }}
            >
              <h3 className="text-md lg:text-2xl font-semibold mb-4 text-center">Our Values</h3>
              <ul className="list-disc pl-5 space-y-2 text-justify mb-4 text-xs lg:text-lg">
                <li >
                  <strong>Quality:</strong> Premium materials and craftsmanship
                  to ensure lasting durability.
                </li>
                <li>
                  <strong>Sustainability:</strong> We aim to minimize our
                  environmental footprint with eco-friendly practices.
                </li>
                <li>
                  <strong>Customer-Centricity:</strong> Our customers are at the
                  heart of everything we do, ensuring satisfaction in every
                  interaction.
                </li>
              </ul>
              <h3 className="text-md lg:text-2xl font-semibold mb-3 text-center">Our Office</h3>
              <div className=" text-xs text-justify">
              <p className="mb-2 ">
                Feel free to reach out to us via the following methods:
              </p>
              <ul className="list-none">
                <li className="mb-2 flex gap-5">
                  <div><strong>Email:</strong> support@defender.com</div>
                  <div><strong>Phone:</strong> +1 (800) 123-4567</div>
                </li>
                <li className="mb-2 hidden lg:block">
                  <strong>Phone:</strong> +1 (800) 123-4567
                </li>
                <li className="mb-2">
                  <strong>Address:</strong> 123 Fashion Street, New York, NY,
                  10001
                </li>
              </ul>

              </div>
            </div>
          </div>
        </section>
      )}

      {activeNav === "#allProducts" && (
        <section id="allProducts" className="p-12 pt-3 w-full">
          <div>
            <AllProductsList image={Shoe} />
          </div>
        </section>
      )}
    </>
  );
}

export default Sections;

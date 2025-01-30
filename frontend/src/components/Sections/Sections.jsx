import React from "react";
import { motion } from "framer-motion"; // Importing Framer Motion
import AllProductsList from "../AllProducts/AllProducts";
import Shoe from "../../assets/images/products/Shoe.jpg";
import ProductsList from "../Products/ProductList";
import "./Sections.css";
import { useEffect } from "react";

function Sections({ activeNav }) {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          // This section is in view, update the activeNav
          setActiveNav(`#${section.id}`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {activeNav === "#home" && (
        <motion.section
          id="home"
          className="pt-9 bg-cover bg-center px-12 text-white"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row lg:items-center">
            <div className="flex-1">
              <h1 className="text-[4vw] sm:text-3xl md:text-4xl font-bold md:leading-normal">
                Defender: Where Style Meets Durability – Empowering You to
                Conquer Every Day with Confidence, Comfort, and Timeless
                Elegance.
              </h1>
            </div>
            <div className="flex-[0.4] lg:flex-1"></div>
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
        </motion.section>
      )}

      {activeNav === "#products" && (
        <div>
          <ProductsList />
        </div>
      )}

      {activeNav === "#contact" && (
        <motion.section
          id="about"
          className="h-auto lg:h-[85vh] p-5 lg:p-10 flex items-center"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="flex flex-col lg:flex-row justify-center items-center w-full space-y-8 lg:space-y-0 ">
            <div
              className="flex-1 max-w-lg max-h-full md:max-w-2xl lg:max-w-xs xl:max-w-lg mx-auto p-6 md:p-8 rounded-lg shadow-lg text-white"
              style={{
                background: "rgba(31, 41, 55, 0.2)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            >
              <h3 className="text-lg  lg:text-2xl font-semibold mb-3 lg:mb-4 text-center">
                Our Mission
              </h3>
              <p className="mb-4 text-justify text-sm lg:text-lg">
                At Defender, our mission is to redefine the way you think about
                fashion. We believe in creating stylish, durable, and
                comfortable products that not only enhance your wardrobe but
                empower your lifestyle.
              </p>
              <h3 className="text-lg lg:text-2xl font-semibold mb-3 lg:mb-4 text-center">
                Our Vision
              </h3>
              <p className="text-justify text-sm  lg:text-lg">
                To become a global leader in fashionable yet durable clothing
                that enables individuals to express their unique style, while
                always prioritizing comfort and performance.
              </p>
            </div>
            <div
              className="flex-1 max-w-lg  md:max-w-2xl lg:max-w-lg xl:max-w-xl mx-auto p-6 lg:p-8 rounded-lg shadow-lg text-white"
              style={{
                background: "rgba(31, 41, 55, 0.2)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            >
              <h3 className="text-lg lg:text-2xl font-semibold mb-3 lg:mb-4 text-center">
                Our Values
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-justify mb-3 lg:mb-4 text-sm  lg:text-lg">
                <li>
                  <strong>Quality:</strong> Premium materials and craftsmanship
                  to ensure lasting durability.
                </li>
                <li className="hidden lg:block">
                  <strong>Sustainability:</strong> We aim to minimize our
                  environmental footprint with eco-friendly practices.
                </li>
                <li className="hidden lg:block">
                  <strong>Customer-Centricity:</strong> Our customers are at the
                  heart of everything we do, ensuring satisfaction in every
                  interaction.
                </li>
              </ul>
              <h3 className="text-lg  lg:text-2xl font-semibold mb-3 text-center">
                Our Office
              </h3>
              <div className="text-sm lg:text-lg text-justify">
                <p className="mb-2">
                  Feel free to reach out to us via the following methods:
                </p>
                <ul className="list-none">
                  <li className="mb-2">
                    <strong>Email:</strong>
                    <a href="mailto:defenderboot@gmail.com">
                      defenderboot@gmail.com
                    </a>
                  </li>

                  <li className="mb-2">
                    <strong>Phone:</strong>
                    <a href="tel:0552278970">0552278970</a>
                  </li>

                  <li className="mb-2">
                    <strong>Address:</strong> Defender, Taj Al Samy Trading EST,
                    Al Samra, Hail, KSA 55425
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {activeNav === "#allProducts" && (
        <motion.section
          id="allProducts"
          className="p-12 pt-3 w-full"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div>
            <AllProductsList />
          </div>
        </motion.section>
      )}
    </>
  );
}

export default Sections;

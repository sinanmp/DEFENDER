import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Sections from "../components/Sections/Sections";
import WhatsAppButton from "../global/whatsapp-button/Whatsapp-Button";
import ViewAllProducts from "../global/view-all-products/ViewAllProductsButton";

function MainPage() {
  const [activeNav, setActiveNav] = useState("#home");
  const sectionsOrder = ["#home", "#products", "#contact"];
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      if (isScrolling) return; // Prevent rapid state updates during a single scroll

      // Only proceed if the current activeNav is in the sectionsOrder
      if (!sectionsOrder.includes(activeNav)) return;

      setIsScrolling(true); // Block further scroll handling
      const scrollDelta = event.deltaY; // Positive for down, negative for up
      const currentIndex = sectionsOrder.indexOf(activeNav);

      if (scrollDelta > 0 && currentIndex < sectionsOrder.length - 1) {
        // Scroll down, go to the next section
        setActiveNav(sectionsOrder[currentIndex + 1]);
      } else if (scrollDelta < 0 && currentIndex > 0) {
        // Scroll up, go to the previous section
        setActiveNav(sectionsOrder[currentIndex - 1]);
      }

      // Reset scroll block after a short delay
      setTimeout(() => {
        setIsScrolling(false);
      }, 800); // Adjust delay to match the duration of the scroll transition
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [activeNav, isScrolling, sectionsOrder]);

  return (
    <>
      <Header activeNav={activeNav} setActiveNav={setActiveNav} />
      <WhatsAppButton />
      <ViewAllProducts activeNav={activeNav} setActiveNav={setActiveNav} />
      {/* <StarBorder as="button" className="custom-class" color="cyan" speed="5s">
      </StarBorder> */}
      <Sections activeNav={activeNav} />
    </>
  );
}

export default MainPage;

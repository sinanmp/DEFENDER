import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Sections from "../components/Sections/Sections";
import WhatsAppButton from "../global/whatsapp-button/Whatsapp-Button";
import ViewAllProducts from "../global/view-all-products/ViewAllProductsButton";

function MainPage() {
  const [activeNav, setActiveNav] = useState("#home");
  const sectionsOrder = ["#home", "#products", "#contact"];
  const [isScrolling, setIsScrolling] = useState(false);
  const [isLgScreen, setIsLgScreen] = useState(false); // To track screen size

  useEffect(() => {
    // Function to update screen size state
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // 1024px is the default breakpoint for 'lg' in Tailwind
        setIsLgScreen(true);
      } else {
        setIsLgScreen(false);
      }
    };

    // Initial check on mount
    handleResize();
    
    // Attach the resize event listener
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isLgScreen) return; // Only enable scroll behavior for large screens

    const handleWheelScroll = (event) => {
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
    if (isLgScreen) {
      window.addEventListener("wheel", handleWheelScroll);
    }

    return () => {
      if (isLgScreen) {
        window.removeEventListener("wheel", handleWheelScroll);
      }
    };
  }, [activeNav, isScrolling, isLgScreen, sectionsOrder]);

  return (
    <>
      <Header activeNav={activeNav} setActiveNav={setActiveNav} />
      <WhatsAppButton />
      <ViewAllProducts activeNav={activeNav} setActiveNav={setActiveNav} />
      <Sections activeNav={activeNav} setActiveNav={setActiveNav} />
    </>
  );
}

export default MainPage;

import React, { act, useState } from "react";
import Header from "../components/Header/Header";
import WhatsAppButton from "../global/whatsapp-button/Whatsapp-Button";
import Products from "../components/Products/Sections";
import StarBorder from "../global/GradientText/GradientText";
import ViewAllProducts from "../global/view-all-products/ViewAllProductsButton";
import ClickSpark from "../global/ClickSpark";
import Sections from "../components/Products/Sections";
function MainPage() {
  const [activeNav, setActiveNav] = useState("#products");
  return (
    <>
      <Header activeNav={activeNav} setActiveNav={setActiveNav} />
      <WhatsAppButton />
      {/* <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      /> */}
      <ViewAllProducts activeNav={activeNav} setActiveNav={setActiveNav} />

      {/* <StarBorder as="button" className="custom-class" color="cyan" speed="5s">
      </StarBorder> */}
      <Sections activeNav={activeNav} />
    </>
  );
}

export default MainPage;

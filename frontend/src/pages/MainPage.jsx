import React, { act, useState } from "react";
import Header from "../components/Header/Header";
import WhatsAppButton from "../global/whatsapp-button/Whatsapp-Button";
import Products from "../components/Products/Products";
import ViewAllProducts from "../global/view-all-products/ViewAllProductsButton";
function MainPage() {
    const [activeNav, setActiveNav] = useState("#products");
  return (
    <>
      <Header activeNav = {activeNav} setActiveNav = {setActiveNav}/>
      <WhatsAppButton />
      <ViewAllProducts activeNav = {activeNav} setActiveNav = {setActiveNav}/>
      <Products activeNav = {activeNav}/>
    </>
  );
}

export default MainPage;

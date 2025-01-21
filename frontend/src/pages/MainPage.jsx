import React, { act, useState } from "react";
import Header from "../components/Header/Header";
import WhatsAppButton from "../global/whatsapp-button/Whatsapp-Button";
import Products from "../components/Products/Products";
function MainPage() {
    const [activeNav, setActiveNav] = useState("#home");
  return (
    <>
      <Header activeNav = {activeNav} setActiveNav = {setActiveNav}/>
      <WhatsAppButton />
      <Products activeNav = {activeNav}/>
    </>
  );
}

export default MainPage;

import { useState } from "react";
import Logo from "./assets/roya_logo.png";
import "./index.css";
import Navbar from "./compoenent/navbar";
import Hero from "./compoenent/hero";
import SpecialDeal from "./compoenent/SpecialDeal";
import Services from "./compoenent/services";
import CustomersSay from "./compoenent/CustomersSay";
import Footer from "./compoenent/footer";
function App() {
  return (
    <div className="bg-accent/10">
      <Navbar />
      <Hero />
      <Services />
      <SpecialDeal />
      <CustomersSay />
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import Header from "../WiseWebtek/Header";
import Header1 from "../WiseWebtek/Header1";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../WiseWebtek/Navbar";
import Footer from "../WiseWebtek/Footer";
import Carousal from "../WiseWebtek/Carousal";
import Categories from "./Categories";

function Routing() {
  return (
    <div>
      <Header />
      <Navbar />
      <Header1 />
      <Carousal />
      <Categories />
      <Footer />
    </div>
  );
}
export default Routing;

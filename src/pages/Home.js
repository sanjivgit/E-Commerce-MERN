import React from "react";
import Announcement from "../components/Announcement";
import CategoriesItems from "../components/CategoriesItems";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";

function Home() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <CategoriesItems />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;

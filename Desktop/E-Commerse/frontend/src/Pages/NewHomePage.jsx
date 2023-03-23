import React from "react";
import Events from "../Components/Events/Events";
import Footer from "../Components/Layout/Footer";
import Header from "../Components/Layout/Header";
import BestDeals from "../Components/Route/BestDeals/BestDeals";
import Categories from "../Components/Route/Categories/Categories";
import FeaturedProduct from "../Components/Route/FeaturedProduct/FeaturedProduct";
import Hero from "../Components/Route/Hero/Hero";
import Sponsored from "../Components/Route/Sponsored";

const NewHomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Categories />
      <BestDeals />
      <FeaturedProduct />
      <Events />
      <Sponsored />
      <Footer />
    </div>
  );
};

export default NewHomePage;

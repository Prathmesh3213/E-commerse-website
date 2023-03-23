import React from "react";
import Header from "../Components/Layout/Header";
import Categories from "../Components/Route/Categories/Categories.jsx";
import BestDeals from "../Components/Route/BestDeals/BestDeals.jsx";
import FeatureProduct from "../Components/Route/FeaturedProduct/FeaturedProduct.jsx";
import Events from "../Components/Events/Events.jsx";
import Sponsored from "../Components/Route/Sponsored.jsx";
import Footer from "../Components/Layout/Footer.jsx";
import Hero from "../Components/Route/Hero/Hero.jsx";


const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <BestDeals />
      <FeatureProduct />
      <Events />
      <Sponsored />
      <Footer />
    </div>
  );
};

export default HomePage;

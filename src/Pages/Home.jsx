import React from "react";
import { Helmet } from "react-helmet-async";
import HomeHero from "../components/Home/HomeHero";
import ClientsCarousel from "../components/Home/ClientsCarousel";
import ServicesCards from "../components/Home/ServicesCards";
import WhyWeStandOut from "../components/Home/WhyWeStandOut";

const Home = () => {
  const currentUrl = window.location.href;
  return (
    <>
      <Helmet>
        <title>Qloron Technology</title>
        <meta
          name="description"
          content="Qloron provides innovative software solutions including web development, hosting, and digital marketing. Partner with us for your digital growth needs."
        />
        <link rel="canonical" href={currentUrl} />
      </Helmet>
      <HomeHero />
      <ServicesCards />
      <ClientsCarousel />
      <WhyWeStandOut />
    </>
  );
};

export default Home;

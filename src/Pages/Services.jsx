import React from "react";
import { Helmet } from "react-helmet-async";
import ServicesPage from "../components/Servicepage/ServicesPage";

const Services = () => {
  const currentUrl = window.location.href;
  return (
    <>
      <Helmet>
        <title>Qloron Technology | Our Services</title>
        <meta
          name="description"
          content="Discover Qloron Technology's comprehensive digital solutions - from web development to AI-powered applications. Transform your business with our cutting-edge services."
        />
        <link rel="canonical" href={currentUrl} />
      </Helmet>
      <ServicesPage />
    </>
  );
};

export default Services;
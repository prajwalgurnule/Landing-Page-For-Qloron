import React from "react";
import AboutHero from "../components/Aboutus/AboutHero";
import WhoWeAre from "../components/Aboutus/WhoWeAre";
import WhatWeDo from "../components/Aboutus/WhatWeDo";
import Vision from "../components/Aboutus/Vision";
import Mission from "../components/Aboutus/Mission";
import OurTeam from "../components/Aboutus/OurTeam";
import CoreValues from "../components/Aboutus/CoreValues";
import Milestones from "../components/Aboutus/Milestones";
import { Helmet } from "react-helmet-async";
import Testimonials from "../components/Aboutus/Testimonials";
import CallToAction from "../components/Aboutus/CallToAction";

const About = () => {
  const currentUrl = window.location.href;
  return (
    <>
      <Helmet>
        <title>Qloron Technology | About Us</title>
        <meta
          name="description"
          content="Discover Qloron Technology's mission, vision, and values. Learn how our innovative digital solutions can transform your business."
        />
        <link rel="canonical" href={currentUrl} />
      </Helmet>
      <AboutHero />
      <WhoWeAre />
      <WhatWeDo />
      <CoreValues />
      <Vision />
      <Mission />
      <Milestones />
      <OurTeam />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default About;
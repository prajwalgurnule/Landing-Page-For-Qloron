import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight, FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const clients = [
  { id: 1, name: "Tech Mahindra", logo: "../images/clientsImages/com-1.png", },
  { id: 2, name: "Smart Data", logo: "../images/clientsImages/com-2.png" },
  { id: 3, name: "American Eagle", logo: "../images/clientsImages/com-3.png" },
  { id: 4, name: "HTC", logo: "../images/clientsImages/com-4.png" },
  { id: 5, name: "Nike", logo: "../images/clientsImages/com-5.png" },
  { id: 6, name: "Supersourcing", logo: "../images/clientsImages/com-6.png", },
  { id: 7, name: "Brainium", logo: "../images/clientsImages/com-7.png" },
  { id: 8, name: "GSPANN", logo: "../images/clientsImages/com-8.png", },
  { id: 9, name: "Codilar", logo: "../images/clientsImages/com-9.png" },
  { id: 10, name: "SmartCloud", logo: "../images/clientsImages/com-10.png",},
  { id: 11, name: "Tata", logo: "../images/clientsImages/com-11.png", },
];

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 right-4 z-10 cursor-pointer"
      onClick={onClick}
    >
      <FaAngleRight
        data-aos="slide-right"
        data-aos-delay="300"
        className="text-3xl text-gray-500 hover:text-gray-900"
      />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 left-4 z-10 cursor-pointer"
      onClick={onClick}
    >
      <FaAngleLeft
        data-aos="slide-left"
        data-aos-delay="300"
        className="text-3xl text-gray-500 hover:text-gray-900"
      />
    </div>
  );
};

const ClientsCarousel = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/our-clients");
  };

  const handleReadMoreClick = () => {
    navigate("/our-clients");
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 1800,
    responsive: [
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="bg-white-200">
        <section className="container mx-auto py-10 relative mt-5">
          <h2
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-4xl font-semibold text-center mb-6"
          >
            Our <span className="text-cyan-600">Clients</span>
          </h2>
          <Slider {...settings}>
            {clients.map((client) => (
              <div key={client.id} className="px-4 my-7">
                <div
                  data-aos="zoom-in"
                  data-aos-delay="300"
                  className="bg-white p-3  border-2 border-slate-300 rounded-full h-32 w-32 scale-100 mx-auto flex items-center justify-center cursor-pointer duration-300 hover:scale-110"
                  onClick={handleLogoClick}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    width="120" // Set to match h-32 (height) assuming square aspect ratio
                    height="128" // Set to match w-32 (width) assuming square aspect ratio
                    className="rounded-xl"
                  />
                </div>
              </div>
            ))}
          </Slider>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex justify-center mt-11"
          >
            <button
              className="btn-primary flex items-center"
              onClick={handleReadMoreClick}
            >
              View more
              <FaArrowRight className="ml-2" />
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default ClientsCarousel;

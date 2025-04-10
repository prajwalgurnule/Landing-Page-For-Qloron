import React from "react";

const Mission = () => {
  return (
    <>
      <div className="bg-white">
        {/* Mission Section */}
        <section className="container min-h-[355px] flex mt-10 sm:mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-center mt-10 mb-10">
            {/* Image Section */}
            <div className="order-1 sm:order-2 relative">
              <div data-aos="slide-left" data-aos-delay="200">
                <img
                  src="../images/aboutImages/our-mission.jpg"
                  alt="Our Mission"
                  className="rounded-full h-72 w-72"
                  width="288" // Explicit width
                  height="288" // Explicit height
                />
              </div>
            </div>
            {/* Text Content Section */}
            <div className="space-y-5 order-2 sm:order-1 xl:pr-30">
              <h1
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-3xl sm:text-4xl font-semibold"
              >
                Our <span className="text-cyan-600">Mission</span>
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="400"
                className="text-slate-600 text-lg sm:text-xl"
              >
                Our mission is to empower businesses with cutting-edge digital
                solutions that drive growth and success. We strive to deliver
                exceptional value through our expertise, innovation, and
                commitment to excellence.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Mission;

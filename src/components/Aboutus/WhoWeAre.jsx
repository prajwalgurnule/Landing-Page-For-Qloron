import React from "react";

const WhoWeAre = () => {
  return (
    <>
      {/* Who We Are Section */}
      <div className="bg-gray-200">
        <section className="container min-h-[300px] flex mt-10 sm:mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-center mt-10 mb-10">
            {/* Image Section */}
            <div className="order-2 sm:order-1 relative">
              <div data-aos="slide-right" data-aos-delay="200">
                <img
                  src="../images/aboutImages/who-we-are.jpg"
                  alt="Who We Are"
                  className="rounded-full h-64 w-64"
                  width="256"  // Explicit width
                  height="256" // Explicit height
                />
              </div>
            </div>
            {/* Text Content Section */}
            <div className="space-y-5 order-2 sm:order-1 xl:pr-30 mb-7">
              <h1
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-3xl sm:text-4xl font-semibold"
              >
                Who <span className="text-cyan-600">We Are</span>
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="400"
                className="text-slate-600 text-lg sm:text-xl"
              >
                We are a team of dedicated professionals committed to delivering
                top-notch digital solutions to our clients. With a rich history
                of innovation and excellence, we have transformed numerous ideas
                into successful projects.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WhoWeAre;

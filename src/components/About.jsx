import React from "react";

const About = () => {
  return (
    <div className="py-20 bg-light-neutral-100 from-teal-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 item-center">
          <div>
            <h2 className="text-4xl lg:text-6xl font-bold text-primary font-nunito mb-8">
              Built for real life
            </h2>
            <p className="space-y-6 text-lg lg:text-xl text-secondary leading-relaxed ">
              {" "}
              Cooking shouldon't be complicated. These recipes come in under{" "}
              {""}
              <span className="text-primary font-bold ">30 Minutes </span>
              of active time, fit busy schedules, and taste good enough to
              repeat
            </p>
            <p className="space-y-6 text-lg lg:text-xl text-secondary leading-relaxed ">
              {" "}
              Wheter you're new to the kitchen or just eed fresh ideas, we've
              got you covered
            </p>
          </div>
          <div className="relative">
            <img
              src="./image/image1.jpg"
              alt=""
              className="relative w-full h-auto rounded-3xl shadwo-2xl transform hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

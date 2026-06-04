import React from "react";

const Hero = () => {
  return (
    <div className="container mx-auto px-4 py-4">
      <div className="px-4 py-15 flex flex-col items-center text-center font-nunito">
        <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold text-primary mb-6 ">
          Healty meals, zero fuss
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-10 max-2 leading-relaxed">
          {" "}
          Discover eight qucik, whole-food recipes that you can cook tonight -
          no precessed junk, no gueswork, simple, delicius, and healthy
        </p>
        <button className="bg-primary text-light-neutral-0 px-10 py-3.5 rounded-2xl text-lg sm:text-xl font-semibold hover:bg-secondary transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
          Star Exploring
        </button>

        <div className="mt-16 w-full">
          <img
            src="/image/hero.jpg"
            alt=""
            className="w-full h-170 object-cover  rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-white border-6"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

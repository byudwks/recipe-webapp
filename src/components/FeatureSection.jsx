import React from "react";
import { features } from "../context/feature.js";

const FeatureSection = () => {
  return (
    <div className="py-20 bg-light-neutral-100 font-nunito ">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-secondary mb-6">
          What you will get
        </h2>
        {/* feature grid  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* i will use map method */}
          {features.map((feature) => (
            <div className="my-10">
              <div className="flex flex-col space-y-4 text-center items-center">
                <div className="w-15 h-15 bg-white rounded-xl flex items-center justify-center my-10">
                  {feature.icon && (
                    <feature.icon className="w-12 h-12 object-contain hover:scale-105 transition-all duration-300 text-primary" />
                  )}
                </div>
                {/* feauter text */}
                <h3 className="text-primary text-3xl font-bold ">
                  {feature.title}
                </h3>
                <p className="text-secondary leading-relaxed text-xl">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;

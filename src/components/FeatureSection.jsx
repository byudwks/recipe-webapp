import React from "react";

const FeatureSection = () => {
  return (
    <div className="py-20 bg-light-neutral-100 font-nunito ">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
          What you will get
        </h2>
        {/* feature grid  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* i will use map method */}
          <div className="my-10">
            <div className="flex flex-col space-y-4 text-left">
              <div className="w-15 h-15 bg-white rounded-xl flex items-center justify-center my-10">
                <img
                  src=""
                  alt=""
                  className="w-12 h-12 object-contain hover:scale-105 transition-all duration-300"
                />
              </div>
              {/* feauter text */}
              <h3 className="text-primary text-3xl font-bold ">
                Feature Title
              </h3>
              <p className="text-secondary leading-relaxed text-xl">
                Feature Description
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;

import React from "react";

const CtaSection = () => {
  return (
    <div className="py-20 lg:py-32 bg-light-neutral-0 relative overflow-hidden">
      <div className="absolute top-10 left-0 w-96 h-96">
        <img
          src="./image/fork.svg"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute bottom-0 right-0 w-96 h-96 ">
        <img
          src="./image/knife.svg"
          alt=""
          className="w-full h-full object-contain text-primary rotate-90"
        />
      </div>
    </div>
  );
};

export default CtaSection;

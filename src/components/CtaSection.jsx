import React from "react";

const CtaSection = () => {
  return (
    <div className="py-20 lg:py-32 bg-orange-100 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center z-10">
        <h2 className="text-xl lg:text-6xl font-bold text-secondary mb-6">
          Ready to cook smarter ?
        </h2>
        <p className="text-xl lg:text-2xl text-primary mb-10 max-w-3xl mx-auto leading-relaxed">
          {" "}
          Hit the button, pick a recipe, and get dinner in the table-fast.
        </p>
        <button className="bg-primary text-light-neutral-0 px-10 py-3.5 rounded-2xl text-lg sm:text-xl font-semibold hover:bg-secondary transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
          Broswer Recipes
        </button>
      </div>
    </div>
  );
};

export default CtaSection;

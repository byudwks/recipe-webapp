import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-light-neutral-100 ">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden font-nunito">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold text-primary mb-6">
            Our Story
          </h1>
          <p className="text-xl text-gray-950 max-w-3xl mx-auto leading-relaxed mb-8">
            We believe that healthy eating shouldn't be complicated,
            time-consumsing, or boring, Our mision is to nutritious cooking
            accessible to everyone.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white font-nunito">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              Icons
            </div>
            <h3 className="text-3xl font-black text-primary">Stats Number</h3>
            <p className="text-gray-950">Stats Label</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-32 lg:bg-orange-100 font-nunito">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary">
              Why we start this journey
            </h2>
            <div className="space-y-6 text-lg text-gray-950 leading-relaxed mt-10">
              <p>
                It all began in a small kitchen where our founder, strugglin to
                belance a demanding career with healthy eating, realized that
                most "healthy" recipes were either too complcated or simply
                didn't taste good
              </p>
              <p>
                We set out to change that. Every recipe on out platfromis tasted
                in real kitchens by real peopke with busy lives
              </p>
              <p>
                Today, we're proud to elp thousands of people cook healthier
                meales without the stress -- provinf that goof food doesn't have
                to be complicated
              </p>
            </div>
          </div>
          <div className="ralative">
            <img
              src="/image/image-3.jpg"
              alt=""
              className="rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Value Section */}
      <section className="py-20 bg-white font-nunito">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary "> Our Values</h2>
          <div className="grid grid-cols-3 gap-8">
            {/* use map method */}
            <div className="bg-neutral-50 p-8 rounded-3xl shadow-md hover:shadow-lg transition">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                Icon
              </div>
              <h2 className="text-2xl font-bold text-primary ">Value Title</h2>
              <p className="text-gray-950 ">Value Description</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32 bg-neutral-50 font-nunito ">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold text-primary mb-10 ">
            Meet Our Team
          </h3>
          <div className="grid md:grid-cols-3 gap-10 ">
            {/* use map method */}
            <div className="group">
              <img
                src=""
                alt=""
                className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg mx-auto mb-4 "
              />
              <h3 className="text-2xl font-bold text-primary ">Member Name</h3>
              <p className="text-secondary">Member Role</p>
              <p className="text-gray-500">Member Bio</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

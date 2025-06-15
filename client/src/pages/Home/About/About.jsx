import React from "react";

const About = () => {
  return (
    <div className="px-4 py-12 text-center">
      <h2 className="text-6xl font-bold text-[#0A998F]">About</h2>

      <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
        Learn about our mission to drive sustainable coastal action through tech
        and community.
      </p>

      <div className="mt-10 space-y-6">
        <img
          src="./about.png"
          alt="Coastal Action 1"
          className="w-full max-w-6xl mx-auto h-auto rounded-md shadow-md object-cover object-center"
        />
        <img
          src="./about-quote.png"
          alt="Coastal Action 2"
          className="w-full max-w-6xl mx-auto h-auto rounded-md shadow-md object-cover object-center"
        />
      </div>
    </div>
  );
};

export default About;

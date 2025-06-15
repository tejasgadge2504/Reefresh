import LearnCard from '@/components/ui/learn-card';
import React from 'react'

const Learn = () => {
  return (
    <div className="main flex justify-center items-center">
      <div className="left h-full">
        <img src="./learn.png" alt="" className="object-center size-max" />
      </div>

      <div className="right">
        <div className="title text-6xl font-bold ">
          Learn by <span className="text-[#0A998F]">Doing</span>, <br />
          Not Reading.
        </div>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          Let’s make learning fun — teaching young minds to protect nature
          through interactive, engaging games.
        </p>
        <div className="cards mt-3">
          <LearnCard
            icon="./turtle.png"
            title="Save the Turtle - Tap to Remove Trash"
            description="Dodge the plastic and guide the turtle safely home—one clean wave at a time!"
          ></LearnCard>
          <LearnCard
            icon="./bulb.png"
            title="Eco Dilemma: Scenario Quiz"
            description="Choose wisely in real-world situations to test your sustainability smarts."
          ></LearnCard>
          <LearnCard
            icon="./clock.png"
            title="Pop the Right Step"
            description="Burst bubbles with the correct actions in a rapid-fire sustainability challenge!"
          ></LearnCard>
        </div>
      </div>
    </div>
  );
}

export default Learn
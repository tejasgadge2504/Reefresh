import ChangeCard from '@/components/ui/change-card';
import React from 'react'

const Change = () => {
  return (
    <div className="px-4 py-12 text-center object-center">
      <h2 className="text-6xl font-bold">
        Waves of <span className="text-[#0A998F]">Change</span>
      </h2>

      <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
        Real stories. Real people. Real impact—from sandy shores to shining
        smiles.
      </p>
      <div className="cards flex items-center gap-7 justify-center mt-6">
        <ChangeCard
          logo="./afrozShah.jpg"
          ngoName="Afroz Shah Foundation"
          desc="Pioneers of the world’s largest beach clean-up at Versova since 2015, removing over 40 million kg of plastic"
          beach="Versova Beach"
        ></ChangeCard>

        <ChangeCard
          logo="./afrozShah.jpg"
          ngoName="Afroz Shah Foundation"
          desc="Pioneers of the world’s largest beach clean-up at Versova since 2015, removing over 40 million kg of plastic"
          beach="Versova Beach"
        ></ChangeCard>

        <ChangeCard
          logo="./afrozShah.jpg"
          ngoName="Afroz Shah Foundation"
          desc="Pioneers of the world’s largest beach clean-up at Versova since 2015, removing over 40 million kg of plastic"
          beach="Versova Beach"
        ></ChangeCard>
      </div>
    </div>
  );
}

export default Change
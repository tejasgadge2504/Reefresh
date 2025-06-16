import CardMarket from '@/components/ui/card-market';
import React from 'react'

const Market = () => {
  return (
    <div className="px-4 py-12 text-center">
      <h2 className="text-6xl font-bold">
        Reefresh <span className="text-[#0A998F]">Marketplace</span>
      </h2>
      <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
        Shop sustainable, support local—eco-friendly products crafted by coastal
        communities.
      </p>
      <div className="flex items-center gap-7 justify-center mt-6">
        <CardMarket
          image="./tshirt.png"
          title="Eco-friendly Tshirts"
          desc="loremcdcdscdscsdcds"
        ></CardMarket>
        <CardMarket
          image="./tshirt.png"
          title="Eco-friendly Tshirts"
          desc="loremcdcdscdscsdcds"
        ></CardMarket>
        <CardMarket
          image="./tshirt.png"
          title="Eco-friendly Tshirts"
          desc="loremcdcdscdscsdcds"
        ></CardMarket>
      </div>
    </div>
  );
}

export default Market
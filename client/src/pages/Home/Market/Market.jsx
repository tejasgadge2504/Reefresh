import CardMarket from '@/components/card-market';
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
      <CardMarket image="./tshirt.png" title="Eco-friendly Tshirts" desc="loremcdcdscdscsdcds"></CardMarket>
    </div>
  );
}

export default Market
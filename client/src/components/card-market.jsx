import React from 'react'

const CardMarket = ({image,title,desc}) => {
  return (
    <div className="w-[280px] bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
    <div className=" p-4 flex items-center justify-center object-cover bg-gray-100">
      <img
        src={image}
        alt="Logo"
        className="h-auto object-cover"
      />
    </div>

    <div className="p-4 text-center">
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="text-[15px] text-gray-600 mt-2">
        {desc}
      </p>
      <button className='bg-gray-400 text-white'> Buy Now</button>
    </div>
  </div>
  )
}

export default CardMarket; 
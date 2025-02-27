import React from 'react'
// description: "Our signature spicy wings",
//     price: "Rs. 500",
//     image:
const Menu = ({item_data}) => {
  return ( 
      <div className=' h-80 w-80 overflow-hidden hover:shadow-xl transition-all ease-in-out'>
      {/* card */}
      <div className="card text-[#8f160d] w-64 h-56  flex flex-col gap-6  items-start">
      <img src={item_data.image} alt="" className="w-full " />
      <div className='flex flex-col items-start'>
      <h1 className='font-bold text-lg'>{item_data.name}</h1>
      <p className='font-normal text-sm'>{item_data.description}</p>
      </div>

      {/* bottom */}
      <div className='w-full flex justify-between'>
        <p className='text-base font-bold'>{item_data.price}</p>
        <button className='text-white text-sm bg-[#8f160d] px-2 rounded-2xl'>Add to cart</button>
      </div>
    </div>
    </div>
  );
};

export default Menu
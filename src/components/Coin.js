import React from 'react'

function Coin({name, image, symbol, price, marketCap, priceChangePercentage24h }) {
  return (
    <div className=' flex w-full border-b border-slate-400 py-3 hover:bg-slate-50 text-gray-600'>
        <img className='w-10 h-10 md:mx-2' src={image} alt={name} />
        <span className='mx-1 md:mx-2 p-2 w-20 font-bold '> {name} </span>
        <span className=' md:mx-2 p-2 w-20 text-indigo-600'> {symbol.toUpperCase()} </span>
        <span className='mx-2  md:mx-2 p-2 w-20'> ${price.toLocaleString()} </span>
        <span className={priceChangePercentage24h > 0 ? 'text-green-500 md:mx-2 p-2 w-20' : 'text-red-500 md:mx-2 p-2 w-20'  } > {priceChangePercentage24h.toFixed(2)} </span>
        <span className=' md:mx-2 p-2 w-fit'> ${marketCap.toLocaleString()} </span>
    </div>
  )
}

export default Coin
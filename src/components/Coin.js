import React from 'react'

function Coin({name, image, symbol, price, marketCap, priceChangePercentage24h }) {
  return (
    <div className=' flex w-full border-b border-slate-400 py-3'>
        <img className=' w-10 md:mx-2 items-center' src={image} alt={name} />
        <span className=' md:mx-2 p-2 w-20 md:w-32'> {name} </span>
        <span className=' md:mx-2 p-2 w-20'> {symbol.toUpperCase()} </span>
        <span className=' md:mx-2 p-2 w-20'> {price.toLocaleString()} </span>
        <span className=' md:mx-2 p-2 w-20'> {priceChangePercentage24h} </span>
        <span className=' md:mx-2 p-2 w-fit'> {marketCap.toLocaleString()} </span>
    </div>
  )
}

export default Coin
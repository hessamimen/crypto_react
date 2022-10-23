import React from 'react'

function Coin({name, image, symbol, price, marketCap, priceChangePercentage24h }) {
  return (
    <div className='flex'>
        <img className='border w-10 mx-2 items-center' src={image} alt={name} />
        <span className='border mx-1 p-2'> {name} </span>
        <span> {symbol.toUpperCase()} </span>
        <span> {price.toLocaleString()} </span>
        <span> {priceChangePercentage24h} </span>
        <span> {marketCap.toLocaleString()} </span>
    </div>
  )
}

export default Coin
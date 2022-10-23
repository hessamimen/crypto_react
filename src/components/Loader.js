import React from 'react'

//Gif
import spinner from '../assets/gif/Spin.gif'

function Loader() {
  return (
    <div>
        <img src={spinner} alt="Loading" />
        <h1>Loading ...</h1>

    </div>
  )
}

export default Loader
import React, {useEffect, useState}  from 'react';

//API
import { getCoin } from '../services/api';

function Landing() {

    const [coins, setCoins] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
           const data = await getCoin();
           setCoins(data)
        }
        fetchAPI();
    }, [])


  return (
    <>
        <input type="text" placeholder='Search...' />
        <div>
            {
                coins.map(coin => {
                   return <p key={coin.id}>{coin.name}</p>
                })
            }
        </div>
    </>
  )
}

export default Landing
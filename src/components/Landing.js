import React, {useEffect, useState}  from 'react';

//API
import { getCoin } from '../services/api';

//Components
import Loader from './Loader';
import Coin from './Coin';

function Landing() {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchAPI = async () => {
           const data = await getCoin();
           setCoins(data)
        }
        fetchAPI();
    }, [])

    const searchHandler = event => {
        setSearch(event.target.value)
    }

    const searchedCoines = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className=' max-w-screen-md mx-auto'>
    
        <input className='w-1/2 border-2 rounded-md px-2 mt-10' type="text" placeholder='Search...' value={search} onChange={searchHandler} />

        {
            !coins.length ? <Loader/> :
            
            <div className='bg-gray-200  border p-3 rounded-lg mx-auto mt-10 w-fit'>
                {
                    searchedCoines.map(coin => <Coin
                        key={coin.id}
                        name={coin.name}
                        image={coin.image}
                        symbol={coin.symbol}
                        price={coin.current_price}
                        marketCap={coin.market_cap}
                        priceChangePercentage24h={coin.price_change_percentage_24h}
                    />
                    )
                }
            </div>
        }
    </div>
  )
}

export default Landing
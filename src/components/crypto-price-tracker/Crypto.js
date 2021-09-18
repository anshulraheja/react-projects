import  {useState, useEffect} from 'react';
import axios from 'axios'
import Coin from './Coin';
import styles from './coin.module.css'
const URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h';

function App() {

  //array of all the row data 
  const [coins, setCoins] = useState([])

  //state variable for input box
  const [search, setSearch] = useState('')

  //fetching data from URL on page load
  useEffect(() => {
    axios.get(URL)
    .then(res => {
      setCoins(res.data)
    }).catch(error => alert('Error in fetching data. Try again!'));
  }, []);

  //setting search variable to input text
  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  }

  //filter table rows according to crypto name or sybmol input
  const coinList = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className={styles.coinApp}>
      <div className={styles.coinContainer}>
        <h1 className={styles.title}>Cryptocurrency Data Tracker</h1>
        <form>
          <input 
          type="text" 
          placeholder="Bitcoin" 
          className={styles.coinInput}
          onChange={handleChange} />
        </form>
      </div>
      <Coin coinList={coinList} />
    </div>
  );
}

export default App;

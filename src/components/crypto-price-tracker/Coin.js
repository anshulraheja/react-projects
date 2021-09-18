import React from 'react'
import styles from './coin.module.css'

const numToString = {
    style: "currency",
    currency: "INR"
}
const locales = "en-IN" // language format - Indian English

// component to display crypto coin based on user input text
const Coin = ({coinList}) => {
    return (
        <div className={styles.tableContainer}>
         <div className={styles.inner}>
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Symbol</th>
                    <th>Price</th>
                    <th>Price Change %</th>
                    <th>Volume</th>
                    <th>Market Cap</th>
                </tr>
            </thead>
            <tbody>
                {coinList.map((coin)=>{
                return(
                    <tr key={coin.id}>
                        <td><img src={coin.image} alt={coin.id}/></td>
                        <td>{coin.name}</td>
                        <td>{coin.symbol}</td>
                        <td>{coin.current_price.toLocaleString(locales,numToString)}</td>
                        <td>{coin.price_change_percentage_24h_in_currency < 0 ? 
                            ( <p style={{color:'red'}}>{coin.price_change_percentage_24h_in_currency.toFixed(2)}%</p>) : 
                            ( <p style={{color:'green'}}>{coin.price_change_percentage_24h_in_currency.toFixed(2)}%</p> )
                        }</td>
                        <td>{coin.total_volume.toLocaleString(locales,numToString)}</td>
                        <td>{coin.market_cap.toLocaleString(locales,numToString)}</td>
                    </tr>                
                )
                })}
            </tbody>
        </table>
        </div>   
        </div>
    )
}

export default Coin

import { createContext, useEffect, useState } from "react";
//create context

export const CoinContext = createContext();

const CoinContextProvider = (props) => {

    const [allCoin, setAllCoin] = useState([]);
    const [currency, setCurrency] = useState({
        name: "usd",
        symbol: "$"
    })

//fetch coin data from api
    const fetchAllCoin = async() => {
    const options = {
        method: 'GET',
        headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-BoJdPdi9DetjgJK86NDG3pQ2' }
    };

    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
        .then(res => res.json())
        .then(res => setAllCoin(res))
        .catch(err => console.error(err));
}

useEffect(() => {
    fetchAllCoin();
}, [currency])

//pass value
const contextValue = {
    allCoin, currency, setCurrency
}

return (
    <CoinContext.Provider value={contextValue}>
        {props.children}
    </CoinContext.Provider>
)
}

export default CoinContextProvider;
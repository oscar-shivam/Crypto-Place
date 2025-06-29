import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'
import { useSearchParams } from 'react-router-dom'

const LineChart = ({historicalData}) => {

const [data, setData] = useState([["Date", "Prices"]])

useEffect(()=>{
    let dataCopy = [["Date", "Prices"]];
    if(historicalData.prices) {
        historicalData.prices.map((item)=>{
            dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0, -5)}`,
        item[1]])   //10/05/2025 we get here date and price and push into dataCopy
        })
        setData(dataCopy);
    }
}, [historicalData])

  return (
    <Chart 
        chartType='LineChart'
        data={data}
        height="100%"
        legendToggle
    />
  )
}

export default LineChart
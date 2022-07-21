import React, {useContext, useEffect, useState} from "react";
import { ChartContext } from "../Pages/Analytics";
import { fetchData } from "../Utils/fetchs";
import { Chart } from "react-google-charts";
import "../CSS/ChartMaker.css";


function  ChartMaker () {
    const [chartData, setChartData] = useState([ , ])
    const { chart } = useContext(ChartContext)
    const options = {
        curveType: "function",
        legend: { position: "bottom" },
      };
    function getChartUrl (name){return "https://api.coingecko.com/api/v3/coins/" + name + "/market_chart?vs_currency=ars&days=30&interval=daily"} 
    

    
    useEffect(() => {

        fetchData(getChartUrl(chart))
        .then((res) => {
          setChartData(res)
          })
        .catch((e) => {console.log(e + "fetch gráfico analytics") })
        console.log(chartData)
    
        
    }, [chart])
    

    return ( <div className={chart? "" : "hidden"}>
        <Chart
          chartType="LineChart"
          data={chartData}
          options={options}
          className="analyticsChart"
        />
    </div> );
}

export default ChartMaker  ;
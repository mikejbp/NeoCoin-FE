import React, { useState, useEffect, useContext} from "react";
import logoHome from "../../Assets/logoHome.svg";
import "../../CSS/PrivateHome.css";
import UserHomeCard from "../../Components/UserHomeCard";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TitleContext } from "../../Components/UserLayout";
import { fetchGet, fetchData } from "../../Utils/fetchs.js";



const PrivateHome = () => {
  const {setTitle} = useContext(TitleContext)
  setTitle("Home")
  const auth = useSelector((state) => state.auth);
  const [coinsName, getCoinsName] = useState([])
  const [coinOne, getCoinOne] = useState([])
  const [coinTwo, getCoinTwo] = useState([])
  const [coinThree, getCoinThree] = useState([])
  const [coinOneChart, getCoinOneChart] = useState([])
  const [coinTwoChart, getCoinTwoChart] = useState([])
  const [coinThreeChart, getCoinThreeChart] = useState([])
  
  const APITrending = "https://api.coingecko.com/api/v3/search/trending"//Url de monedas mas populares.
  //Url de moneda particular con precios y variacion en ars.
  function getUrl (coinId){return "https://api.coingecko.com/api/v3/simple/price?ids=" + coinId + "&vs_currencies=ars&include_market_cap=false&include_24hr_vol=false&include_24hr_change=true"}
  //Url de gráficos, 3 array de objetos, para generar en el mejor de los casos y si todo sale bien, un gráfico con 3 lineas.
  function getChartUrl (coinId){return "https://api.coingecko.com/api/v3/coins/" + coinId + "/market_chart?vs_currency=ars&days=30&interval=daily"} 

  useEffect (() => {
    fetchGet(APITrending)// Primer fetch de monedas populares
  .then((res) => {

      //Monedas populares, sus ids y nombres

      getCoinsName(res.coins.map((data) => data.item).slice(0-3))

      //Nombres, precios y variaciones de las 3 monedas mas populares

      fetchGet(getUrl(res.coins.map((data) => data.item).slice(0-3)[0].id))
      .then((res1) => {
        getCoinOne(res1)
        })
      .catch((e) => {console.log(e + "fetch primer Coin") })

      fetchGet(getUrl(res.coins.map((data) => data.item).slice(0-3)[1].id))
      .then((res2) => {
        getCoinTwo(res2)
        })
      .catch((e) => {console.log(e + "fetch segundo Coin") })

      fetchGet(getUrl(res.coins.map((data) => data.item).slice(0-3)[2].id))
      .then((res3) => {
        getCoinThree(res3)
        })
      .catch((e) => {console.log(e + "fetch tercer Coin") })

      //Requests de los gráficos, para armar con chart de google

      fetchData(getChartUrl(res.coins.map((data) => data.item).slice(0-3)[0].id))
      .then((resc1) => {
        getCoinOneChart(resc1)
        })
      .catch((e) => {console.log(e + "fetch primer chart") })

      fetchData(getChartUrl(res.coins.map((data) => data.item).slice(0-3)[1].id))
      .then((resc2) => {
        getCoinTwoChart(resc2)
        })
      .catch((e) => {console.log(e + "fetch segundo chart") })

      fetchData(getChartUrl(res.coins.map((data) => data.item).slice(0-3)[2].id))
      .then((resc3) => {
        getCoinThreeChart(resc3)
        })
      .catch((e) => {console.log(e + "fetch tercer chart") })
      
      })
    .catch((e) => {
      
    })
  }, [])

const options = {
    curveType: "function",
    legend: { position: "bottom" },
  };

  if (auth.token == null) return <Navigate to="/userLogin" />;

  return (
    
    <div className="PrivateHome">
      <h3 className="privateHomeTitle">Tendencias</h3>
      <div className="privateHomeContainer">
       <UserHomeCard cryptoCoin={coinsName[0]?.symbol} price={coinOne[Object.keys(coinOne)[0]]?.ars} variation={coinOne[Object.keys(coinOne)[0]]?.ars_24h_change.toFixed(3)} optionsCard={options} dataCard={coinOneChart}/>
        <UserHomeCard cryptoCoin={coinsName[1]?.symbol} price={coinTwo[Object.keys(coinTwo)[0]]?.ars} variation={coinTwo[Object.keys(coinTwo)[0]]?.ars_24h_change.toFixed(3)} optionsCard={options} dataCard={coinTwoChart}/>
        <UserHomeCard cryptoCoin={coinsName[2]?.symbol} price={coinThree[Object.keys(coinThree)[0]]?.ars} variation={coinThree[Object.keys(coinThree)[0]]?.ars_24h_change.toFixed(3)} optionsCard={options} dataCard={coinThreeChart}/>
      </div>
      <h3 className="title">Noticias</h3>
      <h4 className="subtitle">Proximamente......</h4>
      <div className="containerFirst">
        <div className="containerPrivateHome">
          <div>
            <p className="news">NoCountryCoin</p>
            <img className="image" src={logoHome} alt="No country Logo" />
          </div>
          <div>
            <p className="news">La Moneda para los </p>
            <p className="news"> desarrolladores</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateHome;

import React, { useState, useEffect } from 'react';
import '../../CSS/SwapCard.css';
import axios from "axios";
import { url, setHeaders } from "../../api/index.js";
import swal from "sweetalert";


const SwapCard = () => {
  const [coins, setCoins] = useState([]);
  const [prices, setPrices] = useState([]);
  const [exchangePrice, setExchangePrice] = useState(1);
  const [val, setVal] = useState("");
  const [valConvert, setValConvert] = useState("");
  const [coinInput, setCoinInput] = useState("btc");
  const [coinSelected, setCoinSelected] = useState("btc");
  const [selectedCoinUpPrice, setSelectedCoinUpPrice] = useState(1)
  const [selectedCoinDownPrice, setSelectedCoinDownPrice] = useState(1)
  const [thirdVal, setThirdVal] = useState("")
  const [inverted, setInverted] = useState(true)
  const showAlert = () => {
    swal({
      title: "Fondos insuficientes",
      text: "No posee suficientes " + coinInput.toUpperCase() + ". Si crees que esto es un error, por favor comunícate a este E-mail: correo@correo.com",
      icon: "info",
      button: "Aceptar",
      timer: "3500",
    });
  };
  const updatedWallet = async (updatedWallet, id) => {
    return axios
      .put(`${url}/wallet/${id}`, updatedWallet, setHeaders())
      .catch((error) => {
        console.log(error);
      });
  };



  
  useEffect(() => {
    const consultarAPI = async() => { 
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false';
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    const arrayCriptos = await resultado.map(cripto => (
      cripto.symbol
    ))
    const arrayPrices = await resultado.map(cripto => (
      cripto.current_price
    ))
      setCoins(arrayCriptos);
      setPrices(arrayPrices)
  };
    consultarAPI()
  },[])
  
  const [datos, setDatos] = useState({});

  const getData = async () => {
    try {
      const res = await axios.get(`${url}/wallet`, setHeaders());
      setDatos(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  
  useEffect(() => {
    getData();
  }, []);
  let wallet = datos

  let newWallet = { };
console.log(datos)
function submit (){ 
  if((wallet[0][coinInput] - val)>0){ 
  
    return(
      wallet[0][coinInput] = wallet[0][coinInput] - val,
      wallet[0][coinSelected] = wallet[0][coinSelected] + valConvert,
      console.log(wallet),
    newWallet = { ...wallet[0] },
    delete newWallet["_id"],
    delete newWallet["__v"],
    updatedWallet(newWallet, wallet[0]._id).then(() =>
      setDatos(wallet)))}
  else{showAlert()}
}


  useEffect(() => {
    const setCoinPriceUp = async() => { 
    if (coinInput === "btc"){
      setSelectedCoinUpPrice( prices[0])
    }
    if (coinInput === "eth"){
      setSelectedCoinUpPrice( prices[1])
    }
    if (coinInput === "usdt"){
      setSelectedCoinUpPrice( prices[2])
    }
    if (coinInput === "bnb"){
      setSelectedCoinUpPrice( prices[3])
    }
    if (coinInput === "usdc"){
      setSelectedCoinUpPrice( prices[4])
    }
  };
    setCoinPriceUp()
   },[coinInput, prices])

   useEffect(() => {
    const setCoinPriceSelected = async() => { 
    if (coinSelected === "btc"){
      setSelectedCoinDownPrice( prices[0])
    }
    if (coinSelected === "eth"){
      setSelectedCoinDownPrice( prices[1])
    }
    if (coinSelected === "usdt"){
      setSelectedCoinDownPrice( prices[2])
    }
    if (coinSelected === "bnb"){
      setSelectedCoinDownPrice( prices[3])
    }
    if (coinSelected === "usdc"){
      setSelectedCoinDownPrice( prices[4])
    }
  };
  setCoinPriceSelected()
   },[coinSelected, prices])
   
   useEffect(() => {setExchangePrice(selectedCoinUpPrice/selectedCoinDownPrice) },[selectedCoinDownPrice, selectedCoinUpPrice])
   useEffect(() => {setVal(thirdVal) },[thirdVal])
   useEffect(() => {setValConvert(thirdVal*exchangePrice) },[thirdVal, exchangePrice])
   useEffect(() => {     
    setCoinInput(coinSelected);
    setCoinSelected(coinInput);
    setValConvert(val)
    setThirdVal(valConvert)}, [inverted])

  function invert (){setInverted(!inverted)}

  return (
      <>
        <section className='container1st' >
            <div className='containerOne'>
              <section className='sectionOne' >
                <h1>Swap</h1>
                <p>
                  Canjea tus criptomonedas en un instante
                </p>
              </section>

              <hr/>

              <section className='sectionCoinButton' >
                <button className='hover:opacity-100 active:animate-bounce'>
                  <select value={coinInput}
                  onChange={e => setCoinInput((e.target.value))}>
                    {coins.map((cripto) => (
                    <option value={cripto}>
                      {cripto.toUpperCase()}
                    </option>
                    ))};
                  </select>
                </button>
              </section>

              <section className='sectionLabel'>
                <label>
                <input 
                type="text" 
                name='amount'
                inputMode='decimal'
                pattern='^[0-9]*[.,]?[0-9]*$'
                autoComplete='off'
                placeholder="0.0"
                minLength={1}
                maxLength={79} 
                value={thirdVal}
                onChange={(e) => {setThirdVal((v) => (e.target.validity.valid ? e.target.value : v))}
                
                } />
                </label>
              </section>

              <section className='sectionButtonInvert'>
                <button onClick={invert}   className="hover:bg-[#4A88C4] active:bg-[#1A69B4] active:animate-bounce border-solid border-transparent bg-[#C4C4C4]">
                  <i className='fas fa-arrow-down'></i>
                </button>
              </section>

              <section className='sectionCoinButton' >
                <button className='hover:opacity-50 active:animate-bounce'>
                  <select value={coinSelected} onChange={e => setCoinSelected((e.target.value))}>
                  {coins.map((cripto) => (
                  <option value={cripto}>{cripto.toUpperCase()}</option>
                  ))};
                  </select>
                </button>
              </section>

                <section className='sectionLabel'>
                  <label>
                    <input 
                    type="text" 
                    name='amount' 
                    inputMode='decimal'
                    pattern='^[0-9]*[.,]?[0-9]*$'
                    autoComplete='off'
                    placeholder="0.0"
                    minLength={1}
                    maxLength={79} 
                    value={valConvert}
                    readOnly
                    />
                  </label>
                </section>

                <section className="sectionButtonExchange" >
                  <button onClick={submit} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#1A69B4] duration-300 active:opacity-75">
                  Intercambiar
                </button>
              </section>
            </div> 

        </section>
        </>
  );
};

export default SwapCard;

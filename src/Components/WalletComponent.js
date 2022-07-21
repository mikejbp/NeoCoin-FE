import axios from "axios";
import { useEffect, useState } from "react";
import "../CSS/WalletComponent.css";
import { setHeaders, url } from "../api";

const Wallet = ({ datos, setDatos }) => {
  const [coins, setCoins] = useState([]);
  const [inputUsdt, setInputUsdt] = useState(0);

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=ars&order=market_cap_desc&per_page=10&page=1"
      );
      setCoins(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  let walletFunding = datos;
  console.log(walletFunding);
  console.log(datos);

  const updateWallet = (updatedWallet, id) => {
    return axios
      .put(`${url}/wallet/${id}`, updatedWallet, setHeaders())
      .catch((error) => {
        console.log(error);
      });
  };

  const onButtonClick = (e) => {
    e.preventDefault();
    walletFunding[0].usdt =
      parseInt(inputUsdt) + parseInt(walletFunding[0].usdt);
    setInputUsdt(0);
    const newWallet = { ...walletFunding[0] };
    delete newWallet["_id"];
    delete newWallet["__v"];
    updateWallet(newWallet, walletFunding[0]._id).then(() =>
      setDatos(walletFunding)
    );
  };

  const addUsdt = (e) => {
    setInputUsdt(e.target.value);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(walletFunding);
  console.log(datos);

  return (
    <div className="walletContainer">
      <table>
        <thead className="walletHead">
          <tr>
            <th>Moneda</th>
            <th>Balance</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="walletCoinColumn" id="firstRow">
              <div></div>
            </td>
            <td className="walletBalance">
              <div className="walletBalanceAmount" id="walletFunding">
                Fondear Wallet
              </div>
            </td>
            <td>
              <button id="walletPesosButton">Comprar USDT</button>
            </td>
          </tr>
          {coins.map((row) => {
            return datos[0] &&
             datos[0].hasOwnProperty(row.symbol) ? (
              <tr className="walletBody">
                <td className="walletCoinColumn" id="walletCoins">
                  <div className="walletCoinColumnImg">
                    <img src={row.image} alt="coin logo" />
                  </div>
                  <div className="walletCoinColumnName">{row.name}</div>
                </td>
                <td className="walletBalance">
                  <div>{(datos[0][row.symbol])}</div>
                  <div id="walletBalanceAmount">
                    = ${datos[0][row.symbol] * row.current_price}
                  </div>
                </td>
                <td>
                  <button>Swap {row.symbol.toUpperCase()}</button>
                </td>
              </tr>
            ) : null;
          })}
        </tbody>
      </table>
      <div className="buyPesos">
        <form>
          <input
            type="number"
            placeholder="Ingrese monto"
            onChange={addUsdt}
            value={inputUsdt}
          />
          <button onClick={onButtonClick}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Wallet;

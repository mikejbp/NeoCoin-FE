import React from "react";
import CoinRow from "./CoinRow.js";

const titles = [
  "Coin",
  "Name",
  "Symbol",
  "Price Change",
  "24h Volume",
  "Total Volume",
];

const TableCoins = ({ coins, search }) => {
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  if (!coins) return <div>no coins</div>;

  return (
    //
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className=" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
          <tr>
            {titles.map((title, i) => (
              <th key={i} scope="col" class="px-6 py-3">
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="">
          {filteredCoins.map((coin, index) => (
            <CoinRow key={coin.id} coin={coin} index={index + 1}/>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableCoins;

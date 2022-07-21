import React, { useContext } from "react";
import { TriangleUpIcon, TriangleDownIcon } from "@chakra-ui/icons";
import { ChartContext } from "../Pages/Analytics";



const CoinRow = ({ coin, index }) => {
  const { setChart } = useContext(ChartContext)

  return (

    <tr  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" >
      <th
        scope="row"
        class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
      >
        <img src={coin.image} alt="" className=" rounded-full w-6 block " />
      </th>
      <td class="px-6 py-4" >{coin.name} <br/><button className="" onClick={() => setChart(coin.id)}>Gráfico</button></td>
      <td class="px-6 py-4">{coin.symbol.toUpperCase()}</td>
      <td class="px-6 py-4">
        ${coin.total_volume.toLocaleString()}
        <span class=" mx-3">
          {coin.price_change_percentage_24h > 0 ? (
            <TriangleUpIcon color={"green"} w={20} h={20} />
          ) : (
            <TriangleDownIcon color="red" w={20} h={20} />
          )}
        </span>
      </td>
      <td class="px-6 py-4">{coin.price_change_percentage_24h}</td>
      <td class="px- py-4">${coin.total_volume.toLocaleString()}</td>
    </tr>
  );
};

export default CoinRow;

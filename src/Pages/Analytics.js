import React, { createContext, useState } from "react";
import SearchCoin from "../Components/SearchCoin";
import ChartMaker from "../Components/ChartMaker";

export const ChartContext = createContext();

export default function Analytics() {
  const[chart, setChart] = useState()
  return (
    <>
      <ChartContext.Provider value= {{chart, setChart}}>
        <ChartMaker />
        <SearchCoin />
      </ChartContext.Provider>
    </>
  );
}

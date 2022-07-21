import React, { useState, useEffect } from "react";
import TableCoins from "./TableCoins";
import axios from "axios";
const SearchCoin = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=ars&order=market_cap_desc&per_page=50&page=1&sparkline=false"
      );
      setCoins(res.data);
      console.log(res.data);
      const options = {
        method: "GET",
        url: "https://investing-cryptocurrency-markets.p.rapidapi.com/coins/search",
        params: { string: "bit", time_utc_offset: "28800", lang_ID: "1" },
        headers: {
          "X-RapidAPI-Host": "investing-cryptocurrency-markets.p.rapidapi.com",
          "X-RapidAPI-Key":
            "dcfa1cdcfdmsh91fd95a9752ef5bp147594jsneb236564b0b1",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="border-4 ">
      <div className="bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6 min-h-screen  ">
        <form class="group relative w-1/2 m-auto">
          <svg
            width="20"
            height="20"
            fill="currentColor"
            class="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            />
          </svg>
          <input
            className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full  text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
            type="text"
            aria-label="Filter projects"
            placeholder="Search a Coin"
            autoFocus
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        <TableCoins coins={coins} search={search} />
      </div>
    </div>
  );
};

export default SearchCoin;

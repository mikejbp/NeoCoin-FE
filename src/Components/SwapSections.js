import React from 'react'

const SectionSwap = () => {
  return (
    <div className="w-full h-full p-20 gap-10 grid grid-flow-col auto-col-max lg:auto-cols-min md:auto-rows-min">
      <div className="bg-[#EEEEEE] w-[36rem] rounded-2xl flex flex-col flex-nowrap">
        d

      </div>


      <div className="bg-[#EEEEEE] w-80 rounded-2xl flex flex-col flex-nowrap">
        <h1 className="text-center font-semibold text-3xl text-[#4A88C4] p-2">
          Swap
        </h1>
        <p className="flex justify-center leading-6 text-[#4A88C4] pb-2 text-xs">
          Canjea tus criptomonedas en un instante
        </p>
        <hr className="border-y-blue-500" />
        <button className="flex mx-4 mt-2 hover:opacity-50 active:animate-bounce">
          <div className="font-semibold flex justify-start w-6 mt-4">
            <img
              src={'https://img.icons8.com/color/344/4a90e2/tether--v2.png'}
              alt="USDT-Tether"
            />
            <div className="font-bold mx-1">USDT</div>
            <img
              className="item-center"
              src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg"
              alt="down-arrow"
            />
          </div>
        </button>
        <label>
          <div className="px-4 py-2 flex justify-center">
            <input
              className="p-4 w-full rounded-2xl text-right bg-[#C4C4C4]"
              type="text"
              placeholder="0.0"
              inputmode="decimal"
            />
          </div>

          <div className="py-2 flex justify-center ">
            <button className="hover:bg-[#4A88C4] active:bg-[#1A69B4] active:animate-ping w-8 border-solid border-transparent bg-[#C4C4C4] border-8 rounded-3xl">
              <img
                src="https://cdn-icons-png.flaticon.com/512/159/159666.png"
                alt="Invert-coins"
              />
            </button>
          </div>

          <button className="flex mx-4 mt-2 hover:opacity-50 active:animate-bounce">
            <div className="font-semibold flex justify-start w-6">
              <img
                src="https://images.vexels.com/media/users/3/144837/isolated/lists/40f189daa5c0279718484ca5f5569f78-icono-de-bitcoin.png"
                alt="BTC-Bitcoin"
              />
              <div className="font-bold mx-1">BTC</div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg"
                alt="down-arrow"
              />
            </div>
          </button>
        </label>
        <div className="">
          <label clasName="">
            <div className="px-4 py-2 flex justify-center">
              <input
                className="p-4 w-full rounded-2xl text-right bg-[#C4C4C4]"
                type="text"
                placeholder="0.0"
                inputmode="decimal"
              />
            </div>
          </label>
        </div>
        <div className="flex justify-center p-10">
          <button className="py-3 px-12 rounded-3xl font-semibold text-[#FDF5E6] mt-1 bg-[#4A88C4] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#1A69B4] duration-300 active:opacity-75">
            Intercambiar
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionSwap;

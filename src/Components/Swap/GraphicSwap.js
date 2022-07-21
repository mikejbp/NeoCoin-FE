import React from 'react'
import imgBTC from '../../Assets/btc-icon.svg'
import imgUSDT from '../../Assets/usdt-icon.svg'
import '../../CSS/GraphicSwap.css'

const GraphicSwap = () => {
  return (
  <aside className='containerP'  >
  <div className='containerO'>

        <section className='sectionCoinsCompare'>
          <img src={imgBTC} alt='BTC-icon'  />
          <img src={imgUSDT} alt='USDT-icon' />
          <span>BTC/USDT</span>
        </section>

        <section className='sectionHistory'>
          <button className='transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 '>
            <span>24H</span>
          </button>
          <button className='transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 '>
            <span>1W</span>
          </button>
          <button className='transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 '>
            <span>1M</span>
          </button>
        </section>

        <section className='sectionPrice'>
            <h1 >$39,711.00</h1>
            <span>BTC/USDT</span>
            <span>-1954.970 (-3.86%)</span>
        </section>

        <section className='sectionGraphic'>
        <div><br />
        <br /><br />
        <br /><br />
        <br /><br />
        <br /><br />
        <br />
          </div>
        </section>
      </div>
    </aside>
  )
}

export default GraphicSwap
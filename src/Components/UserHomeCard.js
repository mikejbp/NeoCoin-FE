import React from "react";
import "../CSS/UserHomeCard.css";
import { Chart } from "react-google-charts";

function UserHomeCard(props) {
  const cryptoCoin = props.cryptoCoin;
  const price = props.price;
  const variation = props.variation;
  const dataCard = props.dataCard;
  const optionsCard = props.optionsCard;
  return (
    <div className="UserCardHome">
      <h2 className="userCardTitle">{cryptoCoin}</h2>
      <div className="userCardContainer">
        <h3 className="userCardPriceTag">Price</h3>
        <h3 className={(variation > 0 )? "userCardVariation userCardVariationGreen" : "userCardVariation userCardVariationRed" }>{variation}</h3>
      </div>
      <h2 className="userCardPrice">{price}</h2>
      <div>
        <Chart
          chartType="LineChart"
          width="100%"
          height="100%"
          data={dataCard}
          options={optionsCard}
        />
      </div>
    </div>
  );
}

export default UserHomeCard;

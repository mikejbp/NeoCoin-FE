import React from "react";
import TextImage from "../Components/TextImage";
import "../CSS/Home.css";
import img1 from "../Assets/pngegg.png";
import img2 from "../Assets/securuty.png";
import img3 from "../Assets/homeFoto.png";
import img4 from "../Assets/dataAnalytics.png";

export default function Home() {
  const text1 = "NeoCoin la mejor manera de comprar cripto";
  const text2 = "Crea tu propia billetera virtual con la mejor seguridad";
  const text3 =
    "Somos un equipo comprometido con garantizar la seguridad de tus criptos y para que tengas la mejor experiencia";
  const text4 =
    "Tenemos la mejor informacion del movimiento y cambio del mercado de criptos";

  return (
    <div className="Home">
      <TextImage
        img={img1}
        text={text1}
        isImgLeft={false}
        button="BUY CRIPTO"
        link="/private/swap"
      />
      <TextImage
        img={img2}
        text={text2}
        isImgLeft={true}
        button="WALLET"
        link="/private/wallet"
      />

      <TextImage
        img={img3}
        text={text3}
        isImgLeft={false}
        button="CONOCE A NUESTRO EQUIPO"
        link="/aboutUs"
      />

      <TextImage
        img={img4}
        text={text4}
        isImgLeft={true}
        button="ANALITYCS"
        link="analytics"
      />
    </div>
  );
}

import React from "react";
import UserCard from "./UserCard";
import imgPablo from "../Assets/pablovyeira.png";
import imgPedro from "../Assets/pedroacosta.png";
import imgJulian from "../Assets/julianmarc.jpg";
import imgMartin from "../Assets/martincastro.jpg";
import imgMike from "../Assets/miguelbriceno.jpg";
import imgEdu from "../Assets/edufalcon.webp";
export const SliderMobil = () => {
  return (
    <div className="snap-x flex w-full h-full sm:hidden gap-6 overflow-x-auto sm:overflow-x-hidden absolute pt-20 sm:">
      <div className="ml-4 shrink-0 snap-center overflow-hidden ">
        <UserCard
          dev={"FULLSTACK DEVELOPER"}
          text={"La comunicación y el trabajo en equipo es fundamental para llevar a cabo un proyecto"}
          imageUrl={imgPedro}
          name={"Pedro Acosta"}
        />
        {/* <-------------- 1  */}
      </div>
      <div className="ml-2 shrink-0 snap-center overflow-hidden">
        <UserCard
          dev={"FULLSTACK UI/UX"}
          text={"Dedicación, constancia y organización son claves para el éxito del proyecto"}
          imageUrl={imgPablo}
          name={"Pablo Vieyra"}
        />
        {/* <-------------- 2  */}
      </div>
      <div className="ml-2 shrink-0 snap-center overflow-hidden">
        <UserCard
          dev={"FULLSTACK TESTER"}
          text={"Un buen desarrollo y buena estética hacen brillar cualquier proyecto"}
          imageUrl={imgJulian}
          name={"Julian Marc"}
        />
        {/* <-------------- 3  */}
      </div>
      <div className="ml-2 shrink-0 snap-center overflow-hidden">
        <UserCard
          dev={"FULLSTACK DEVELOPER"}
          text={"Aprender de otros desarrolladores es un privilegio que muy pocos valoran"}
          imageUrl={imgMartin}
          name={"Martín Castro"}
        />
        {/* <-------------- 4  */}
      </div>
      <div className="ml-2 shrink-0 snap-center overflow-hidden">
        <UserCard
          dev={"FRONTEND DEVELOPER"}
          text={"Estar en un gran equipo de trabajo hace que queramos esforzarnos cada día"}
          imageUrl={imgMike}
          name={"Miguel Briceño"}
        />
        {/* <-------------- 5  */}
      </div>
      <div className="ml-2 shrink-0 snap-center overflow-hidden">
        <UserCard
          dev={"FULLSTACK DEVELOPER"}
          text={"Da lo mejor de ti en cada asignación, por muy fácil o difícil que resulte"}
          imageUrl={imgEdu}
          name={"Edu Falcón"}
        />
        {/* <-------------- 6  */}
      </div>
    </div>
  );
};
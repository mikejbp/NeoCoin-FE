import React, { useState, useEffect } from "react";
import UserCard from "../Components/UserCard";
import imgPablo from "../Assets/pablovyeira.png";
import imgPedro from "../Assets/pedroacosta.png";
import imgJulian from "../Assets/julianmarc.jpg";
import imgMartin from "../Assets/martincastro.jpg";
import imgMike from "../Assets/miguelbriceno.jpg";
import imgEdu from "../Assets/edufalcon.webp";
import imgLinkedIn from "../Assets/linked-in-alt.svg"
import imgGithub from "../Assets/github-dark.svg"
import imgSlider from "../Assets/imgSlider.png";
import "../CSS/SliderCard.css"

import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";


export default function SliderCard() {
  const [next, setNext] = useState(1);
  // cada 4 segundos cambia el valor next
  useEffect(() => {
    const interval = setInterval(() => {
      if (next === 3) {
        setNext(1);
      } else {
        setNext(next + 1);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [next]);

  console.log(next);
  
  const changeNext = () => {
    if (next === 3) {
      setNext(1);
    } else {
      setNext(next + 1);
    }
  };
  
  const changeBack = () => {
    if (next === 1) {
      setNext(3);
    } else {
      setNext(next - 1);
    }
  };

  console.log(next);
  return (

      <div className="relative pt-8 shadow-2xl rounded-3xl ">

        <h1 className="text-[#1A69B4] font-bold text-lg sm:text-4xl text-center px-4 pb-[5%] ">
          ¿Quiénes son los integrantes de nuestro equipo?
        </h1>

        {/* sm:max esto se ejecuta cuando las pantalla eas grande*/}
        <div className="flex flex-col  sliderCard items-center gap-6 pb-12">
          <div className="md:absolute md:left-[70%] md:inset-y-1/4 ">
            <button
              onClick={changeBack}
              className=" text-[#1A69B4] font-bold rounded-full"
            >
              <ArrowBackIcon mt={30} w={30} h={30} boxSize={80} />
            </button>
            {/* boton de back */}
            <button
              onClick={changeNext}
              className=" text-[#1A69B4] font-bold rounded-full"
            >
              <ArrowForwardIcon mt={30} w={30} h={30} boxSize={80} />
            </button>
          </div>
          {/* las primeras cards */}
          <div
            className={
              next === 1 ? "md:self-start md:ml-[9%] xl:ml-[25%]" : "hidden"
            }
          >
            <UserCard
              dev={"FULLSTACK UI/UX"}
              text={
                "Dedicación, constancia y organización son claves para el éxito del proyecto"
              }
              imageUrl={imgPablo}
              name={"Pablo Vieyra"}
              linkedIn={<a href="https://www.linkedin.com/in/pablo-vieyra/" target="_blank" rel="noreferrer noopener"><img alt='linkedIn' src={imgLinkedIn} width="25" /></a>}
              github={<a href="https://github.com/pabloVieyra" target="_blank" rel="noreferrer noopener"><img alt='Github' src={imgGithub} width="30" /></a>}
            />
            {/* <-------------- 1  */}
          </div>
          <div className={next === 1 ? "md:self-end xl:mr-[25%] md:mr-[9%]" : "hidden"}>
            <UserCard
              dev={"FULLSTACK DEVELOPER"}
              text={
                "La comunicación y el trabajo en equipo es fundamental para llevar a cabo un proyecto"
              }
              imageUrl={imgPedro}
              name={"Pedro Acosta"}
              linkedIn={<a href="https://www.linkedin.com/in/pevacosta/" target="_blank" rel="noreferrer noopener"><img alt='linkedIn' src={imgLinkedIn} width="25" /></a>}
              github={<a href="https://github.com/Yandalar"><img alt='Github' src={imgGithub} width="30" /></a>}
            />
            {/* <-------------- 2  */}
          </div>
          {/* las segundas cards */}
          <div
            className={
              next === 2 ? "md:self-start md:ml-[9%] xl:ml-[25%]" : "hidden"
            }
          >
            <UserCard
              dev={"FULLSTACK DEVELOPER"}
              text={
                "Aprender de otros desarrolladores es un privilegio que muy pocos valoran"
              }
              imageUrl={imgMartin}
              name={"Martín Castro"}
              linkedIn={<a href="https://www.linkedin.com/in/m-l-castro/" target="_blank" rel="noreferrer noopener"><img alt='linkedIn' src={imgLinkedIn} width="25" /></a>}
              github={<a href="https://github.com/mlcas" target="_blank" rel="noreferrer noopener"><img alt='Github' src={imgGithub} width="30" /></a>}
            />
            {/* <-------------- 3  */}
          </div>
          <div className={next === 2 ? "md:self-end xl:mr-[25%] md:mr-[9%]" : "hidden"}>
            <UserCard
              dev={"FULLSTACK TESTER"}
              text={
                "Un buen desarrollo y buena estética hacen brillar cualquier proyecto"
              }
              imageUrl={imgJulian}
              name={"Julian Marc"}
              linkedIn={<a href="https://www.linkedin.com/in/julianmarc/" target="_blank" rel="noreferrer noopener"><img alt='linkedIn' src={imgLinkedIn} width="25" /></a>}
              github={<a href="https://github.com/R4vage" target="_blank" rel="noreferrer noopener"><img alt='Github' src={imgGithub} width="30" /></a>}
            />
            {/* <-------------- 4  */}
          </div>
          {/* las terceras cards */}
          <div
            className={
              next === 3 ? "md:self-start md:ml-[9%] xl:ml-[25%]" : "hidden"
            }
          >
            <UserCard
              dev={"FULLSTACK DEVELOPER"}
              text={
                "Da lo mejor de ti en cada asignación, por muy fácil o difícil que resulte"
              }
              imageUrl={imgEdu}
              name={"Edu Falcón"}
              linkedIn={<a href="https://www.linkedin.com/in/eliseodev/" target="_blank" rel="noreferrer noopener"><img alt='linkedIn' src={imgLinkedIn} width="25" /></a>}
              github={<a href="https://github.com/Eliseonop" target="_blank" rel="noreferrer noopener"><img alt='Github' src={imgGithub} width="30" /></a>}
            />
            {/* <-------------- 5  */}
          </div>
          <div className={next === 3 ? "md:self-end xl:mr-[25%] md:mr-[9%]" : "hidden"}>
            <UserCard
              dev={"FRONTEND DEVELOPER"}
              text={
                "Estar en un gran equipo de trabajo hace que queramos esforzarnos cada día"
              }
              imageUrl={imgMike}
              name={"Miguel Briceño"}
              linkedIn={<a href="https://www.linkedin.com/in/miguelbricenodev/" target="_blank" rel="noreferrer noopener"><img alt='linkedIn' src={imgLinkedIn} width="25" /></a>}
              github={<a href="https://www.github.com/mikejbp/" target="_blank" rel="noreferrer noopener"><img alt='Github' src={imgGithub} width="30" /></a>}
            />
            {/* <-------------- 6  */}
          </div>
        </div>
      </div>
  );
}

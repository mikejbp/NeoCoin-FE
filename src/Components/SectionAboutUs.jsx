import React from 'react';
import imgTeam from '../Assets/team.png'

const SectionAboutUs = () => {
  return (
    <section className="bg-[#FAFAFA]">
      <aside className=" min-h-full min-w-full flex flex-col justify-center p-6 mx-auto sm:py-8 lg:pt-4 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center pt-[5%] mx-10 text-center lg:max-w-xl lg:text-left">
          <h1 className="text-3xl font-bold sm:text-6xl text-[#1A69B4]">
            Desde 2022 cuidando tus
            <span className="dark:text-blue-400"> criptos </span>para que puedas
            ahorrar e invertir más fácilmente
          </h1>
          <p className="hidden sm:block mt-6 mb-8 text-2xl dark:text-blue-400 sm:mb-12">
            Nuestro objetivo es proporcionarte rapidez, comodidad y sobretodo
            seguridad.
            <br />
            Sé parte de nuestra Exchange y empieza a invertir a lo grande.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a rel="noopener noreferrer" href={"userLogin"} className="px-8 py-3 text-lg font-semibold rounded-md hover:text-xl shadow-lg dark:bg-sky-600 dark:text-white" >
              Sign Up</a>
            <a href={"Analytics"} rel="noopener noreferrer" className="px-8 py-3 text-lg font-semibold border-2 hover:text-xl hover:bg-[#1A69B4] hover:text-white shadow-lg rounded-md text-sky-600">
              Analytics</a>
          </div>
        </div>
        <div className="flex items-center justify-center mt-8 lg:mt-0">
          <img
            src={imgTeam}
            alt="TeamWork"
            className="object-cover"
          />
        </div>
      </aside>
    </section>
  )
}

export default SectionAboutUs;

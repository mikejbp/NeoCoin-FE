import React from "react";
import styles from "./Error.module.css";

const Error = () => {
  return (
    <>
      <div className={styles.content}>
        <h1>¡Lo sentimos, página no encontrada!</h1>
        <p>Lo sentimos pero la página que solicitaste no fue encontrada.</p>
        <p>
          Si escribiste la URL directamente, por favor, asegurate de que sea
          correcta.
        </p>
        <p>
          Si seguiste un link para llegar aquí, es posible que esté
          desactualizado.
        </p>
        <p>
          Podés encontrar el personaje que buscás navegando el menú principal.
        </p>
      </div>
    </>
  );
};

export default Error;

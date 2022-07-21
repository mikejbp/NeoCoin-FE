import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import { signIn } from "../store/actions/authActions";

//hacemos un SingIn  donde cuando este registrado lo lleva directamente a cargar una jornada

const LoginComponentAl = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(creds.email, creds.password));
    setCreds({ email: "", password: "" });
  };

  if (auth.token) return <Navigate to="/private/" />;

  return (
    <>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <p variant="h5">Inicio de sesion</p>
        <input
          id="enter-email"
          label="ingrese Email"
          variant="outlined"
          fullWidth
          value={creds.email}
          onChange={(e) => setCreds({ ...creds, email: e.target.value })}
        />
        <input
          id="enter-password"
          type="password"
          label="Ingrese Contraseña"
          variant="outlined"
          fullWidth
          value={creds.password}
          onChange={(e) => setCreds({ ...creds, password: e.target.value })}
        />
        <button variant="contained" color="primary" type="submit">
          Entrar
        </button>
      </form>
    </>
  );
};

export default LoginComponentAl;

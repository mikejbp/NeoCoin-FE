import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "./store/actions/authActions";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import PublicRouter from "./Routes/PublicRouter";
import PrivateRouter from "./Routes/PrivateRouter";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<PublicRouter />} />
          <Route path="/private/*" element={<PrivateRouter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

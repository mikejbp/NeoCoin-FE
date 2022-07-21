import { Route, Routes } from "react-router-dom";
import Nosotros from "../Pages/Nosotros";
import Analytics from "../Pages/Analytics";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import Login from "../Pages/Login";
import Layout from "../Components/Layout";
import Register from "../Pages/Register";

const PublicRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route>
          <Route exact match path="/" element={<Home />} />
          <Route exact path="aboutUs" element={<Nosotros />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="userLogin" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Layout>
  );
};

export default PublicRouter;

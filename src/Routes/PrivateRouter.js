import { Route, Routes } from "react-router-dom";
import Error from "../Pages/Error";
import PrivateSettings from "../Pages/private/PrivateSettings";
import PrivateHome from "../Pages/private/PrivateHome";
import UserLayout from "../Components/UserLayout";
/* import ProfileUser from "../Pages/private/ProfileUser"; */
import Swap from "../Pages/private/Swap";
import WalletUltimate from "../Pages/private/WalletUltimate";

const PrivateRouter = () => {
  return (
    <>
      <UserLayout>
        <Routes>
          <Route>
            <Route exact match path="/" element={<PrivateHome />} />
            <Route exact match path="settings" element={<PrivateSettings />} />
            {/* <Route exact match path="profile" element={<ProfileUser />} /> */}
            <Route exact match path="swap" element={<Swap></Swap>} />
            <Route
              exact
              match
              path="wallet"
              element={<WalletUltimate></WalletUltimate>}
            />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </UserLayout>
    </>
  );
};

export default PrivateRouter;

import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { AuthRoutes } from "../modules";
import { AuthUserContext } from "../context";
import { SecondRouter } from "./SecondRouter";
import { StartLoading } from "../components";
import { Toaster } from "react-hot-toast";

export const AppRouter = () => {
  const { isLoggedIn, startLoading, startLoadingOther } =
    useContext(AuthUserContext);

  if (startLoading || startLoadingOther) {
    return <StartLoading />;
  }

  return (
    <>
      <Routes>
        {isLoggedIn ? (
          <Route path="/*" element={<SecondRouter />} />
        ) : (
          <Route path="/auth/*" element={<AuthRoutes />} />
        )}

        <Route path="/*" element={<Navigate to="/auth/login" />} />
      </Routes>

      <Toaster
        position="bottom-right"
        reverseOrder={false}
        containerClassName="z_index__toast"
      />
    </>
  );
};

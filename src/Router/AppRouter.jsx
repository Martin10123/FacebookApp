import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { AuthRoutes } from "../Auth";
import { AuthUserContext } from "../context";
import { StartLoading } from "../StartLoading/StartLoading";
import { SecondRouter } from "./SecondRouter";

export const AppRouter = () => {
  const { isLoggedIn, startLoading } = useContext(AuthUserContext);

  if (startLoading) {
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
    </>
  );
};

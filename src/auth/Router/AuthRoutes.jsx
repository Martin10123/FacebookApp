import { Navigate, Route, Routes } from "react-router-dom";

import { LoginPage, RecoverAccount, RegisterContentContext } from "../";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="recover" element={<RecoverAccount />} />
      <Route path="register" element={<RegisterContentContext />} />

      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};

import { Navigate, Route, Routes } from "react-router-dom";

import { LoginPage, RecoverAccount, RegisterPage } from "../";
import { RegisterProvider } from "../RegisterPage/context/RegisterContext";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="recover" element={<RecoverAccount />} />
      <Route
        path="register"
        element={
          <RegisterProvider>
            <RegisterPage />
          </RegisterProvider>
        }
      />

      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};

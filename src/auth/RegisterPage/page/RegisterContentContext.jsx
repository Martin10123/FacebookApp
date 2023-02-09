import { RegisterContext } from "../context/RegisterContext";
import { RegisterPage } from "./RegisterPage";

export const RegisterContentContext = () => {
  return (
    <RegisterContext>
      <RegisterPage />
    </RegisterContext>
  );
};

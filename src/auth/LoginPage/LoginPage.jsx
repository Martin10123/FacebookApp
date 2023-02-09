import { login } from "../../assets";

import { ButtonForm, InputForm } from "../helpers";
import { FormLayout } from "../layout";

export const LoginPage = () => {
  return (
    <FormLayout imageBack={login} title="Login" titleRedirect="Registrate">
      <InputForm
        styleIcon="fa-solid fa-at"
        type="text"
        placeholder="Correo..."
      />

      <InputForm
        styleIcon="fa-solid fa-lock"
        type="password"
        placeholder="Contraseña..."
      />

      <ButtonForm title="Ingresar" />
    </FormLayout>
  );
};

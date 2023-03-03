import { login } from "../../assets";

import { ButtonForm, InputForm } from "../helpers";
import { FormLayout } from "../layout";
import { useLogin } from "./hook/useLogin";

export const LoginPage = () => {
  const {
    email,
    emailValid,
    errorMessage,
    formSubmitted,
    onInputChange,
    onSubmitForm,
    password,
    passwordValid,
    startLoading,
  } = useLogin();

  return (
    <FormLayout imageBack={login} title="Login" titleRedirect="Registrate">
      <InputForm
        errorActive={!!emailValid && formSubmitted}
        name="email"
        onChange={onInputChange}
        placeholder="Correo..."
        styleIcon="fa-solid fa-at"
        textError={emailValid || ""}
        type="text"
        value={email}
      />

      <InputForm
        errorActive={!!passwordValid && formSubmitted}
        name="password"
        onChange={onInputChange}
        placeholder="Contraseña..."
        styleIcon="fa-solid fa-lock"
        textError={passwordValid || ""}
        type="password"
        value={password}
      />

      <ButtonForm
        title={startLoading ? "Cargando..." : "Ingresar"}
        disabled={startLoading}
        onSubmit={onSubmitForm}
      />

      {errorMessage && (
        <p
          style={{
            background: "#ff0000",
            borderRadius: "0.5rem",
            color: "#fff",
            fontSize: "1.1rem",
            padding: "0.5rem",
            textAlign: "center",
          }}
        >
          {errorMessage}
        </p>
      )}
    </FormLayout>
  );
};

import { InputForm } from "../../helpers";

import styles from "../components.module.css";

export const EmailPassword = ({
  formState,
  formValidation,
  onInputChange,
  formSubmitted,
}) => {
  const { email, password1, password2 } = formState;
  const { emailValid, password1Valid, password2Valid } = formValidation;

  return (
    <>
      <InputForm
        errorActive={!!emailValid && formSubmitted}
        name="email"
        onChange={onInputChange}
        placeholder="Ingrese su email..."
        styleIcon="fa-solid fa-at"
        textError={emailValid || ""}
        type="email"
        value={email}
      />
      <div className={styles.register__couple}>
        <InputForm
          errorActive={!!password1Valid && formSubmitted}
          name="password1"
          onChange={onInputChange}
          placeholder="Ingrese su contraseña..."
          styleIcon="fa-solid fa-lock"
          textError={password1Valid || ""}
          type="password"
          value={password1}
        />
        <InputForm
          errorActive={!!password2Valid && formSubmitted}
          name="password2"
          onChange={onInputChange}
          placeholder="Confirmar contraseña..."
          styleIcon="fa-solid fa-lock"
          textError={password2Valid || ""}
          type="password"
          value={password2}
        />
      </div>
    </>
  );
};

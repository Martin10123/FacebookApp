import { InputForm } from "../../helpers";

import styles from "../components.module.css";

export const InfoPersonal = ({
  formState,
  formSubmitted,
  formValidation,
  onInputChange,
}) => {
  const { displayName, lastName, phoneNumber } = formState;
  const { displayNameValid, lastNameValid, phoneNumberValid } = formValidation;

  return (
    <>
      <div className={styles.register__couple}>
        <InputForm
          errorActive={!!displayNameValid && formSubmitted}
          name="displayName"
          onChange={onInputChange}
          placeholder="Ingrese su nombre..."
          styleIcon="fa-regular fa-user"
          textError={displayNameValid || ""}
          type="text"
          value={displayName}
        />

        <InputForm
          errorActive={!!lastNameValid && formSubmitted}
          name="lastName"
          onChange={onInputChange}
          placeholder="Ingrese su apellido..."
          styleIcon="fa-regular fa-user"
          textError={lastNameValid || ""}
          type="text"
          value={lastName}
        />
      </div>
      <InputForm
        errorActive={!!phoneNumberValid && formSubmitted}
        name="phoneNumber"
        onChange={onInputChange}
        placeholder="Ingrese su número de telefono..."
        styleIcon="fa-sharp fa-solid fa-phone"
        textError={phoneNumberValid || ""}
        type="number"
        value={phoneNumber}
      />
    </>
  );
};

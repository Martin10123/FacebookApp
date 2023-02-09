import { InputForm } from "../../helpers";

import styles from "../components.module.css";

export const OtherInfo = ({
  formState,
  formValidation,
  onInputChange,
  formSubmitted,
}) => {
  const { birthday, gender } = formState;
  const { birthdayValid } = formValidation;

  return (
    <>
      <InputForm
        errorActive={!!birthdayValid && formSubmitted}
        name="birthday"
        onChange={onInputChange}
        placeholder="Ingrese su número de telefono..."
        styleIcon="fa-regular fa-calendar-days"
        textError={birthdayValid || ""}
        type="date"
        value={birthday}
      />

      <select
        className={styles.register__select}
        name="gender"
        onChange={onInputChange}
        value={gender}
      >
        <option value="Hombre">Hombre</option>
        <option value="Mujer">Mujer</option>
      </select>
    </>
  );
};

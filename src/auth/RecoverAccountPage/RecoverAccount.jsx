import { useState } from "react";
import { recover } from "../../assets";
import { regex } from "../../helpers";
import { useForm } from "../../hooks";
import { ButtonForm, InputForm } from "../helpers";
import { FormLayout } from "../layout";

const dataForm = {
  email: "",
};

const emailValidator = {
  email: [(value) => regex.test(value) === false, "Ingrese un email valido"],
};

export const RecoverAccount = () => {
  const {
    formValidation: { emailValid },
    onInputChange,
    isFormValid,
    email,
  } = useForm(dataForm, emailValidator);
  const [formSubmitted, setformSubmitted] = useState(false);
  const [startLoading, setStartLoading] = useState(false);

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (!isFormValid) return setformSubmitted(true);
    console.log(email);
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormLayout
      title="Recuperar cuenta"
      titleRedirect="Ingresar"
      imageBack={recover}
    >
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

      <ButtonForm title="Recuperar" onSubmit={onSubmitForm} />
    </FormLayout>
  );
};

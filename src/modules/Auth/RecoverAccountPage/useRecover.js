import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";

import { firebaseAuth } from "../../../services";
import { regex } from "../RegisterPage/helpers/validorRegister";
import { useForm } from "../../../hooks";

const formRecover = {
  email: "",
};

const emailValidator = {
  email: [(value) => regex.test(value) === false, "Ingrese un email valido"],
};

export const useRecover = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoadingForm, setIsLoadingForm] = useState(false);

  const { email, emailValid, isFormValid, onInputChange } = useForm(
    formRecover,
    emailValidator
  );

  const onSubmitForm = async () => {
    if (!isFormValid) return setFormSubmitted(true);

    setIsLoadingForm(true);

    try {
      await sendPasswordResetEmail(firebaseAuth, email);

      setErrorMessage(`Se envio un correo a ${email} revisalo`);
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setErrorMessage("No pudimos encontrar este usuario");
      } else {
        setErrorMessage(error.message);
      }
    }

    setIsLoadingForm(false);
  };

  return {
    email,
    emailValid,
    errorMessage,
    formSubmitted,
    isLoadingForm,
    onInputChange,
    onSubmitForm,
  };
};

import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";

import { firebaseAuth, firebaseDB } from "../../../../services";
import { regex } from "../../RegisterPage/helpers/validorRegister";
import { useForm } from "../../../../hooks";

const formLogin = {
  email: "admin@admin.com",
  password: "Admin12345",
};

const validatorLogin = {
  email: [
    (value) => {
      if (regex.test(value) === false || value.trim().length <= 0) {
        return true;
      }
    },
    "Ingrese un email valido",
  ],
  password: [
    (value) => value.trim().length <= 0,
    "La contraseña no debe estar vacia",
  ],
};

export const useLogin = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [startLoading, setStartLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const {
    email,
    emailValid,
    isFormValid,
    onInputChange,
    password,
    passwordValid,
  } = useForm(formLogin, validatorLogin);

  const onSubmitForm = async (e) => {
    e.preventDefault();

    if (!isFormValid) return setFormSubmitted(true);

    setStartLoading(true);

    try {
      const { user } = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );

      await updateDoc(doc(firebaseDB, "users", user.uid), {
        isActive: true,
      });

      setStartLoading(false);
    } catch (error) {
      console.log(error);
      if (error.code === "auth/user-not-found") {
        setErrorMessage("Este usuario no existe");
      } else if (error.code === "auth/wrong-password") {
        setErrorMessage("Contraseña incorrecta");
      } else {
        console.log(error.code);
      }

      setStartLoading(false);
    }
  };

  return {
    email,
    emailValid,
    errorMessage,
    formSubmitted,
    onInputChange,
    onSubmitForm,
    password,
    passwordValid,
    startLoading,
  };
};

import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { createAccountDate } from "../../../helpers/dates";
import { doc, setDoc } from "firebase/firestore";
import { firebaseAuth, firebaseDB } from "../../../firebase/firebaseConfig";
import { generateUsernameUnic, validatorRegister } from "../helpers";
import { useForm } from "../../../hooks";

export const RegisterProvider = createContext();

const dataForm = {
  birthday: "",
  displayName: "",
  email: "",
  gender: "Hombre",
  lastName: "",
  password1: "",
  password2: "",
  phoneNumber: "",
};

export const RegisterContext = ({ children }) => {
  const [page, setPage] = useState(1);
  const [formSubmitted, setformSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [startLoading, setStartLoading] = useState(false);
  const { formState, formValidation, isFormValid, onInputChange } = useForm(
    dataForm,
    validatorRegister
  );

  const isFieldsValid = (fields) => {
    return fields.every((fieldName) => formValidation[fieldName] === null);
  };

  const onChangePage = (num, type) => {
    let isValid = false;

    switch (type) {
      case "volver":
        setPage(Math.max(0, Math.min(page + num, 3)));
        break;
      case "seguir":
        switch (page) {
          case 1:
            isValid = isFieldsValid([
              "displayNameValid",
              "lastNameValid",
              "phoneNumberValid",
            ]);
            break;
          case 2:
            isValid = isFieldsValid([
              "emailValid",
              "password1Valid",
              "password2Valid",
            ]);
            break;
          default:
            break;
        }

        if (isValid) {
          setPage(Math.max(0, Math.min(page + num, 3)));
          setformSubmitted(false);
        } else {
          setformSubmitted(true);
        }

        break;
      default:
        break;
    }
  };

  const onSubmitForm = async () => {
    if (!isFormValid) return setformSubmitted(true);

    setStartLoading(true);

    try {
      const { email, password1, displayName } = formState;

      const { user } = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password1
      );

      await updateProfile(firebaseAuth.currentUser, {
        displayName,
      });

      delete formState.password1;
      delete formState.password2;

      await setDoc(doc(firebaseDB, "users", user.uid), {
        ...formState,
        createAccount: createAccountDate(new Date().getTime()),
        isActive: true,
        uid: user.uid,
        username: generateUsernameUnic(displayName),
      });

      setStartLoading(false);
    } catch (error) {
      console.log(error);
      if (error.code === "auth/email-already-in-use") {
        setErrorMessage("Este email ya esta en uso");
      } else {
        setErrorMessage(error.code);
      }
      setStartLoading(false);
    }
  };

  return (
    <RegisterProvider.Provider
      value={{
        errorMessage,
        formState,
        formSubmitted,
        formValidation,
        isFormValid,
        onChangePage,
        onInputChange,
        onSubmitForm,
        page,
        setformSubmitted,
        setPage,
        startLoading,
      }}
    >
      {children}
    </RegisterProvider.Provider>
  );
};

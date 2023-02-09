import { createContext, useState } from "react";
import { validatorRegister } from "../../../helpers";
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
  const { formState, formValidation, isFormValid, onInputChange } = useForm(
    dataForm,
    validatorRegister
  );

  const isValidInfo1 = () => {
    const { displayNameValid, lastNameValid, phoneNumberValid } =
      formValidation;
    let canAvance = false;

    if (
      displayNameValid === null &&
      lastNameValid === null &&
      phoneNumberValid === null
    ) {
      return (canAvance = true);
    } else {
      setformSubmitted(true);
      return (canAvance = false);
    }
  };

  const isValidInfo2 = () => {
    const { emailValid, password1Valid, password2Valid } = formValidation;
    let canAvance = false;

    if (
      emailValid === null &&
      password1Valid === null &&
      password2Valid === null
    ) {
      return (canAvance = true);
    } else {
      setformSubmitted(true);
      return (canAvance = false);
    }
  };

  const onChangePage = (num, type) => {
    const isValid1 = isValidInfo1();
    const isValid2 = isValidInfo2();

    const whatIsType = type === "seguir";

    if (!whatIsType) {
      const result = Math.max(0, Math.min(page + num, 3));
      setPage(result);
    } else {
      if (isValid1 && page === 1) {
        const result = Math.max(0, Math.min(page + num, 3));
        setPage(result);
        setformSubmitted(false);
      }

      if (isValid2 && page === 2) {
        const result = Math.max(0, Math.min(page + num, 3));
        setPage(result);
        setformSubmitted(false);
      }
    }
  };

  const onSubmitForm = () => {
    if (!isFormValid) return setformSubmitted(true);

    console.log({ ...formState });
  };

  return (
    <RegisterProvider.Provider
      value={{
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
      }}
    >
      {children}
    </RegisterProvider.Provider>
  );
};

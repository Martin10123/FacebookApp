import { useContext } from "react";
import { register } from "../../../assets";
import { ButtonForm } from "../../helpers";
import { FormLayout } from "../../layout";
import { EmailPassword, InfoPersonal, OtherInfo } from "../components";
import { RegisterProvider } from "../context/RegisterContext";

import styles from "../components.module.css";

export const RegisterPage = () => {
  const {
    formState,
    formSubmitted,
    formValidation,
    onChangePage,
    onInputChange,
    page,
    onSubmitForm,
  } = useContext(RegisterProvider);

  return (
    <FormLayout
      imageBack={register}
      title="Registrate"
      titleRedirect="Ingresar"
    >
      {page === 1 && (
        <InfoPersonal
          formState={formState}
          formValidation={formValidation}
          onInputChange={onInputChange}
          formSubmitted={formSubmitted}
        />
      )}

      {page === 2 && (
        <EmailPassword
          formState={formState}
          formValidation={formValidation}
          onInputChange={onInputChange}
          formSubmitted={formSubmitted}
        />
      )}

      {page === 3 && (
        <OtherInfo
          formState={formState}
          formValidation={formValidation}
          onInputChange={onInputChange}
          formSubmitted={formSubmitted}
        />
      )}

      <div className={page === 2 ? styles.register__buttons : ""}>
        {page !== 1 && (
          <ButtonForm
            title="Volver"
            onSubmit={() => onChangePage(-1, "volver")}
          />
        )}

        {page !== 3 && (
          <ButtonForm
            title="Seguir"
            onSubmit={() => onChangePage(1, "seguir")}
          />
        )}
      </div>

      {page === 3 && <ButtonForm title="Registrarse" onSubmit={onSubmitForm} />}
    </FormLayout>
  );
};

import { useContext } from "react";
import { register } from "../../../../assets";
import { ButtonForm } from "../../helpers";
import { FormLayout } from "../../layout";
import { EmailPassword, InfoPersonal, OtherInfo } from "../components";
import { RegisterContext } from "../context/RegisterContext";

import styles from "../components.module.css";

export const RegisterPage = () => {
  const {
    formState,
    errorMessage,
    formSubmitted,
    formValidation,
    onChangePage,
    onInputChange,
    onSubmitForm,
    page,
    startLoading,
  } = useContext(RegisterContext);

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

      {page === 3 && (
        <ButtonForm
          disabled={startLoading}
          onSubmit={onSubmitForm}
          title={startLoading ? "Cargando..." : "Registrarse"}
        />
      )}

      {errorMessage && (
        <p className={styles.register__show_error}>{errorMessage}</p>
      )}
    </FormLayout>
  );
};

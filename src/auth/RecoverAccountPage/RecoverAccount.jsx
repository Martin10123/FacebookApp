import { ButtonForm, InputForm } from "../helpers";
import { FormLayout } from "../layout";
import { recover } from "../../assets";
import { useRecover } from "./useRecover";

export const RecoverAccount = () => {
  const {
    email,
    emailValid,
    errorMessage,
    formSubmitted,
    isLoadingForm,
    onInputChange,
    onSubmitForm,
  } = useRecover();

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
      <ButtonForm
        title={isLoadingForm ? "Cargando..." : "Recuperar"}
        onSubmit={onSubmitForm}
        disabled={isLoadingForm}
      />
      {errorMessage && (
        <p
          style={{
            background: "#ff0000",
            borderRadius: "0.5rem",
            color: "#fff",
            fontSize: "1.1rem",
            padding: "0.5rem",
            textAlign: "center",
          }}
        >
          {errorMessage}
        </p>
      )}
    </FormLayout>
  );
};

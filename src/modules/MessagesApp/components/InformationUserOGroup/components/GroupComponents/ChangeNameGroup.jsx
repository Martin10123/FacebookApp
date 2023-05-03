import { InputForm } from "../../../../../Auth";
import { LayoutGroup } from "./LayoutGroup";
import { useNameGroup } from "../../hooks";

export const ChangeNameGroup = ({ setOpenChangeName, userMessage }) => {
  const {
    // Atributos
    formSubmitted,
    nameGroup,
    setNameGroup,
    startLoading,
    // Metodos
    onSentChangeName,
  } = useNameGroup({ setOpenChangeName, userMessage });

  return (
    <LayoutGroup
      disabledButton={startLoading}
      nameModal="Cambiar nombre del grupo"
      onCloseModal={() => setOpenChangeName(false)}
      onSentForm={onSentChangeName}
      showBotton={true}
    >
      <InputForm
        errorActive={nameGroup.trim().length <= 4 && formSubmitted}
        onChange={({ target }) => setNameGroup(target.value)}
        styleIcon="fa-solid fa-users-rays"
        textError="El nombre del grupo es demasiado corto"
        value={nameGroup}
      />
    </LayoutGroup>
  );
};

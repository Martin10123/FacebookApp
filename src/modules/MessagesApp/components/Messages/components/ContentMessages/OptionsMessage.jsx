import { useOptionsMessage } from "../../hooks";

import styles from "./cardMessages.module.css";

export const OptionsMessage = ({
  combinedUid,
  infoUserActive,
  isUserActive,
  message,
  setOpenOptions,
}) => {
  const {
    // Atributos
    ref,

    // Metodos
    onCopyMessage,
    onDeleteMessage,
    onGoProfile,
  } = useOptionsMessage({
    combinedUid,
    infoUserActive,
    message,
    setOpenOptions,
  });

  return (
    <div className={styles.message__options_container} ref={ref}>
      <ul className={styles.message__options_content}>
        <li onClick={onGoProfile}>
          <i className="fa-regular fa-circle-user"></i>Ver pefil
        </li>
        {isUserActive && (
          <li onClick={() => onDeleteMessage("delete")}>
            <i className="fa-solid fa-ban"></i>Anular envio
          </li>
        )}
        <li onClick={() => onDeleteMessage("")}>
          <i className="fa-regular fa-trash-can"></i>Eliminar para mi
        </li>
        <li onClick={onCopyMessage}>
          <i className="fa-solid fa-copy"></i>Copiar mensaje
        </li>
      </ul>
    </div>
  );
};

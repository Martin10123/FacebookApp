import { useOptionsMessage } from "../../hooks";

import styles from "./cardMessages.module.css";

export const OptionsMessage = ({
  combinedUid,
  infoUserActive,
  isUserActive,
  isWindown,
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
    onGoToStorie,
  } = useOptionsMessage({
    combinedUid,
    infoUserActive,
    message,
    setOpenOptions,
  });

  const startWithStorie = message?.message?.startsWith(
    "Respondio a tu historia con:"
  );

  return (
    <div
      className={`${styles.message__options_container} ${
        isWindown
          ? styles.message__options_container_desk
          : styles.message__options_container_screen
      }`}
    >
      <ul className={styles.message__options_content} ref={ref}>
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
        {startWithStorie && (
          <li onClick={onGoToStorie}>
            <i className="fa-solid fa-person-booth"></i>Ir a la historia
          </li>
        )}
      </ul>
    </div>
  );
};

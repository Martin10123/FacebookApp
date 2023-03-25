import { ButtonForm } from "../../../Auth";

import styles from "./deletePost.module.css";

export const SureDeleteElement = ({
  disabled,
  onCancelDelete,
  onSubmitDelete,
  titleShow = "¿Estas seguro que quieres eliminar este elemento?",
}) => {
  return (
    <article className={styles.delete__container}>
      <div className={styles.delete__header}>
        <h2 className={styles.delete__title}>Borrar publicación</h2>
        <hr />
        <p>{titleShow}</p>
        <div className={styles.delete__buttons}>
          <ButtonForm
            disabled={disabled}
            title="Cancelar"
            stylesButton={{ background: "#d8d8d8", color: "#000" }}
            onSubmit={onCancelDelete}
          />
          <ButtonForm
            disabled={disabled}
            title={disabled ? "Confirmando..." : "Confirmar"}
            onSubmit={onSubmitDelete}
          />
        </div>
      </div>
    </article>
  );
};

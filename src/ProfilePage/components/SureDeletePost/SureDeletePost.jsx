import { ButtonForm } from "../../../Auth";

import styles from "./deletePost.module.css";

export const SureDeleteElement = ({ onSubmitDelete, onCancelDelete }) => {
  return (
    <article className={styles.delete__container}>
      <div className={styles.delete__header}>
        <h2 className={styles.delete__title}>Borrar publicación</h2>
        <hr />
        <p>¿Estas seguro que quieres eliminar este elemento?</p>
        <div className={styles.delete__buttons}>
          <ButtonForm
            title="Cancelar"
            stylesButton={{ background: "#d8d8d8", color: "#000" }}
            onSubmit={onCancelDelete}
          />
          <ButtonForm title="Confirmar" onSubmit={onSubmitDelete} />
        </div>
      </div>
    </article>
  );
};

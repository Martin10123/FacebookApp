import { messi } from "../../../assets";

import styles from "./modalEdit.module.css";

export const EditStatePosts = () => {
  return (
    <section className={styles.modal__container}>
      <div className={styles.modal__box}>
        <div className={styles.modal__return}>
          <i className="fa-solid fa-arrow-left"></i>
          <p>Editar publicación</p>
        </div>
        <div className={styles.modal__content_user_info}>
          <figure className={styles.modal__user_photo}>
            <img src={messi} alt="Foto de perfil" />
          </figure>
          <div className={styles.modal__info_user}>
            <p>Martin Elias</p>
            <select className={styles.modal__select}>
              <option value="Publico">Publico</option>
              <option value="Amigos">Amigos</option>
              <option value="Solo yo">Solo yo</option>
            </select>
          </div>
        </div>
        <div className={styles.modal__textarea}>
          <textarea placeholder="Editar publicación" />
          <span className={styles.modal__count_text}>
            <p>0</p>
          </span>
        </div>
        <div className={styles.modal__buttons}>
          <button>Publicar</button>
          <button>Eliminar</button>
        </div>
      </div>
    </section>
  );
};

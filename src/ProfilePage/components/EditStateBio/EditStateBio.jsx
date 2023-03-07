import { photoUser } from "../../../assets";
import { ButtonForm } from "../../../Auth";

import styles from "./editStateBio.module.css";

export const EditStateBio = ({ setOpenEditStateBio }) => {
  return (
    <div className={styles.bio__container}>
      <div className={styles.bio__content}>
        <div className={styles.bio__nav}>
          <i
            className="fa-solid fa-arrow-left"
            onClick={() => setOpenEditStateBio(false)}
          ></i>
          <p>Editar estado</p>
        </div>

        <div className={styles.bio__contain_info}>
          <figure className={styles.bio__photo_user}>
            <img src={photoUser} alt="Foto de perfil del usuario" />

            <figcaption className={styles.bio__name_user}>
              <p>Martin Elias</p>
              <p>
                <i className="fa-solid fa-earth-americas"></i>
                Publico
              </p>
            </figcaption>
          </figure>

          <div className={styles.bio__content_text}>
            <textarea
              name=""
              className={styles.bio__textarea}
              placeholder="Describete a ti mismo..."
            />

            <span className={styles.bio__count_word}>0/100</span>
          </div>
        </div>

        <div className={styles.bio__buttons}>
          <ButtonForm title="Guardar" />
        </div>
      </div>
    </div>
  );
};

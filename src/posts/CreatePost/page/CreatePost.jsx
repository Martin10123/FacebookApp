import { photoUser } from "../../../assets";
import { TagFriends } from "../components/TagFriends";

import styles from "./createPost.module.css";

export const CreatePost = () => {
  return (
    <>
      <div className={styles.create__container}>
        <div className={styles.create__content}>
          <div className={styles.create__nav}>
            <div className={styles.create__center_div}></div>

            <div className={styles.create__return_arrow}>
              <i className="fa-solid fa-arrow-left"></i>
              <p>Crear publicación</p>
            </div>

            <button className={styles.create__btn_create}>Publicar</button>
            <button className={styles.create__btn_close}>X</button>
          </div>

          <div className={styles.create__info_user}>
            <img src={photoUser} alt="" />

            <div className={styles.create__name_user}>
              <p>Martin Elias</p>

              <select className={styles.create__select_privacity} name="" id="">
                <option value="Publico">Publico</option>
                <option value="Solo amigos">Solo amigos</option>
                <option value="Solo yo">Solo yo</option>
              </select>
            </div>
          </div>

          <div className={styles.create__writte_post}>
            <textarea name="" id="" placeholder="¿Que estas pensando?" />
          </div>

          <div className={styles.create__footer}>
            <p className={styles.create__title_add_post}>
              Agregar a tu publicación
            </p>
            <div className={styles.create__content_icons}>
              <i className="fa-solid fa-images"></i>
              <i className="fa-solid fa-user-tag"></i>
              <i className="fa-solid fa-face-laugh"></i>
              <i className="fa-solid fa-location-dot"></i>
              <i className="fa-solid fa-video"></i>
            </div>
          </div>

          <div className={styles.create__btn_create_post_desk}>
            <button>Publicar</button>
          </div>
        </div>
      </div>

      <TagFriends />
    </>
  );
};

import { photoUser } from "../../../assets";

import styles from "../page/profile.module.css";

export const PhotosUserName = () => {
  return (
    <div className={styles.profile__content_images_user_info}>
      <div className={styles.profile__cover_photo}>
        <div className={styles.profile__img_cover}>
          <p>
            <i className="fa-solid fa-camera"></i>
            Agregar imagen portada
          </p>
        </div>
      </div>

      <div className={styles.profile__content_photo_user}>
        <div className={styles.profile__photo_user}>
          <img src={photoUser} alt="Foto del perfil" />
          <div className={styles.profile__camera_float}>
            <i className="fa-solid fa-camera"></i>
          </div>
        </div>

        <div className={styles.profile__name_state}>
          <p className={styles.profile__name_user}>Martin Elias</p>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
            impedit autem praesentium blanditiis veniam aperiam adipisci quam
            deserunt repellendus, molestiae ut est iure deleniti, doloremque hic
            reprehenderit. Dignissimos, blanditiis suscipit.
          </span>
        </div>

        <div className={styles.profile__buttons_history}>
          <button className={styles.profile__add_history}>
            <i className="fa-solid fa-circle-plus"></i>
            Agregar historia
          </button>
          <button className={styles.profile__ellipsis}>
            <i className="fa-regular fa-pen-to-square"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

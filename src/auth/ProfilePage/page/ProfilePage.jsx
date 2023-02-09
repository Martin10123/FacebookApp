import { photoUser } from "../../../assets";
import { CardPost, FormPost } from "../../../posts";

import styles from "./profile.module.css";

export const ProfilePage = () => {
  return (
    <div className={styles.profile__container}>
      <div className={styles.profile__content_images_user_info}>
        <div className={styles.profile__cover_photo}>
          {/* <img src="" alt="" /> */}
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
              deserunt repellendus, molestiae ut est iure deleniti, doloremque
              hic reprehenderit. Dignissimos, blanditiis suscipit.
            </span>
          </div>

          <div className={styles.profile__buttons_history}>
            <button className={styles.profile__add_history}>
              <i className="fa-solid fa-circle-plus"></i>
              Agregar historia
            </button>
            <button className={styles.profile__ellipsis}>
              <i className="fa-solid fa-ellipsis"></i>
            </button>
          </div>
        </div>
      </div>

      <div className={styles.profile__contents_other_info_user}>
        <div className={styles.profile__titles_post}>
          <p>Posts</p>
        </div>

        <h3 className={styles.title_details}>Detalles</h3>

        <ul className={styles.profile__list_details}>
          <li className={styles.profile__list_item}>
            <i className="fa-solid fa-briefcase"></i>
            No trabajo mis padres me mantiene
          </li>
          <li className={styles.profile__list_item}>
            <i className="fa-solid fa-briefcase"></i>
            No trabajo mis padres me mantiene
          </li>
          <button className={styles.profile__edit_public_details}>
            Editar detalles
          </button>
        </ul>

        <div className={styles.profile__content_info_friends}>
          <div className={styles.profile__content_titles}>
            <span className={styles.profile__span_title_friend}>
              <p>Amigos</p>
              <p>0 amigos</p>
            </span>

            <button className={styles.profile__btn_find_friends}>
              Buscar amigos
            </button>
          </div>

          <div className={styles.profile__all_info_friends}>
            <div className={styles.profile__list_friends}>
              <figure className={styles.profile__friend_info}>
                <img src={photoUser} alt="Foto de perfil del usuario" />
                <p>Martin Elias</p>
              </figure>
            </div>
            <button className={styles.profile__see_all_friends}>
              Ver todos los amigos
            </button>
          </div>
        </div>
      </div>

      <FormPost />

      <CardPost />
    </div>
  );
};

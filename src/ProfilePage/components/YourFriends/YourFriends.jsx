import { photoUser } from "../../../assets";
import { InputForm } from "../../../Auth";

import styles from "./yourFriends.module.css";

export const YourFriends = ({ setOpenYourFriends }) => {
  return (
    <div className={styles.list_friends__container}>
      <div className={styles.list_friends__content}>
        <div className={styles.list_friends__nav}>
          <span className={styles.list_friends__name_icon}>
            <i
              className="fa-solid fa-arrow-left"
              onClick={() => setOpenYourFriends(false)}
            ></i>
            <p>Martin Elias</p>
          </span>

          <i className="fa-solid fa-magnifying-glass"></i>
        </div>

        <div className={styles.list_friends__input_search}>
          <InputForm
            name="search_friend"
            placeholder="Buscar amigos..."
            styleIcon="fa-solid fa-magnifying-glass"
          />
        </div>

        <div className={styles.list_friends__content_users}>
          <p className={styles.list_friends__count_friends}>200 amigos</p>
          <div className={styles.list_friends__info_user}>
            <figure className={styles.list_friends__photo}>
              <img src={photoUser} alt="Foto de perfil del usuario" />
              <figcaption className={styles.list_friends__fig_name}>
                <p>Martin Elias</p>
                <span>100 amigos en común</span>
              </figcaption>
            </figure>

            <i className="fa-solid fa-ellipsis"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

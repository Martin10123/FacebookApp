import { photoUser } from "../assets";
import { InputForm } from "../auth/helpers";

import styles from "./navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.nav__container}>
      <div className={styles.nav__content}>
        <div className={styles.nav__title_icons}>
          <p className={styles.nav__title_face}>Facebook</p>

          <div className={styles.nav__content_icons}>
            <div className={styles.nav__icon}>
              <i className="fa-solid fa-plus"></i>
            </div>
            <div className={styles.nav__icon}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className={styles.nav__icon}>
              <i className="fa-brands fa-facebook-messenger"></i>
            </div>
          </div>
        </div>

        <div className={styles.nav__search_friends}>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            name="searchFriend"
            placeholder="Buscar amigos..."
          />
        </div>

        <div className={styles.nav__buttons_desk}>
          <div className={styles.nav__icon}>
            <i className="fa-brands fa-facebook-messenger"></i>
          </div>
          <div className={styles.nav__icon}>
            <i className="fa-solid fa-bell"></i>
          </div>

          <div className={styles.nav__user_profile}>
            <figure className={styles.nav__user_photo}>
              <img src={photoUser} alt="Foto de perfil del usuario" />
            </figure>

            <div className={styles.nav__icon_drow}>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
          </div>
        </div>

        <div className={styles.nav__icons_redirect_to}>
          <div className={styles.nav__icon_item}>
            <i className="fa-solid fa-house"></i>
          </div>
          <div className={styles.nav__icon_item}>
            <i className="fa-solid fa-user-group"></i>
          </div>
          <div className={styles.nav__icon_item}>
            <i className="fa-solid fa-store"></i>
          </div>
          <div className={styles.nav__icon_item}>
            <i className="fa-solid fa-user"></i>
          </div>
          <div className={styles.nav__icon_item}>
            <i className="fa-solid fa-bell"></i>
          </div>
          <div className={styles.nav__icon_item}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

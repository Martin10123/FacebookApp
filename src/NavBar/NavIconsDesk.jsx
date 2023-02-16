import { photoUser } from "../assets";
// import { WindownChats } from "../Messages";
// import { WindownNotifications } from "../WindownNotifications/WindownNotifications";

import styles from "./navbar.module.css";

export const NavIconsDesk = () => {
  return (
    <>
      <div className={styles.nav__search_friends}>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" name="searchFriend" placeholder="Buscar amigos..." />
      </div>

      <div className={styles.nav__buttons_desk}>
        <div className={styles.nav__icon}>
          <i className="fa-brands fa-facebook-messenger"></i>

          {/* <WindownChats /> */}
        </div>
        <div className={styles.nav__icon}>
          <i className="fa-solid fa-bell"></i>
          {/* <WindownNotifications /> */}
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
    </>
  );
};

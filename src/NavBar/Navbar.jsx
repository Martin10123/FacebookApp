import { NavIconsMobile } from "./NavIconsMobile";
import { NavIconsDesk } from "./NavIconsDesk";

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

        <NavIconsDesk />

        <NavIconsMobile />
      </div>
    </nav>
  );
};

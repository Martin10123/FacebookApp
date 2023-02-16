import styles from "./navbar.module.css";

export const NavIconsMobile = () => {
  return (
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
  );
};

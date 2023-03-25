import { NavLink } from "react-router-dom";
import { useNavbar } from "./hook/useNavbar";

import styles from "./navbar.module.css";

export const NavIconsMobile = () => {
  const { infoUserActive } = useNavbar();

  const dataIcons = [
    { icon: "fa-solid fa-house", to: "/" },
    { icon: "fa-solid fa-user-group", to: "/friends" },
    { icon: "fa-solid fa-store", to: "/store" },
    { icon: "fa-solid fa-user", to: `${infoUserActive?.username}` },
    { icon: "fa-solid fa-bell", to: "/notifications" },
    { icon: "fa-solid fa-bars", to: "/menu" },
  ];

  return (
    <div className={styles.nav__icons_redirect_to}>
      {dataIcons.map(({ icon, to }) => (
        <NavLink
          to={to}
          key={icon}
          className={({ isActive }) =>
            `${styles.nav__icon_item} ${isActive ? styles.active_icon : ""}`
          }
        >
          <i className={icon}></i>
        </NavLink>
      ))}
    </div>
  );
};

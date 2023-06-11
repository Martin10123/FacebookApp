import { NavLink } from "react-router-dom";
import { useNavbar } from "./hook/useNavbar";

import styles from "./navbar.module.css";
import { useCountMessageNotifi } from "./hook";

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

  const { getNotifiCount } = useCountMessageNotifi();

  return (
    <div className={styles.nav__icons_redirect_to}>
      {dataIcons.map(({ icon, to }) => {
        const showCountNoti = to === "/notifications" && getNotifiCount !== 0;

        return (
          <NavLink
            to={to}
            key={icon}
            className={({ isActive }) =>
              `${styles.nav__icon_item} ${isActive ? styles.active_icon : ""}`
            }
          >
            <span className={styles.nav__count_notifi_message}>
              <i className={icon}></i>

              {showCountNoti && (
                <p className={styles.nav__count_float}>{getNotifiCount}</p>
              )}
            </span>
          </NavLink>
        );
      })}
    </div>
  );
};

import { photoUser } from "../assets";

import styles from "./menuApp.module.css";

const dataMenu = [
  { name: "Guardado", icon: "fa-solid fa-bookmark", color: "#b8479f" },
  { name: "Amigos", icon: "fa-solid fa-user-group", color: "#1888ea" },
  { name: "Grupos", icon: "fa-solid fa-users-rectangle", color: "#389de5" },
  { name: "Tienda", icon: "fa-solid fa-store", color: "#f1662c" },
  { name: "Eventos", icon: "fa-solid fa-calendar-day", color: "#de3750" },
  {
    name: "Mensajes",
    icon: "fa-brands fa-facebook-messenger",
    color: "#389de5",
  },
  { name: "Más recientes", icon: "fa-solid fa-newspaper", color: "#249fe3" },
  { name: "Configuración", icon: "fa-solid fa-gear", color: "#979797" },
];

export const MenuApp = () => {
  return (
    <div className={styles.menu__container}>
      <div className={styles.menu__content}>
        <div className={styles.menu__content_all_less_btn}>
          <div className={styles.menu__nav}>
            <h2>Menú</h2>

            <span className={styles.menu__content_icon}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
          </div>

          <figure className={styles.menu__info_user}>
            <img src={photoUser} alt="Foto de perfil" />
            <figcaption className={styles.menu__figcaption_name}>
              <p>Martin Elias</p>
              <span>Ver tu perfil</span>
            </figcaption>
          </figure>

          <div className={styles.menu__access_direct}>
            {dataMenu.map(({ name, icon, color }) => (
              <div key={name} className={styles.menu__access_item}>
                <i className={icon} style={{ color: color }}></i>
                {name}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.menu__btn_logout}>
          <button className={styles.menu__btn}>Cerrar sesión</button>
        </div>
      </div>
    </div>
  );
};

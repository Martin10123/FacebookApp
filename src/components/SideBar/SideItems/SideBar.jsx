import { photoUser } from "../../../assets";

import styles from "./sideBar.module.css";

const dataWindownSideBar = [
  { name: "Amigos", icon: "fa-solid fa-user-group", color: "#1888ea" },
  { name: "Guardado", icon: "fa-solid fa-bookmark", color: "#b8479f" },
  { name: "Grupos", icon: "fa-solid fa-users-rectangle", color: "#389de5" },
  { name: "Tienda", icon: "fa-solid fa-store", color: "#f1662c" },
  { name: "Más recientes", icon: "fa-solid fa-newspaper", color: "#249fe3" },
  { name: "Eventos", icon: "fa-solid fa-calendar-day", color: "#de3750" },
  { name: "Configuraciones", icon: "fa-solid fa-gear", color: "#979797" },
  {
    name: "Crear publicación",
    icon: "fa-solid fa-circle-plus",
    color: "#000",
  },
];

export const SideBar = () => {
  return (
    <nav className={styles.sideBar__container}>
      <div className={styles.sideBar__content}>
        <div className={styles.sideBar__windown}>
          <div className={styles.sideBar__item}>
            <i className="fa-solid fa-house" style={{ color: "#0170eb" }}></i>
            <p>Inicio</p>
          </div>
          <div className={styles.sideBar__item}>
            <img
              className={styles.sideBar__item_img}
              src={photoUser}
              alt="Foto de perfil"
            />
            <p>Martin Elias</p>
          </div>
        </div>
        <div className={styles.sideBar__windown}>
          {dataWindownSideBar.map(({ name, icon, color }) => (
            <div key={name} className={styles.sideBar__item}>
              <i className={icon} style={{ color }}></i>
              <p>{name}</p>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

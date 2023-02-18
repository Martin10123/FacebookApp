import { photoUser } from "../../../../assets";
import { ButtonForm } from "../../../../auth";
import { ListItem } from "./ListItem";

import styles from "./sideBar.module.css";

export const SideBar = ({ openSideBar, setOpenSideBar }) => {
  return (
    <div
      className={`${styles.side__container_side} ${
        openSideBar ? styles.side__show_side : ""
      }`}
    >
      <div className={styles.side__list}>
        <figure className={styles.side__image_user}>
          <img src={photoUser} alt="Foto de perfil" />
          <figcaption>Martin Elias</figcaption>
          <button
            className={styles.side__back_color}
            onClick={() => setOpenSideBar(false)}
          >
            X
          </button>
        </figure>

        <div className={styles.side__content_all_item}>
          <ListItem icon="fa-solid fa-tags" title="Vender articulo" />

          <ListItem icon="fa-solid fa-heart" title="Favoritos" />

          <ListItem icon="fa-solid fa-house" title="Home" />

          <ListItem icon="fa-brands fa-facebook-messenger" title="Mensajes" />
        </div>
        <div className={styles.side__last_item}>
          <ButtonForm
            title="Cerrar cesión"
            stylesButton={{ background: "#858585" }}
          />
        </div>
      </div>
    </div>
  );
};

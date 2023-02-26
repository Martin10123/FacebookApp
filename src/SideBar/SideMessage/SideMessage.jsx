import { photoUser } from "../../assets";
import { ButtonForm } from "../../auth";
import { WindownMessage } from "../../MessagesApp";

import styles from "./sideMessage.module.css";

export const SideMessage = () => {
  return (
    <div className={styles.sideMessage__container}>
      <div className={styles.sideMessage__content}>
        <div className={styles.sideMessage__windown_events}>
          <h3>
            <i className="fa-solid fa-cake-candles"></i>
            Cumpleaños cercanos
          </h3>
          <div className={styles.sideMessage__info_card_events}>
            <p>Martin Elias</p>
            <span>12 junio 2001</span>
          </div>

          <ButtonForm
            title="Ver más..."
            stylesButton={{ height: "2.5rem", fontSize: "1rem" }}
          />
        </div>

        <div className={styles.sideMessage__contacts_users}>
          <div className={styles.sideMessage__titles}>
            <p>Contactos</p>
          </div>
          <div className={styles.sideMessage__users_lists}>
            <div
              className={styles.sideMessage__list_item}
              onClick={() => createANewWindow(userSelected.length)}
            >
              <figure className={styles.sideMessage__photo_user}>
                <img src={photoUser} alt="Foto de perfil" />
                <i className="fa-solid fa-circle"></i>
              </figure>
              <p>Martin Elias</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sideMessage__content_windown_messages} style={{}}>
        {/* <WindownMessage /> */}
      </div>
    </div>
  );
};

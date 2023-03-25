import { photoUser } from "../../../assets";

import styles from "./friendsRequest.module.css";

export const CardFriendRequest = () => {
  return (
    <li className={styles.friends__li}>
      <figure className={styles.friends__img_user}>
        <img src={photoUser} alt="Foto de perfil" />
      </figure>
      <div className={styles.friends__content_user_info}>
        <p>Martin Elias</p>
        <p>{0} amigos en común</p>
        <div className={styles.friends__content_buttons}>
          <button>Confirmar</button>
          <button>Eliminar</button>
        </div>
      </div>
    </li>
  );
};

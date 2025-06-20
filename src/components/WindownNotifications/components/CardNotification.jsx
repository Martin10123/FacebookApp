import { photoUser } from "../../../assets";
import { getTimeAgo } from "../../../helpers";
import { useCardNotification } from "../hook/useCardNotification";

import styles from "../windownNotifications.module.css";

export const CardNotification = ({ notifi, users }) => {
  const {
    // Atributos
    date,
    descriptionNotifi,
    userNotifi,
    view,

    // Metodos
    onViewPost,
    whatIconIs,
  } = useCardNotification({ notifi, users });

  return (
    <div className={styles.windownNoti__info_user} onClick={onViewPost}>
      <figure className={styles.windownNoti__photo_user}>
        <img src={userNotifi?.photoUrl || photoUser} alt="Foto de perfil" />
        {whatIconIs()}
      </figure>
      <div className={styles.windownNoti__content_type_notifi}>
        <p className={styles.windownNoti__type_notifi}>{descriptionNotifi}</p>
        <p className={styles.windownNoti__date}>{`Hace ${getTimeAgo(date)}`}</p>
      </div>

      {!view && (
        <i
          className={`fa-solid fa-circle ${styles.windownNoti__btn_not_reading}`}
        ></i>
      )}
    </div>
  );
};

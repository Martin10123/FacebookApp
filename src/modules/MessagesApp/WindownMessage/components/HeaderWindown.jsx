import { photoUser, register } from "../../../../assets";
import { getTimeAgo } from "../../../../helpers";

import styles from "../windownMessage.module.css";

export const HeaderWindown = ({
  openMinWindownChat,
  openWindownChat,
  useSelectMessage,
}) => {
  const photoUrlUser = useSelectMessage.isGroup
    ? useSelectMessage.photoGroup || register
    : useSelectMessage.photoUrl;

  return (
    <div className={styles.windown_message__header_content}>
      <div className={styles.windown_message_photo_name}>
        <figure className={styles.windown_message_photo}>
          <img
            src={photoUrlUser || photoUser}
            alt="Foto de perfil del usuario"
          />

          {useSelectMessage.isActive && <i className="fa-solid fa-circle"></i>}
        </figure>

        <span className={styles.windown_message__lastTime_name}>
          <p>{useSelectMessage.displayName || useSelectMessage.nameGroup}</p>

          {!useSelectMessage.isGroup && (
            <p>
              {useSelectMessage.isActive
                ? "Activo(a) ahora"
                : `Hace ${getTimeAgo(useSelectMessage.activeAgo)}`}
            </p>
          )}
        </span>
      </div>

      <div className={styles.windown_message__content_options}>
        <i
          className="fa-solid fa-window-minimize"
          onClick={() =>
            openMinWindownChat(
              useSelectMessage.uid || useSelectMessage.idUniqGroup
            )
          }
        ></i>
        <i
          className="fa-solid fa-x"
          onClick={() =>
            openWindownChat(
              useSelectMessage.uid || useSelectMessage.idUniqGroup
            )
          }
        ></i>
      </div>
    </div>
  );
};

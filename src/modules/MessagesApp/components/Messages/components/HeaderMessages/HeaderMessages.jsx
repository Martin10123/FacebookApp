import { getTimeAgo } from "../../../../../../helpers";
import { InfoChat } from "../../../InformationUserOGroup";

import styles from "./headerMessages.module.css";

export const HeaderMessages = ({
  dataHeader,
  openInfoGroup,
  setopenInfoGroup,
  setOpenInfoUserToMessage,
  userSelected,
}) => {
  return (
    <>
      <div className={styles.message__nav}>
        <div className={styles.message__arrow_info_user}>
          <i
            className="fa-solid fa-arrow-left"
            onClick={() => setOpenInfoUserToMessage(null)}
          ></i>
          <figure className={styles.message__photo_user_nav}>
            <span className={styles.message__photoUser_active}>
              <img src={dataHeader.photoUrl} alt="Foto de perfil" />
              {dataHeader.isActive && <i className="fa-solid fa-circle"></i>}
            </span>
            <figcaption className={styles.message__figcaption}>
              <p>{dataHeader.displayName}</p>

              <span>
                {dataHeader.isActive
                  ? "Activo(a) ahora"
                  : `Hace ${getTimeAgo(dataHeader.activeAgo)}`}
              </span>
            </figcaption>
          </figure>
        </div>

        <div className={styles.message__options}>
          <i className="fa-solid fa-phone"></i>
          <i className="fa-solid fa-video"></i>
          <i
            className="fa-solid fa-circle-info"
            onClick={() => setopenInfoGroup(true)}
          ></i>
        </div>
      </div>

      {openInfoGroup && (
        <InfoChat
          isGroup={userSelected?.isGroup}
          setopenInfoGroup={setopenInfoGroup}
          setOpenInfoUserToMessage={setOpenInfoUserToMessage}
          userMessage={userSelected}
        />
      )}
    </>
  );
};

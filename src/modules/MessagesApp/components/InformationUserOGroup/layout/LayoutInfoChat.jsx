import { photoUser } from "../../../../../assets";
import { ListOptionsChat } from "../components";

import styles from "../infoComponents.module.css";

export const LayoutInfoChat = ({
  children,
  isActiveChat,
  isGroupOrChat,
  isUserWhoCreateGroup,
  nameChat,
  onOpenAddFriendOGoProfile,
  photoChat,
  setopenInfoGroup,
}) => {
  return (
    <section className={styles.info__container}>
      <div className={styles.info__content}>
        <div className={styles.info__nav}>
          <i
            className="fa-solid fa-arrow-left"
            onClick={() => setopenInfoGroup(false)}
          ></i>
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
        <div className={styles.info__content_photo_options}>
          <div className={styles.info__photo_name}>
            <figure className={styles.info__content_photo}>
              <img src={photoChat || photoUser} alt="Foto de perfil" />
              {isActiveChat && <i className="fa-solid fa-circle"></i>}
            </figure>

            <span className={styles.info__displayName_user}>{nameChat}</span>
          </div>

          <ListOptionsChat
            isGroup={isGroupOrChat}
            isUserWhoCreateGroup={isUserWhoCreateGroup}
            onOpenAddFriendOGoProfile={onOpenAddFriendOGoProfile}
          />
        </div>

        <div className={styles.info__change_chat}>
          <h3>Personalización</h3>

          <div className={styles.info__options_change_chat}>{children}</div>
        </div>
      </div>
    </section>
  );
};

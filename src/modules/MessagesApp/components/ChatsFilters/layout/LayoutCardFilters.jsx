import { getTimeAgo } from "../../../../../helpers";
import { PhotoUser } from "../components/PhotoUser";

import styles from "./layoutCard.module.css";

export const LayoutCardFilters = ({
  activeAgoUOG,
  dateCreateMessageUOG,
  displayNameUOG,
  isActiveUOG,
  isViewUOG,
  lastMessageUOG,
  onOpenChatUOG,
  photoUrlUOG,
  userWriteMessageUOG,
}) => {
  const isViewOrNot = { fontWeight: isViewUOG ? "300" : "bold" };

  return (
    <div className={styles.filters__list_item} onClick={onOpenChatUOG}>
      <PhotoUser
        height="fit-content"
        isActive={isActiveUOG}
        photoUrl={photoUrlUOG}
        activeAgo={activeAgoUOG}
        showName={false}
        showActiveAgo={true}
      />

      <div className={styles.filters__item_name}>
        <p style={isViewOrNot}>{displayNameUOG}</p>

        <span className={styles.filters__content_last_message}>
          <p className={styles.filters__last_message} style={isViewOrNot}>
            {userWriteMessageUOG !== null && (
              <>{userWriteMessageUOG ? "Tú: " : "Otro: "}</>
            )}

            {lastMessageUOG !== "" ? lastMessageUOG : "1 foto"}
          </p>

          <p style={isViewOrNot}>{getTimeAgo(dateCreateMessageUOG)}</p>
        </span>
      </div>
    </div>
  );
};

import { getTimeAgo } from "../../../../helpers";
import { PhotoUser } from "./PhotoUser";

import styles from "./chatsFilters.module.css";

export const CardFilterChat = ({
  infoUserActive,
  setOpenInfoUserToMessage,
  userChat,
  users,
}) => {
  const foundUserChat = users.filter((user) => userChat[0] === user.username);

  const { uidWhoWriteMessage, lastMessage, dateCreateMessage, isView } =
    userChat[1].infoUser;
  const userWriteMessage = uidWhoWriteMessage === infoUserActive.uid;

  const isViewOrNot = { fontWeight: isView ? "300" : "bold" };

  return (
    <>
      {foundUserChat.map((userFound) => (
        <div
          className={styles.filters__list_item}
          key={userFound.uid}
          onClick={() => setOpenInfoUserToMessage({ ...userFound })}
        >
          <PhotoUser
            height="fit-content"
            isActive={userFound.isActive}
            photoUrl={userFound?.photoUrl}
            activeAgo={userFound?.activeAgo}
            showName={false}
            showActiveAgo={true}
          />

          <div className={styles.filters__item_name}>
            <p style={isViewOrNot}>{userFound.displayName}</p>

            <span className={styles.filters__content_last_message}>
              <p className={styles.filters__last_message} style={isViewOrNot}>
                {userWriteMessage ? "Tú: " : "Otro: "}
                {lastMessage ? lastMessage : "1 foto"}
              </p>

              <p style={isViewOrNot}>{getTimeAgo(dateCreateMessage)}</p>
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

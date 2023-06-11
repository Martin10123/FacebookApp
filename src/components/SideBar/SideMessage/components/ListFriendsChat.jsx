import { CardChatMessage } from "./CardChatMessage";

import styles from "../sideMessage.module.css";

export const ListFriendsChat = ({
  infoUserActive,
  listUserActive,
  openWindownChat,
  users,
}) => {
  const usersListChat = users.filter((user) =>
    Object.entries(listUserActive[0] || {}).find(
      (chatUser) => user.username === chatUser[0]
    )
  );

  return (
    <div className={styles.sideMessage__container_friends}>
      <div className={styles.sideMessage__titles}>
        <p>Contactos</p>
      </div>
      <div className={styles.sideMessage__users_lists}>
        {usersListChat
          .sort((a, b) => b.isActive - a.isActive)
          .map(
            (friend) =>
              friend.uid != infoUserActive?.uid && (
                <CardChatMessage
                  displayName={friend.displayName}
                  isActive={friend.isActive}
                  key={friend.uid}
                  openWindownChat={openWindownChat}
                  otherData={friend}
                  photoUrl={friend.photoUrl}
                />
              )
          )}
      </div>
    </div>
  );
};

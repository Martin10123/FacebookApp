import { CardChatMessage } from "./CardChatMessage";

import styles from "../sideMessage.module.css";

export const ListFriendsChat = ({ users, infoUserActive, openWindownChat }) => {
  return (
    <div className={styles.sideMessage__container_friends}>
      <div className={styles.sideMessage__titles}>
        <p>Contactos</p>
      </div>
      <div className={styles.sideMessage__users_lists}>
        {users
          .sort((a, b) => b.isActive - a.isActive)
          .map(
            (friend) =>
              friend.uid != infoUserActive.uid && (
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

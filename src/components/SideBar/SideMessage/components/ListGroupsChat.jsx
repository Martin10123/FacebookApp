import { CardChatMessage } from "./CardChatMessage";
import { register } from "../../../../assets";

import styles from "../sideMessage.module.css";

export const ListGroupsChat = ({ listUserActive, openWindownChat }) => {
  return (
    <div className={styles.sideMessage__container_groups}>
      <div className={styles.sideMessage__titles}>
        <p>Grupos</p>
      </div>

      <div className={styles.sideMessage__users_lists}>
        {Object.entries(listUserActive[0]).map(
          (group) =>
            group[1].infoUser?.isGroup && (
              <CardChatMessage
                displayName={group[1].infoUser.nameGroup}
                key={group[0]}
                openWindownChat={openWindownChat}
                otherData={{
                  ...group[1].infoUser,
                  uid: group[1].infoUser.idUniqGroup,
                }}
                photoUrl={group[1].infoUser.photoGroup || register}
              />
            )
        )}
      </div>
    </div>
  );
};

import { ContentMessages, FormMessage } from "../components";
import { HeaderWindown } from "./components/HeaderWindown";

import styles from "./windownMessage.module.css";

export const WindownMessage = ({
  infoUserActive,
  listUserActive,
  openMinWindownChat,
  openWindownChat,
  uidSelectChat,
  users,
}) => {
  const friendSelect = users.find((user) => user.uid === uidSelectChat);
  const groupSelect = Object.entries(listUserActive[0]).find(
    (user) => user[0] === uidSelectChat
  );

  const useSelectMessage = friendSelect
    ? friendSelect
    : groupSelect[1].infoUser;

  return (
    <div className={styles.windown_message__container}>
      <div className={styles.windown_message__content}>
        <HeaderWindown
          openMinWindownChat={openMinWindownChat}
          openWindownChat={openWindownChat}
          useSelectMessage={useSelectMessage}
        />

        <div className={styles.windown_message__box_messages}>
          <ContentMessages
            imgDesk={true}
            infoUserActive={infoUserActive}
            userMessage={useSelectMessage}
          />
        </div>

        <FormMessage
          infoUserActive={infoUserActive}
          userMessage={useSelectMessage}
          isWindown={true}
        />
      </div>
    </div>
  );
};

import { ContentMessages, FormMessage, HeaderMessages } from "../components";
import { useHeaderMessages } from "../hooks";

import styles from "./messages.module.css";

export const Messages = ({
  infoUserActive,
  openInfoUserToMessage,
  setOpenInfoUserToMessage,
  users,
}) => {
  const { dataHeader, openInfoGroup, setopenInfoGroup, userSelected } =
    useHeaderMessages({
      infoUserActive,
      userMessage: openInfoUserToMessage,
      users,
    });

  return (
    <div className={styles.message__container}>
      <div className={styles.message__content}>
        <HeaderMessages
          dataHeader={dataHeader}
          openInfoGroup={openInfoGroup}
          setopenInfoGroup={setopenInfoGroup}
          setOpenInfoUserToMessage={setOpenInfoUserToMessage}
          userSelected={userSelected}
        />

        <ContentMessages
          infoUserActive={infoUserActive}
          userMessage={userSelected}
        />

        <FormMessage
          infoUserActive={infoUserActive}
          isWindown
          userMessage={userSelected}
        />
      </div>
    </div>
  );
};

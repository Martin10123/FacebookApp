import { WindownMessage } from "../../../modules/MessagesApp";
import { EventsBirthday } from "../../../modules/EventsBirthday/EventsBirthday";
import {
  BurbuChatMinWindown,
  ListBirthdays,
  ListFriendsChat,
  ListGroupsChat,
} from "./components";
import { useSideMessage } from "./hook/useSideMessage";

import styles from "./sideMessage.module.css";

export const SideMessage = () => {
  const {
    // Atributos
    contentChatsUser,
    infoUserActive,
    listUserActive,
    minWindownChat,
    openBirthdays,
    users,
    usersWhoBirthdayIsClose,

    // Metodos
    openMinWindownChat,
    openWindownChat,
    setOpenBirthdays,
  } = useSideMessage();

  return (
    <>
      <div className={styles.sideMessage__container}>
        <div className={styles.sideMessage__content}>
          <ListBirthdays
            setOpenBirthdays={setOpenBirthdays}
            usersWhoBirthdayIsClose={usersWhoBirthdayIsClose}
          />

          <div className={styles.sideMessage__contacts_users}>
            <ListFriendsChat
              infoUserActive={infoUserActive}
              listUserActive={listUserActive}
              openWindownChat={openWindownChat}
              users={users}
            />

            <ListGroupsChat
              listUserActive={listUserActive}
              openWindownChat={openWindownChat}
            />
          </div>
        </div>

        <div className={styles.sideMessage__content_windown_messages}>
          {contentChatsUser.map((contentChat) => (
            <WindownMessage
              infoUserActive={infoUserActive}
              key={contentChat}
              listUserActive={listUserActive}
              openMinWindownChat={openMinWindownChat}
              openWindownChat={openWindownChat}
              uidSelectChat={contentChat}
              users={users}
            />
          ))}
        </div>

        <div className={styles.sideMessage__content_min_windown}>
          {minWindownChat.map((minChat) => (
            <BurbuChatMinWindown
              key={minChat}
              listUserActive={listUserActive}
              minChat={minChat}
              openMinWindownChat={openMinWindownChat}
              users={users}
            />
          ))}
        </div>
      </div>

      {openBirthdays && (
        <EventsBirthday
          setOpenBirthdays={setOpenBirthdays}
          usersWhoBirthdayIsClose={usersWhoBirthdayIsClose}
        />
      )}
    </>
  );
};

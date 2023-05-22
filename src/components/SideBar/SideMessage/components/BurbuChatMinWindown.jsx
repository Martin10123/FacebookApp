import { photoUser, register } from "../../../../assets";

import styles from "../sideMessage.module.css";

export const BurbuChatMinWindown = ({
  users,
  listUserActive,
  openMinWindownChat,
  minChat,
}) => {
  const friendSelect = users.find((user) => user.uid === minChat);

  const groupSelect = Object.entries(listUserActive[0]).find(
    (user) => user[0] === minChat
  );

  const useSelectMessage = friendSelect
    ? friendSelect
    : groupSelect[1].infoUser;

  const photoUrlUser = useSelectMessage?.isGroup
    ? useSelectMessage.photoGroup || register
    : useSelectMessage.photoUrl || photoUser;

  return (
    <figure
      className={styles.sideMessage__min_windown_photo}
      onClick={() => openMinWindownChat(minChat)}
    >
      <img src={photoUrlUser} alt="Foto de perfil" />

      {!useSelectMessage.isGroup && (
        <>
          {useSelectMessage.isActive && <i className="fa-solid fa-circle"></i>}
        </>
      )}
    </figure>
  );
};

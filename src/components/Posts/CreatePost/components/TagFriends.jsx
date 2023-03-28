import { useContext } from "react";
import { photoUser } from "../../../../assets";
import { AuthUserContext } from "../../../../context";

import styles from "./tags.module.css";

export const TagFriends = ({
  listTagFriends,
  setListTagFriends,
  setOpenTagFriends,
}) => {
  const { friendsListCurrentUser } = useContext(AuthUserContext);
  const isFriendSelected = listTagFriends.map((friend) => friend.uidUser);

  const onSelectFriendTag = ({ displayName, uidUser, username }) => {
    if (isFriendSelected.includes(uidUser)) {
      setListTagFriends(
        listTagFriends.filter((hobby) => hobby.uidUser !== uidUser)
      );
    } else {
      setListTagFriends([
        ...listTagFriends,
        { displayName, uidUser, username },
      ]);
    }
  };

  return (
    <div className={styles.tag__container}>
      <div className={styles.tag__content}>
        <div className={styles.tag__nav}>
          <div
            className={styles.tag__btn_close}
            onClick={() => setOpenTagFriends(false)}
          >
            <i className="fa-solid fa-arrow-left"></i>
          </div>
          <p>Etiquetar amigos</p>
          <div></div>
        </div>

        <div className={styles.tag__input_form}>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Buscar..." />
        </div>

        <h2>Todos los amigos</h2>

        <div className={styles.tag__content_users}>
          {friendsListCurrentUser.map((friend) => (
            <div key={friend.uid} className={styles.tag__info_user}>
              <figure className={styles.tag__user_img_name}>
                <img
                  src={friend.photoUrl || photoUser}
                  alt="Foto de perfil del usuario"
                />
                <figcaption>{friend.displayName}</figcaption>
              </figure>

              <div
                className={`${styles.tag__check_user} ${
                  isFriendSelected.includes(friend.uid)
                    ? styles.tag__check_active
                    : ""
                }`}
                onClick={() =>
                  onSelectFriendTag({
                    displayName: friend.displayName,
                    uidUser: friend.uid,
                    username: friend.username,
                  })
                }
              >
                <i className="fa-solid fa-check"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

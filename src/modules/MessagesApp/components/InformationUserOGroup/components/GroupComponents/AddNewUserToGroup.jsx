import { useState } from "react";
import { doc, writeBatch } from "firebase/firestore";

import { photoUser } from "../../../../../../assets";
import { LayoutGroup } from "./LayoutGroup";
import { firebaseDB } from "../../../../../../services";

import styles from "./groupComponents.module.css";

export const AddNewUserToGroup = ({
  setOpenAddNewUser,
  userMessage,
  users,
}) => {
  const [startLoading, setStartLoading] = useState(false);
  const { usersFriends, idUniqGroup } = userMessage;

  const listUsersInGroup = users.filter(
    (user) => !usersFriends.includes(user.uid)
  );

  const onAddNewMember = async (uidMember) => {
    setStartLoading(true);
    try {
      const newMemberAdd = [...usersFriends, uidMember];

      const batch = writeBatch(firebaseDB);

      for (const userUid of newMemberAdd) {
        const userChatRef = doc(firebaseDB, "usersChats", userUid);

        batch.update(userChatRef, {
          [idUniqGroup + ".infoUser"]: {
            ...userMessage,
            usersFriends: newMemberAdd,
          },
        });
      }

      await batch.commit();
    } catch (error) {
      console.error(error);
    } finally {
      setStartLoading(false);
    }
  };

  return (
    <LayoutGroup
      onCloseModal={() => setOpenAddNewUser(false)}
      nameModal="Agregar nuevos miembros"
    >
      <div className={styles.list__members_in_group}>
        {listUsersInGroup.length === 0 && (
          <p>No tienes más amigos a los cuales agregar al grupo</p>
        )}
        {listUsersInGroup.length !== 0 &&
          listUsersInGroup.map((userInGroup) => (
            <figure
              className={styles.photo__user_in_group}
              key={userInGroup.uid}
            >
              <div className={styles.content_photo_name}>
                <img
                  alt="Foto de perfil"
                  className={styles.photo__user}
                  src={userInGroup.photoUrl || photoUser}
                />

                <figcaption className={styles.name_photo_user}>
                  {userInGroup.displayName}
                  <span>Amigo</span>
                </figcaption>
              </div>

              {!usersFriends.includes(userInGroup.uid) && (
                <i
                  className="fa-solid fa-user-plus"
                  onClick={() => onAddNewMember(userInGroup.uid)}
                  style={{ pointerEvents: startLoading ? "none" : "" }}
                ></i>
              )}
            </figure>
          ))}
      </div>
    </LayoutGroup>
  );
};

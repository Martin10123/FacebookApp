import { useState } from "react";
import { deleteField, doc, updateDoc, writeBatch } from "firebase/firestore";

import { photoUser } from "../../../../../../assets";
import { LayoutGroup } from "./LayoutGroup";
import { firebaseDB } from "../../../../../../services";
import { SureDelete } from "../../../../../../components/SureDelete/SureDelete";

import styles from "./groupComponents.module.css";

export const ViewMembersGroup = ({
  isUserWhoCreateGroup,
  setOpenViewUsersInGroup,
  userMessage,
  users,
}) => {
  const { usersFriends, uidCreateGroup, idUniqGroup } = userMessage;
  const [openDeleteMember, setOpenDeleteMember] = useState(false);

  const [{ displayNameUser, uidUser }, setInfoMember] = useState({
    displayNameUser: "",
    uidUser: "",
  });

  const listUsersInGroup = users.filter((user) =>
    usersFriends.includes(user.uid)
  );

  const onOpenSureDelete = (uid, name) => {
    setOpenDeleteMember(true);

    setInfoMember({ displayNameUser: name, uidUser: uid });
  };

  const onDeleteMember = async (uidUser) => {
    try {
      const newUsersFriends = usersFriends.filter(
        (userFriend) => userFriend !== uidUser
      );

      const batch = writeBatch(firebaseDB);

      const docRefUser = doc(firebaseDB, "usersChats", uidUser);

      await updateDoc(docRefUser, {
        [idUniqGroup]: deleteField(),
      });

      for (const uidNewUser of newUsersFriends) {
        const userChatRef = doc(firebaseDB, "usersChats", uidNewUser);

        batch.update(userChatRef, {
          [idUniqGroup + ".infoUser"]: {
            ...userMessage,
            usersFriends: newUsersFriends,
          },
        });
      }

      await batch.commit();
    } catch (error) {
      console.error(error);
    } finally {
      setOpenDeleteMember(false);
    }
  };

  return (
    <>
      <LayoutGroup
        onCloseModal={() => setOpenViewUsersInGroup(false)}
        nameModal="Miembros del grupo"
      >
        <div className={styles.list__members_in_group}>
          {listUsersInGroup.map((userInGroup) => (
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

                  <span>
                    {userInGroup.uid === uidCreateGroup
                      ? "Administrador"
                      : "Miembro"}
                  </span>
                </figcaption>
              </div>

              {isUserWhoCreateGroup && (
                <>
                  {userInGroup.uid !== uidCreateGroup && (
                    <i
                      className="fa-solid fa-user-xmark"
                      onClick={() =>
                        onOpenSureDelete(
                          userInGroup.uid,
                          userInGroup.displayName
                        )
                      }
                    ></i>
                  )}
                </>
              )}
            </figure>
          ))}
        </div>
      </LayoutGroup>

      {openDeleteMember && (
        <SureDelete
          buttonText="Eliminar"
          confirmationMessage={`¿Estas seguro que quieres eliminar a ${displayNameUser} del grupo?`}
          onClose={() => setOpenDeleteMember(false)}
          onDelete={() => onDeleteMember(uidUser)}
        />
      )}
    </>
  );
};

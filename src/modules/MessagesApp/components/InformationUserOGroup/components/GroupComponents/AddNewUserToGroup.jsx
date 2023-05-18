import { photoUser } from "../../../../../../assets";
import { LayoutGroup } from "./LayoutGroup";
import { useAddNewUserGroup } from "../../hooks";

import styles from "./groupComponents.module.css";

export const AddNewUserToGroup = ({
  setOpenAddNewUser,
  userMessage,
  users,
}) => {
  const {
    // Atributos
    listUsersInGroup,
    startLoading,
    usersFriends,
    // Metodos
    onAddNewMember,
  } = useAddNewUserGroup({ userMessage, users });

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

import { photoUser } from "../../../../../../assets";
import { LayoutGroup } from "./LayoutGroup";
import { SureDelete } from "../../../../../../components/SureDelete/SureDelete";
import { useViewMembersGroup } from "../../hooks";

import styles from "./groupComponents.module.css";

export const ViewMembersGroup = ({
  isUserWhoCreateGroup,
  setOpenViewUsersInGroup,
  userMessage,
  users,
}) => {
  const {
    // Atributos
    displayNameUser,
    listUsersInGroup,
    uidCreateGroup,
    openDeleteMember,
    uidUser,

    // Metodos
    onDeleteMember,
    onOpenSureDelete,
    setOpenDeleteMember,
  } = useViewMembersGroup({ userMessage, users });

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

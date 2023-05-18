import {
  AddNewUserToGroup,
  ChangeNameGroup,
  ChangePhotoGroup,
  ItemChangeChat,
  ViewMembersGroup,
} from "../components";
import { LayoutInfoChat } from "../layout/LayoutInfoChat";
import { SureDelete } from "../../../../../components/SureDelete/SureDelete";
import { useInfoGroup } from "../hooks";
import { register } from "../../../../../assets";

export const InfoGroup = ({
  infoUserActive,
  setopenInfoGroup,
  setOpenInfoUserToMessage,
  userMessage,
  users,
}) => {
  const {
    // Atributos
    isUserInChat,
    isUserWhoCreateGroup,
    nameGroup,
    openAddNewUser,
    openChangeName,
    openChangePhotoGroup,
    openGoOutGroup,
    openViewUsersInGroup,
    photoGroup,
    thereUserActive,

    // Metodos
    onGoOutGroup,
    setOpenAddNewUser,
    setOpenChangeName,
    setOpenChangePhotoGroup,
    setOpenGoOutGroup,
    setOpenViewUsersInGroup,
  } = useInfoGroup({
    infoUserActive,
    setopenInfoGroup,
    setOpenInfoUserToMessage,
    userMessage,
    users,
  });

  return (
    <>
      <LayoutInfoChat
        isActiveChat={thereUserActive}
        isGroupOrChat={true}
        isUserWhoCreateGroup={isUserWhoCreateGroup}
        nameChat={nameGroup}
        onOpenAddFriendOGoProfile={() => setOpenAddNewUser(true)}
        photoChat={photoGroup || register}
        setopenInfoGroup={setopenInfoGroup}
      >
        {isUserInChat && (
          <ItemChangeChat
            iconItem="fa-regular fa-images"
            nameItem="Cambiar foto del grupo"
            onClick={() => setOpenChangePhotoGroup(true)}
          />
        )}

        {isUserInChat && (
          <ItemChangeChat
            iconItem="fa-regular fa-pen-to-square"
            nameItem="Cambiar nombre"
            onClick={() => setOpenChangeName(true)}
          />
        )}

        {isUserInChat && (
          <ItemChangeChat
            iconItem="fa-solid fa-users-line"
            nameItem="Ver miembros"
            onClick={() => setOpenViewUsersInGroup(true)}
          />
        )}

        {isUserWhoCreateGroup && (
          <ItemChangeChat
            iconItem="fa-solid fa-user-minus"
            nameItem="Eliminar miembro"
            onClick={() => setOpenViewUsersInGroup(true)}
          />
        )}

        <ItemChangeChat
          colorItem={true}
          iconItem="fa-solid fa-arrow-right-to-bracket"
          nameItem={!isUserInChat ? "Salir de este chat" : "Abandonar grupo"}
          onClick={() => setOpenGoOutGroup(true)}
        />
      </LayoutInfoChat>

      {openAddNewUser && (
        <AddNewUserToGroup
          setOpenAddNewUser={setOpenAddNewUser}
          userMessage={userMessage}
          users={users}
        />
      )}

      {openChangePhotoGroup && (
        <ChangePhotoGroup
          setOpenChangePhotoGroup={setOpenChangePhotoGroup}
          userMessage={userMessage}
        />
      )}

      {openChangeName && (
        <ChangeNameGroup
          setOpenChangeName={setOpenChangeName}
          userMessage={userMessage}
        />
      )}

      {openViewUsersInGroup && (
        <ViewMembersGroup
          isUserWhoCreateGroup={isUserWhoCreateGroup}
          setOpenViewUsersInGroup={setOpenViewUsersInGroup}
          userMessage={userMessage}
          users={users}
        />
      )}

      {openGoOutGroup && (
        <SureDelete
          buttonText="Abandonar"
          confirmationMessage={`¿Estas seguro que quieres abandonar este grupo?`}
          onClose={() => setOpenGoOutGroup(false)}
          onDelete={onGoOutGroup}
        />
      )}
    </>
  );
};

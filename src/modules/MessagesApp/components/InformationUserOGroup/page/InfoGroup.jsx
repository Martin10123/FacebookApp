import { useState } from "react";
import {
  AddNewUserToGroup,
  ChangeNameGroup,
  ChangePhotoGroup,
  ItemChangeChat,
  ViewMembersGroup,
} from "../components";
import { LayoutInfoChat } from "../layout/LayoutInfoChat";
import { SureDelete } from "../../../../../components/SureDelete/SureDelete";
import { deleteField, doc, updateDoc, writeBatch } from "firebase/firestore";
import { firebaseDB } from "../../../../../services";

export const InfoGroup = ({
  infoUserActive,
  setopenInfoGroup,
  setOpenInfoUserToMessage,
  userMessage,
  users,
}) => {
  const [openAddNewUser, setOpenAddNewUser] = useState(false);
  const [openChangeName, setOpenChangeName] = useState(false);
  const [openChangePhotoGroup, setOpenChangePhotoGroup] = useState(false);
  const [openDeleteGroup, setOpenDeleteGroup] = useState(false);
  const [openGoOutGroup, setOpenGoOutGroup] = useState(false);
  const [openViewUsersInGroup, setOpenViewUsersInGroup] = useState(false);

  const { usersFriends, nameGroup, photoGroup, idUniqGroup, uidCreateGroup } =
    userMessage;

  const isUserWhoCreateGroup = infoUserActive.uid === uidCreateGroup;

  const thereUserActive = users.some((user) => {
    if (usersFriends.includes(user.uid)) {
      if (user.isActive) {
        return true;
      } else {
        return false;
      }
    }
  });

  const onGoOutGroup = async () => {
    try {
      const newUsersFriends = usersFriends.filter(
        (userFriend) => userFriend !== infoUserActive.uid
      );

      setOpenInfoUserToMessage(null);

      const batch = writeBatch(firebaseDB);

      const docRefUser = doc(firebaseDB, "usersChats", infoUserActive.uid);

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
      setopenInfoGroup(false);
    } catch (error) {
      console.error(error);
    } finally {
      setOpenGoOutGroup(false);
    }
  };

  const onDeleteGroup = async () => {
    try {
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <LayoutInfoChat
        isActiveChat={thereUserActive}
        isGroupOrChat={true}
        nameChat={nameGroup}
        photoChat={photoGroup}
        setopenInfoGroup={setopenInfoGroup}
        onOpenAddFriendOGoProfile={() => setOpenAddNewUser(true)}
      >
        <ItemChangeChat
          iconItem="fa-regular fa-images"
          nameItem="Cambiar foto del grupo"
          onClick={() => setOpenChangePhotoGroup(true)}
        />

        <ItemChangeChat
          iconItem="fa-regular fa-pen-to-square"
          nameItem="Cambiar nombre"
          onClick={() => setOpenChangeName(true)}
        />

        <ItemChangeChat
          iconItem="fa-solid fa-users-line"
          nameItem="Ver miembros"
          onClick={() => setOpenViewUsersInGroup(true)}
        />

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
          nameItem="Abandonar grupo"
          onClick={() => setOpenGoOutGroup(true)}
        />

        {isUserWhoCreateGroup && (
          <ItemChangeChat
            colorItem={true}
            iconItem="fa-solid fa-trash"
            nameItem="Borrar grupo"
            onClick={() => setOpenDeleteGroup(true)}
          />
        )}
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
          buttonText="Eliminar"
          confirmationMessage={`¿Estas seguro que quieres abandonar este grupo?`}
          onClose={() => setOpenGoOutGroup(false)}
          onDelete={onGoOutGroup}
        />
      )}

      {openDeleteGroup && (
        <SureDelete
          buttonText="Eliminar"
          confirmationMessage={`¿Estas seguro que quieres borrar este grupo?`}
          onClose={() => setOpenDeleteGroup(false)}
        />
      )}
    </>
  );
};

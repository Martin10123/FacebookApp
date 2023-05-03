import { ItemChangeChat } from "../components";
import { LayoutInfoChat } from "../layout/LayoutInfoChat";
import { SureDelete } from "../../../../../components/SureDelete/SureDelete";
import { useInfoUser } from "../hooks";

export const InfoUser = ({
  infoUserActive,
  isGroup,
  setopenInfoGroup,
  setOpenInfoUserToMessage,
  userMessage,
}) => {
  const {
    // Atributos
    displayName,
    isActive,
    openSureDelete,
    openSureDeleteChat,
    username,

    // Metodos
    navigate,
    onDeleteChat,
    setOpenSureDelete,
    setOpenSureDeleteChat,
  } = useInfoUser({
    infoUserActive,
    setopenInfoGroup,
    setOpenInfoUserToMessage,
    userMessage,
  });

  return (
    <>
      <LayoutInfoChat
        setopenInfoGroup={setopenInfoGroup}
        isActiveChat={isActive}
        isGroupOrChat={isGroup}
        nameChat={displayName}
        photoChat={userMessage?.photoUrl}
        onOpenAddFriendOGoProfile={() => navigate(`/${username}`)}
      >
        <ItemChangeChat
          iconItem="fa-solid fa-user"
          nameItem="Ver perfil"
          onClick={() => navigate(`/${username}`)}
        />

        <ItemChangeChat
          iconItem="fa-solid fa-trash"
          nameItem="Eliminar chat"
          colorItem={true}
          onClick={() => setOpenSureDeleteChat(true)}
        />
      </LayoutInfoChat>

      {openSureDeleteChat && (
        <SureDelete
          buttonText="Eliminar"
          confirmationMessage="¿Estas seguro que quieres eliminar este chat?"
          onClose={() => setOpenSureDeleteChat(false)}
          onDelete={onDeleteChat}
        />
      )}
    </>
  );
};

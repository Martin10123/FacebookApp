import { PhotoUser } from "../components/PhotoUser";
import { CreateGroup } from "../../CreateGroup/CreateGroup";
import { CardFilterChat, CardFilterGroups } from "../components";
import { useChatsFilters } from "../../../hook";

import styles from "./chatsFilters.module.css";
import { usePreventScroll } from "../../../../../hooks";

export const ChatsFilters = ({
  setOpenInfoUserToMessage,
  setOpenChats,
  infoUserActive,
  users,
}) => {
  usePreventScroll();
  const {
    // Atributos
    openCreateGroup,
    searchFriend,
    searchFriendInTheListCarrousel,
    searchFriendInTheListChats,

    // Metodos
    onCloseChats,
    setOpenCreateGroup,
    setSearchFriend,
  } = useChatsFilters({ infoUserActive, users, setOpenChats });

  return (
    <>
      <div className={styles.filters__container}>
        <div className={styles.filters__content}>
          <div className={styles.filters__nav}>
            <i className="fa-solid fa-arrow-left" onClick={onCloseChats}></i>

            <h2>Chats</h2>

            <span
              className={styles.filters__icon}
              onClick={() => setOpenCreateGroup(true)}
            >
              <i className="fa-solid fa-users-line"></i>
            </span>
          </div>

          <div className={styles.filters__content_users}>
            <div className={styles.filters__input_form}>
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                onChange={({ target }) => setSearchFriend(target.value)}
                placeholder="Buscar..."
                value={searchFriend}
              />
            </div>

            {searchFriendInTheListCarrousel.length !== 0 && (
              <div className={styles.filters__contain_scroll_users_actives}>
                {searchFriendInTheListCarrousel.map((userCarru) => (
                  <PhotoUser
                    isActive={userCarru.isActive}
                    key={userCarru.uid}
                    nameUser={userCarru.displayName}
                    onGoToMessage={() =>
                      setOpenInfoUserToMessage({ ...userCarru })
                    }
                    photoUrl={userCarru?.photoUrl}
                    showName={true}
                  />
                ))}
              </div>
            )}

            <div className={styles.filters__list_users_chats}>
              {searchFriendInTheListChats
                ?.sort((a, b) => b[1].date - a[1].date)
                ?.map((userChat) =>
                  userChat[1].infoUser.isGroup ? (
                    <CardFilterGroups
                      key={userChat[0]}
                      setOpenInfoUserToMessage={setOpenInfoUserToMessage}
                      userChat={userChat}
                      users={users}
                    />
                  ) : (
                    <CardFilterChat
                      infoUserActive={infoUserActive}
                      key={userChat[0]}
                      setOpenInfoUserToMessage={setOpenInfoUserToMessage}
                      userChat={userChat}
                      users={users}
                    />
                  )
                )}
            </div>
          </div>
        </div>
      </div>

      {openCreateGroup && (
        <CreateGroup
          infoUserActive={infoUserActive}
          setOpenCreateGroup={setOpenCreateGroup}
        />
      )}
    </>
  );
};

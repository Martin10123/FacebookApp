import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthUserContext } from "../../../context";
import { useChatsFilters } from "../hook";
import { CardWindownChats } from "./components/CardWindownChats";
import { useSideMessage } from "../../../components";

import styles from "./windownChats.module.css";

export const WindownChats = () => {
  const { infoUserActive, users } = useContext(AuthUserContext);

  const {
    listUserActive,
    searchFriend,
    searchFriendInTheListChats,
    setSearchFriend,
  } = useChatsFilters({
    infoUserActive,
    users,
    setOpenChats: () => {},
  });

  const { openWindownChat } = useSideMessage();

  return (
    <div className={styles.windownChats__container}>
      <div className={styles.windownChats__content}>
        <div className={styles.windownChats__nav}>
          <h3>Chats</h3>

          <div className={styles.windownChats__options}>
            <i className="fa-solid fa-ellipsis"></i>
            <i className="fa-solid fa-maximize"></i>
            <i className="fa-solid fa-pen-to-square"></i>
          </div>
        </div>

        <div className={styles.windownChats__search}>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            onChange={({ target }) => setSearchFriend(target.value)}
            placeholder="Buscar chat..."
            type="text"
            value={searchFriend}
          />
        </div>

        <div className={styles.windownChats__list_users}>
          {searchFriendInTheListChats
            ?.sort((a, b) => b[1].date - a[1].date)
            ?.map((userChat) => (
              <CardWindownChats
                infoUserActive={infoUserActive}
                key={userChat[0]}
                listUserActive={listUserActive}
                openWindownChat={openWindownChat}
                userChat={userChat[1].infoUser}
                usernameUniq={userChat[0]}
                users={users}
              />
            ))}
        </div>

        <Link className={styles.windownChats__view_more} to="/chats">
          <p>Ver todos en messenger</p>
        </Link>
      </div>
    </div>
  );
};

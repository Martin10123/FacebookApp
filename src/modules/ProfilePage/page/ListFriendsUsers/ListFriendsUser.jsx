import { useState } from "react";
import { Link } from "react-router-dom";

import { photoUser } from "../../../../assets";
import { SearchFriends } from "../../../../components";

import styles from "./listFriendsUsers.module.css";

export const ListFriendsUser = ({
  friendsList,
  otherUserFriendsList,
  setOpenYourFriends,
}) => {
  const [openSearchFriends, setOpenSearchFriends] = useState(false);

  return (
    <>
      <div className={styles.profile__content_info_friends}>
        <div className={styles.profile__content_titles}>
          <span className={styles.profile__span_title_friend}>
            <p>Amigos</p>
            <p>{otherUserFriendsList?.friendsList?.length} amigos</p>
          </span>

          <button
            className={styles.profile__btn_find_friends}
            onClick={() => setOpenSearchFriends(true)}
          >
            Buscar amigos
          </button>
        </div>

        <div className={styles.profile__all_info_friends}>
          <div className={styles.profile__list_friends}>
            {friendsList?.map((friend) => (
              <Link to={`/${friend.username}`} key={friend.uid}>
                <figure className={styles.profile__friend_info}>
                  <img
                    src={friend.photoUrl || photoUser}
                    alt="Foto de perfil del usuario"
                  />
                  <p>{friend.displayName}</p>
                </figure>
              </Link>
            ))}
          </div>
          <button
            className={styles.profile__see_all_friends}
            onClick={() => setOpenYourFriends(true)}
          >
            Ver todos los amigos
          </button>
        </div>
      </div>

      {openSearchFriends && (
        <SearchFriends setOpenSearchFriends={setOpenSearchFriends} />
      )}
    </>
  );
};

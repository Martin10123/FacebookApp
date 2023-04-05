import { photoUser } from "../../../../assets";
import { InputForm } from "../../../Auth";
import { useYourFriends } from "./useYourFriends";

import styles from "./yourFriends.module.css";

export const YourFriends = ({
  currentUserFriendsList,
  friendsList,
  matchedUser,
  otherUserFriendsList,
  searchFriendListByUid,
  setOpenYourFriends,
}) => {
  const {
    countMutualFriends,
    inputForm,
    onGoToProfile,
    searchFriendInTheList,
    setInputForm,
  } = useYourFriends({
    currentUserFriendsList,
    searchFriendListByUid,
    setOpenYourFriends,
    friendsList,
  });

  return (
    <div className={styles.list_friends__container}>
      <div className={styles.list_friends__content}>
        <div className={styles.list_friends__nav}>
          <span className={styles.list_friends__name_icon}>
            <i
              className="fa-solid fa-arrow-left"
              onClick={() => setOpenYourFriends(false)}
            ></i>
            <p>{matchedUser.displayName}</p>
          </span>

          <i className="fa-solid fa-magnifying-glass"></i>
        </div>

        <div className={styles.list_friends__input_search}>
          <InputForm
            onChange={({ target }) => setInputForm(target.value)}
            placeholder="Buscar amigos..."
            styleIcon="fa-solid fa-magnifying-glass"
            value={inputForm}
          />
        </div>

        <div className={styles.list_friends__content_users}>
          <p className={styles.list_friends__count_friends}>
            {otherUserFriendsList?.friendsList?.length} amigos
          </p>

          {searchFriendInTheList?.map((friend) => (
            <div
              className={styles.list_friends__info_user}
              key={friend.uid}
              onClick={() => onGoToProfile(friend.username)}
            >
              <figure className={styles.list_friends__photo}>
                <img
                  src={friend.photoUrl || photoUser}
                  alt="Foto de perfil del usuario"
                />
                <figcaption className={styles.list_friends__fig_name}>
                  <p>{friend.displayName}</p>
                  <span>{countMutualFriends(friend.uid)} amigos en común</span>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

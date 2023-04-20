import { photoUser } from "../../../assets";
import { useAddNewFriends } from "../../../modules/ProfilePage/hook";

import styles from "./friendsRequest.module.css";

export const CardFriendRequest = ({ countMutualFriends, user }) => {
  const { onAcceptRequestOfFriend, onRechacedRequestOfFriend } =
    useAddNewFriends({ matchedUser: user });

  return (
    <li className={styles.friends__li}>
      <figure className={styles.friends__img_user}>
        <img src={user.photoUrl || photoUser} alt="Foto de perfil" />
      </figure>
      <div className={styles.friends__content_user_info}>
        <p>{user.displayName}</p>
        <p>{countMutualFriends(user.uid) || 0} amigos en común</p>
        <div className={styles.friends__content_buttons}>
          <button
            onClick={() => onAcceptRequestOfFriend({ uidOtherUser: user.uid })}
          >
            Confirmar
          </button>
          <button
            onClick={() =>
              onRechacedRequestOfFriend({ uidOtherUser: user.uid })
            }
          >
            Eliminar
          </button>
        </div>
      </div>
    </li>
  );
};

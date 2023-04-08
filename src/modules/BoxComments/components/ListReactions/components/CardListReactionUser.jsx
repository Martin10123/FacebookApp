import { Link } from "react-router-dom";
import { photoUser } from "../../../../../assets";
import { ButtonsAddFriend } from "./ButtonsAddFriend";
import { useCardListReactionUser } from "../../../hooks";

import styles from "../listReactions.module.css";

export const CardListReactionUser = ({
  friendsEachUsers,
  infoUserActive,
  userReaction,
}) => {
  const {
    isCurrentUserInListFriendsOtherUser,
    isCurrentUserInListReceivedOtherUser,
    isOtherUserInListReceivedCurrentUser,
    isOtherUserInListRequestSent,
    onAddNewFriend,
  } = useCardListReactionUser({
    friendsEachUsers,
    infoUserActive,
    uidUser: userReaction.uid,
  });

  return (
    <div className={styles.list_reactions__user}>
      <Link
        to={`/${userReaction.username}`}
        className={styles.list_reactions__info_user}
      >
        <figure className={styles.list_reactions__photo}>
          <img
            src={userReaction.photoUrl || photoUser}
            alt="Foto perfil usuario"
          />
          <img
            className={styles.list_reactions__img_reac}
            src={userReaction.reactionImg}
            alt="Foto del emoji"
          />
        </figure>
        <p>{userReaction.displayName}</p>
      </Link>

      {infoUserActive.uid !== userReaction.uid && (
        <ButtonsAddFriend
          isCurrentUserInListFriendsOtherUser={
            isCurrentUserInListFriendsOtherUser
          }
          isCurrentUserInListReceivedOtherUser={
            isCurrentUserInListReceivedOtherUser
          }
          isOtherUserInListReceivedCurrentUser={
            isOtherUserInListReceivedCurrentUser
          }
          isOtherUserInListRequestSent={isOtherUserInListRequestSent}
          onAddNewFriend={onAddNewFriend}
        />
      )}
    </div>
  );
};

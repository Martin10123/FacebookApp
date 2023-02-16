import { man } from "../../../images";

const CardFriendRequest = ({
  styles,
  friend,
  acceptRequest,
  rechacedRequest,
  infoUserActive,
  handleGoToProfile,
}) => {
  const countFriendSimilar = friend.friendsList.filter((friends1) =>
    infoUserActive.friendsList.includes(friends1)
  ).length;

  return (
    <li key={friend.id} className={styles.friends__li}>
      <figure
        className={styles.friends__img_user}
        onClick={() => handleGoToProfile(friend.username)}
      >
        {friend.photo ? (
          <img src={friend.photo} alt="Foto de perfil" />
        ) : (
          <img src={man} alt="Foto de perfil" />
        )}
      </figure>
      <div className={styles.friends__content_user_info}>
        <p onClick={() => handleGoToProfile(friend.username)}>{friend.name}</p>
        <p>{countFriendSimilar} amigos en común</p>
        <div className={styles.friends__content_buttons}>
          <button onClick={() => acceptRequest(friend.id, friend.uid)}>
            Confirmar
          </button>
          <button onClick={() => rechacedRequest(friend.id, friend.uid)}>
            Eliminar
          </button>
        </div>
      </div>
    </li>
  );
};

export default CardFriendRequest;

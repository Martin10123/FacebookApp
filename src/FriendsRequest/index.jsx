import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../../firebase/firebase";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";

import { BiArrowBack } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";

import SearchFriends from "../SearchFriends";
import { GetUsers } from "../../../context";
import CardFriendRequest from "./CardFriendRequest";
import { saveNotification } from "../../../helpers/saveNotification";

import styles from "./friendsRequest.module.css";

const FriendsRequest = () => {
  const navigate = useNavigate();
  const { friendsListRequest, infoUserActive } = useContext(GetUsers);
  const [first, setfirst] = useState(false);

  const returnButton = () => {
    navigate(-1);
  };

  const handleGoToProfile = (username) => {
    navigate(`/${username}`);
  };

  // Busca los datos del usuario que le envio la solicitud al usuario activo

  const acceptRequest = async (IDOtherUser, UIDOtherUser) => {
    try {
      // Agregamos al usuario activo a la lista de amigos del usuario que envio la solicitud (OTRO USUARIO)
      await updateDoc(doc(db, "users", IDOtherUser), {
        friendsList: arrayUnion(infoUserActive.uid),
      });

      // Agregamos al usuario que envio la solicitud (OTRO USUARIO) a la lista de amigos del usuario activo

      await updateDoc(doc(db, "users", infoUserActive.id), {
        friendsList: arrayUnion(UIDOtherUser),
      });

      // Eliminamos la solicitud (UID) del otro usuario (OTRO USUARIO) de la lista de solicitudes recividas

      await updateDoc(doc(db, "users", infoUserActive.id), {
        requestReceived: arrayRemove(UIDOtherUser),
      });

      // Eliminamos la solicitud (UID) del usuario activo de la lista de solicitudes enviadas del (OTRO USUARIO)

      await updateDoc(doc(db, "users", IDOtherUser), {
        requestSent: arrayRemove(infoUserActive.uid),
      });

      await saveNotification(
        infoUserActive,
        { uid: UIDOtherUser },
        "acceptRequest"
      );
    } catch (error) {
      console.log(error);
    }
  };

  const rechacedRequest = async (IDOtherUser, UIDOtherUser) => {
    try {
      // Eliminamos la solicitud (UID) del usuario activo de la lista de solicitudes enviadas del (OTRO USUARIO)

      await updateDoc(doc(db, "users", IDOtherUser), {
        requestSent: arrayRemove(infoUserActive.uid),
      });

      // Eliminamos la solicitud (UID) del otro usuario (OTRO USUARIO) de la lista de solicitudes recividas

      await updateDoc(doc(db, "users", infoUserActive.id), {
        requestReceived: arrayRemove(UIDOtherUser),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section
        className={`${styles.friends__container} ${
          infoUserActive?.isDark && styles.dark
        }`}
      >
        <div className={styles.friends__box}>
          <div className={styles.friends__header}>
            <BiArrowBack onClick={returnButton} />
            <button className={styles.friends__search}>
              <FaSearch onClick={() => setfirst(true)} />
            </button>
          </div>
          <div className={styles.friends__buttons_view_friends}>
            <button>Sugerencias</button>
            <button>Tus amigos</button>
          </div>
          <div className={styles.friends__requests}>
            <h1>
              Solicitudes de amistad <span>{friendsListRequest?.length}</span>
            </h1>
            <div className={styles.friends__list}>
              <ul className={styles.friends__ul}>
                {friendsListRequest?.map((friend) => (
                  <CardFriendRequest
                    key={friend.id}
                    styles={styles}
                    friend={friend}
                    infoUserActive={infoUserActive}
                    acceptRequest={acceptRequest}
                    rechacedRequest={rechacedRequest}
                    handleGoToProfile={handleGoToProfile}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {first && <SearchFriends setLookinForFriends={setfirst} />}
    </>
  );
};

export default FriendsRequest;

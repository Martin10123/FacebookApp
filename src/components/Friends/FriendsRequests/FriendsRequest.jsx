import { CardFriendRequest } from "./CardFriendRequest";
import { useFriendsRequest } from "./hook/useFriendsRequest";

import styles from "./friendsRequest.module.css";

export const FriendsRequest = () => {
  const { countMutualFriends, listRequest, listUserActive } =
    useFriendsRequest();

  return (
    <section className={styles.friends__container}>
      <div className={styles.friends__box}>
        <h2 className={styles.friends__title}>
          Solicitudes de amistad{" "}
          <span>{listUserActive?.requestReceived?.length}</span>
        </h2>

        <div className={styles.friends__list}>
          <ul className={styles.friends__ul}>
            {listRequest.map((user) => (
              <CardFriendRequest
                key={user.idDoc}
                user={user}
                countMutualFriends={countMutualFriends}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FriendsRequest;

import { CardFriendRequest } from "./CardFriendRequest";

import styles from "./friendsRequest.module.css";

export const FriendsRequest = () => {
  return (
    <section className={styles.friends__container}>
      <div className={styles.friends__box}>
        <h2 className={styles.friends__title}>
          Solicitudes de amistad <span>0</span>
        </h2>

        <div className={styles.friends__list}>
          <ul className={styles.friends__ul}>
            <CardFriendRequest />
          </ul>
        </div>
      </div>
    </section>
  );
};

import { photoUser } from "../../../../assets";
import { LayoutCreateHistory } from "../Layout/LayoutCreateHistory";

import styles from "./whoViewMyHistory.module.css";

export const WhoViewMyHistory = ({
  historySelected,
  setOpenWhoSeeHistories,
  users,
}) => {
  const usersSeeHistories = users?.filter((user) =>
    historySelected[1]?.whoViewHistory?.includes(user?.uid)
  );

  return (
    <LayoutCreateHistory
      noCreateName="Vieron tu historia"
      style={{ background: "#fff" }}
      onCloseModal={() => setOpenWhoSeeHistories(false)}
    >
      <div className={styles.who_view__list_users}>
        {usersSeeHistories.map((user) => (
          <figure className={styles.who_view__photo} key={user.uid}>
            <img
              src={user.photoUrl || photoUser}
              alt="Foto de perfil usuario"
            />
            <figcaption>{user.displayName}</figcaption>
          </figure>
        ))}
      </div>
    </LayoutCreateHistory>
  );
};

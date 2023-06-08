import { CardNotification } from "./components/CardNotification";
import { useNotifications } from "./hook/useNotifications";

import styles from "./windownNotifications.module.css";

export const WindownNotifications = () => {
  const { updatedNotifications, users } = useNotifications();

  return (
    <div className={styles.windownNoti__container}>
      <div className={styles.windownNoti__content}>
        <div className={styles.windownNoti__nav}>
          <h3>Notificaciones</h3>

          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-solid fa-ellipsis"></i>
        </div>

        <div className={styles.windownNoti__search}>
          <p className={styles.windownNoti__all}>Todas</p>
          <p className={styles.windownNoti__not_reading}>No Leidas</p>
        </div>

        <div className={styles.windownNoti__list_users}>
          {Object.entries(updatedNotifications?.notifications || {})
            .map((notifi) => (
              <CardNotification key={notifi[0]} notifi={notifi} users={users} />
            ))
            .sort((a, b) => b.props.notifi[1].date - a.props.notifi[1].date)}
        </div>
      </div>
    </div>
  );
};

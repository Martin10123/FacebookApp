import { CardNotification } from "./components/CardNotification";
import { useNotifications } from "./hook/useNotifications";

import styles from "./windownNotifications.module.css";

export const WindownNotifications = () => {
  const { filterBy, setFilterBy, updatedNotifications, users } =
    useNotifications();

  return (
    <div className={styles.windownNoti__container}>
      <div className={styles.windownNoti__content}>
        <div className={styles.windownNoti__nav}>
          <h3>Notificaciones</h3>

          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-solid fa-ellipsis"></i>
        </div>

        <div className={styles.windownNoti__search}>
          <p
            className={styles.windownNoti__all}
            onClick={() => setFilterBy("todos")}
          >
            Todas
          </p>
          <p
            className={styles.windownNoti__not_reading}
            onClick={() => setFilterBy("noTodos")}
          >
            No Leidas
          </p>
        </div>

        {Object.entries(updatedNotifications?.notifications || {})
          .filter((notifi) => filterBy === "todos" || !notifi[1].view)
          .sort((a, b) => b[1].date - a[1].date)
          .map(([key, notifi]) => (
            <CardNotification key={key} notifi={[key, notifi]} users={users} />
          ))}
      </div>
    </div>
  );
};

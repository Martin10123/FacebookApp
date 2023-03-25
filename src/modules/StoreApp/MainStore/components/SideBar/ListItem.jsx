import styles from "./sideBar.module.css";

export const ListItem = ({ icon, title }) => {
  return (
    <div className={styles.side__list_item}>
      <i className={icon}></i>
      <p>{title}</p>
    </div>
  );
};

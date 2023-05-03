import styles from "../infoComponents.module.css";

export const ItemChangeChat = ({ colorItem, iconItem, nameItem, onClick }) => {
  return (
    <div
      className={styles.info__item_change_chat}
      onClick={onClick}
      style={{ color: colorItem ? "red" : "" }}
    >
      <span className={styles.info__name_change}>{nameItem}</span>
      <i className={iconItem}></i>
    </div>
  );
};

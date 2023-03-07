import styles from "../editProfile.module.css";

export const LayoutInfo = ({
  children,
  nameButton,
  onOpenInfo,
  setWhatPhotoSelected,
  title,
}) => {
  const onSelectedOption = () => {
    setWhatPhotoSelected(title);
    onOpenInfo(true);
  };

  return (
    <div className={styles.edit__contain_all_info}>
      <div className={styles.edit__header_options}>
        <p>{title}</p>
        <button className={styles.edit__btn_add} onClick={onSelectedOption}>
          {nameButton}
        </button>
      </div>

      {children}
    </div>
  );
};

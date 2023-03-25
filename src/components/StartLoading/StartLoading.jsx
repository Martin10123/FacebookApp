import styles from "./startLoading.module.css";

export const StartLoading = () => {
  return (
    <div className={styles.loading_main_box}>
      <div className={styles.spinner}></div>
    </div>
  );
};

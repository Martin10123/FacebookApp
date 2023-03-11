import styles from "./filterOptions.module.css";

export const FilterOptions = ({
  choosedBefore = [],
  data = [],
  onSelectData,
  setOpenFilter,
}) => {
  return (
    <div className={styles.filter__container}>
      <div
        className={styles.filter__background_close}
        onClick={() => setOpenFilter(false)}
      ></div>
      <div className={styles.filter__content}>
        {data.map((subject) => {
          const markThis = choosedBefore.includes(subject);

          return (
            <p onClick={() => onSelectData(subject)} key={subject}>
              {subject}

              {markThis && (
                <span
                  className={`${styles.filter__check} ${styles.filter__check_active}`}
                >
                  <i className="fa-solid fa-check"></i>
                </span>
              )}
            </p>
          );
        })}
      </div>
    </div>
  );
};

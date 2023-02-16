import styles from "./editPhoto.module.css";

export const EditPhoto = () => {
  return (
    <div className={styles.edit_photo__container}>
      <div className={styles.edit_photo__box}>
        <div className={styles.edit_photo__content}>
          <div className={styles.edit_photo__return}>
            <i className="fa-solid fa-arrow-left"></i>
            <p>Selecciona foto</p>
          </div>
          <button className={styles.edit_photo__button}>
            <i className="fa-solid fa-circle-plus"></i>
            <p>Agregar foto</p>
          </button>
          <input id="inputImg" type="file" style={{ display: "none" }} />
          {true && (
            <div className={styles.showLoading}>
              <p>Cargando...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

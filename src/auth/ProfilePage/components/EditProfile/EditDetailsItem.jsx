import styles from "./editProfile.module.css";

export const EditDetailsItem = () => {
  return (
    <div className={styles.edit__details}>
      <div className={styles.edit__details_item}>
        <i className="fa-solid fa-briefcase"></i>
        <p>¿En que trabajas?</p>
      </div>
      <div className={styles.edit__details_item}>
        <i className="fa-solid fa-heart"></i>
        <p>¿Relación?</p>
      </div>
      <div className={styles.edit__details_item}>
        <i className="fa-solid fa-clock"></i>
        <p>Se unió en Junio</p>
      </div>
      <div className={styles.edit__details_item}>
        <i className="fa-solid fa-house-chimney"></i>
        <p>Ciudad actual</p>
      </div>
      <div className={styles.edit__details_item}>
        <i className="fa-solid fa-graduation-cap"></i>
        <p>Educación</p>
      </div>
      <div className={styles.edit__details_item}>
        <i className="fa-solid fa-location-dot"></i>
        <p>Barrio - localidad</p>
      </div>
    </div>
  );
};

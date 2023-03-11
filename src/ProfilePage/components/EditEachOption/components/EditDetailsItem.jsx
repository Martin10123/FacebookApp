import { useEditDetailsPage } from "../../EditDetails/hook";

import styles from "../editProfile.module.css";

export const EditDetailsItem = () => {
  const {
    country,
    infoUserActive,
    job,
    showDetailsEducation,
    showDetailsRelation,
  } = useEditDetailsPage();

  return (
    <div className={styles.edit__details}>
      <div className={styles.edit__details_item}>
        <i className="fa-solid fa-briefcase"></i>
        <p>{job?.job || "¿En que trabajas?"}</p>
      </div>
      <div className={styles.edit__details_item}>
        <i className="fa-solid fa-heart"></i>
        <p>{showDetailsRelation()}</p>
      </div>
      <div className={styles.edit__details_item}>
        <i className="fa-solid fa-clock"></i>
        <p>{infoUserActive?.createAccount}</p>
      </div>
      <div className={styles.edit__details_item}>
        <i className="fa-solid fa-location-dot"></i>
        <p>{country?.selectCountry || "Pais de origen"}</p>
      </div>
      <div className={styles.edit__details_item}>
        <i className="fa-solid fa-house-chimney"></i>
        <p>{country?.selectCity || "Ciudad actual"}</p>
      </div>
      <div className={styles.edit__details_item}>
        <i className="fa-solid fa-graduation-cap"></i>
        <p>{showDetailsEducation()}</p>
      </div>
    </div>
  );
};

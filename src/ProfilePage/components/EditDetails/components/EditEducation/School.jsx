import { InputForm } from "../../../../../Auth";
import { dataYears } from "../../../../helpers/dataGlobal";

import styles from "./education.module.css";

export const School = () => {
  return (
    <>
      <InputForm
        name="college"
        placeholder="Nombre de la colegio..."
        type="text"
        styleIcon="fa-solid fa-building-columns"
      />

      <div className={styles.option__select_by}>
        <p>Trabajo en miami</p>
      </div>

      <div className={styles.college__container_checkbox}>
        <div className={styles.college__if_is_graduate}>
          <p>Desde</p>
          <select name="" className={styles.college__select_if_is_graduate}>
            <option value="">Años</option>
            {dataYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.college__if_is_graduate}>
          <p>Hasta</p>
          <select name="" className={styles.college__select_if_is_graduate}>
            <option value="">Años</option>
            {dataYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

import { InputForm } from "../../../../../Auth";
import { dataYears } from "../../../../helpers/dataGlobal";

import styles from "./education.module.css";

export const College = () => {
  return (
    <>
      <InputForm
        name="college"
        placeholder="Nombre de la universidad..."
        type="text"
        styleIcon="fa-solid fa-building-columns"
      />
      <InputForm
        name="college"
        placeholder="¿Que estudias...?"
        type="text"
        styleIcon="fa-solid fa-graduation-cap"
      />

      <div className={styles.option__select_by}>
        <p>Estudio en miami</p>
      </div>

      <div className={styles.college__checkbox_which_options}>
        <div className={styles.college__content_choice}>
          <p>Graduado</p>
          <input
            type="checkbox"
            name=""
            className={styles.college__input_check}
          />
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
      </div>
    </>
  );
};

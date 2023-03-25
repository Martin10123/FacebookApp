import { InputForm } from "../../../../../Auth";
import { dataYears } from "../../../../helpers/dataGlobal";

import styles from "./education.module.css";

export const School = ({
  formStateSchool,
  formSubmittedSchool,
  formValidationSchool,
  onInputChangeSchool,
}) => {
  const { schoolName, yearEnd, yearStart } = formStateSchool;
  const { schoolNameValid, yearStartValid } = formValidationSchool;

  return (
    <>
      <InputForm
        errorActive={!!schoolNameValid && formSubmittedSchool}
        name="schoolName"
        onChange={onInputChangeSchool}
        placeholder="Nombre del colegio..."
        styleIcon="fa-solid fa-building-columns"
        textError={schoolNameValid || ""}
        type="text"
        value={schoolName}
      />

      <div className={styles.college__container_checkbox}>
        <div className={styles.college__if_is_graduate}>
          <p>Desde</p>
          <select
            className={styles.college__select_if_is_graduate}
            name="yearStart"
            onChange={onInputChangeSchool}
            value={yearStart}
          >
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
          <select
            name="yearEnd"
            className={styles.college__select_if_is_graduate}
            onChange={onInputChangeSchool}
            value={yearEnd}
          >
            <option value="">Años</option>
            {!!yearStart && (
              <>
                {dataYears.map(
                  (year) =>
                    yearStart < year && (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    )
                )}
              </>
            )}
          </select>
        </div>
      </div>
      {yearStartValid && formSubmittedSchool && (
        <p className={styles.college__show_error}>{yearStartValid}</p>
      )}
    </>
  );
};

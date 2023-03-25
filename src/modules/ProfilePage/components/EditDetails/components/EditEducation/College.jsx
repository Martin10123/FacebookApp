import { InputForm } from "../../../../../Auth";
import { dataYears } from "../../../../helpers/dataGlobal";

import styles from "./education.module.css";

export const College = ({
  formState,
  formSubmitted,
  formValidation,
  isCheckedGraduate,
  onCheckGraduation,
  onInputChange,
}) => {
  const { collegeName, whatStudy, yearEnd, yearStart } = formState;
  const { collegeNameValid, whatStudyValid, yearStartValid } = formValidation;

  return (
    <>
      <InputForm
        errorActive={!!collegeNameValid && formSubmitted}
        name="collegeName"
        onChange={onInputChange}
        placeholder="Nombre de la universidad..."
        styleIcon="fa-solid fa-building-columns"
        textError={collegeNameValid || ""}
        type="text"
        value={collegeName}
      />
      <InputForm
        errorActive={!!whatStudyValid && formSubmitted}
        name="whatStudy"
        onChange={onInputChange}
        placeholder="¿Que estudias...?"
        styleIcon="fa-solid fa-graduation-cap"
        textError={whatStudyValid || ""}
        type="text"
        value={whatStudy}
      />

      <div className={styles.college__checkbox_which_options}>
        <div className={styles.college__content_choice}>
          <p>Graduado</p>
          <input
            className={styles.college__input_check}
            name="graduate"
            onChange={onCheckGraduation}
            type="checkbox"
            value={isCheckedGraduate}
          />
        </div>

        <div className={styles.college__container_checkbox}>
          <div className={styles.college__if_is_graduate}>
            <p>Desde</p>
            <select
              className={styles.college__select_if_is_graduate}
              name="yearStart"
              onChange={onInputChange}
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
              className={styles.college__select_if_is_graduate}
              name="yearEnd"
              onChange={onInputChange}
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

        {yearStartValid && formSubmitted && (
          <p className={styles.college__show_error}>{yearStartValid}</p>
        )}
      </div>
    </>
  );
};

import { useState } from "react";

import { College } from "./College";
import { LayoutModalEditDetails } from "../../layout/LayoutModalEditDetails";
import { School } from "./School";
import { useCollege, useSchool } from "./hook";
import { SureDeleteElement } from "../../../SureDeletePost/SureDeletePost";

import styles from "./education.module.css";

export const EditEducation = ({ setOpenEducation, infoUserActive }) => {
  const [openListEducation, setOpenListEducation] = useState("school");
  const [openSureDelete, setOpenSureDelete] = useState(false);
  const whatLevelEducation = openListEducation === "college";

  const {
    formState,
    formSubmitted,
    formValidation,
    isCheckedGraduate,
    onCheckGraduation,
    onDeleteCollege,
    onInputChange,
    onSavedCollege,
    startLoading,
    startLoadingDelete,
  } = useCollege({ infoUserActive, setOpenEducation, setOpenSureDelete });

  const {
    formStateSchool,
    formSubmittedSchool,
    formValidationSchool,
    loadingDeleteSchool,
    loadingSchool,
    onDeleteSchool,
    onInputChangeSchool,
    onSavedSchool,
  } = useSchool({ infoUserActive, setOpenEducation, setOpenSureDelete });

  return (
    <>
      <LayoutModalEditDetails
        setOpenDetail={setOpenEducation}
        titleInfo="Estudios"
        titleReturn="Agrega tus estudios"
        onSaveDetail={whatLevelEducation ? onSavedCollege : onSavedSchool}
        disabledSaved={whatLevelEducation ? startLoading : loadingSchool}
        disabledDelete={
          whatLevelEducation ? startLoadingDelete : loadingDeleteSchool
        }
        onDeleteDetail={() => setOpenSureDelete(true)}
      >
        <select
          className={styles.education__select}
          name="educationLevel"
          value={openListEducation}
          onChange={(e) => setOpenListEducation(e.target.value)}
        >
          <option value="school">Colegio</option>
          <option value="college">Universidad</option>
        </select>

        {whatLevelEducation ? (
          <College
            formState={formState}
            formSubmitted={formSubmitted}
            formValidation={formValidation}
            onCheckGraduation={onCheckGraduation}
            onInputChange={onInputChange}
            isCheckedGraduate={isCheckedGraduate}
          />
        ) : (
          <School
            formStateSchool={formStateSchool}
            formSubmittedSchool={formSubmittedSchool}
            formValidationSchool={formValidationSchool}
            onInputChangeSchool={onInputChangeSchool}
          />
        )}
      </LayoutModalEditDetails>

      {openSureDelete && (
        <SureDeleteElement
          onSubmitDelete={whatLevelEducation ? onDeleteCollege : onDeleteSchool}
          onCancelDelete={() => setOpenSureDelete(false)}
          titleShow="¿Seguro que quieres eliminar esta información?"
          disabled={startLoadingDelete}
        />
      )}
    </>
  );
};

import { useState } from "react";

import { deleteField, doc, setDoc, updateDoc } from "firebase/firestore";
import { firebaseDB } from "../../../../../../firebase/firebaseConfig";
import { useForm } from "../../../../../../hooks";
import { validatorEducation } from "../helper/validatorInfoStudy";

export const useSchool = ({
  infoUserActive,
  setOpenEducation,
  setOpenSureDelete,
}) => {
  const [formSubmittedSchool, setFormSubmittedSchool] = useState(false);
  const [loadingSchool, setLoadingSchool] = useState(false);
  const [loadingDeleteSchool, setLoadingDeleteSchool] = useState(false);

  const {
    infoPersonal,
    infoPersonal: { school },
    uid,
  } = infoUserActive;

  const {
    formState: formStateSchool,
    formValidation: formValidationSchool,
    isFormValid: isFormValidSchool,
    onInputChange: onInputChangeSchool,
  } = useForm(
    {
      schoolName: school?.schoolName || "",
      yearEnd: school?.yearEnd || "",
      yearStart: school?.yearStart || "",
    },
    validatorEducation
  );

  const onSavedSchool = async () => {
    if (!isFormValidSchool) return setFormSubmittedSchool(true);

    setLoadingSchool(true);

    try {
      await setDoc(
        doc(firebaseDB, "users", uid),
        {
          infoPersonal: {
            school: {
              ...formStateSchool,
            },
          },
        },
        { merge: true }
      );

      if (!!infoPersonal.college) {
        await updateDoc(doc(firebaseDB, "users", uid), {
          "infoPersonal.college": deleteField(),
        });
      }

      setLoadingSchool(false);
      setOpenEducation(false);
    } catch (error) {
      console.log(error);
      setLoadingSchool(false);
    }
  };

  const onDeleteSchool = async () => {
    if (!infoPersonal.school) return;

    setLoadingDeleteSchool(true);

    try {
      await updateDoc(doc(firebaseDB, "users", uid), {
        "infoPersonal.school": deleteField(),
      });

      setLoadingDeleteSchool(false);
      setOpenSureDelete(false);
      setOpenEducation(false);
    } catch (error) {
      console.log(error);
      setLoadingDeleteSchool(false);
    }
  };

  return {
    formStateSchool,
    formSubmittedSchool,
    formValidationSchool,
    loadingDeleteSchool,
    loadingSchool,
    onDeleteSchool,
    onInputChangeSchool,
    onSavedSchool,
  };
};

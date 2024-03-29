import { useState } from "react";

import { deleteField, doc, setDoc, updateDoc } from "firebase/firestore";
import { useForm } from "../../../../../../../hooks";
import { validatorEducation } from "../helper/validatorInfoStudy";
import { firebaseDB } from "../../../../../../../services";

export const useCollege = ({
  infoUserActive,
  setOpenEducation,
  setOpenSureDelete,
}) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [startLoading, setStartLoading] = useState(false);
  const [startLoadingDelete, setStartLoadingDelete] = useState(false);
  const [isCheckedGraduate, setIsCheckedGraduate] = useState(false);

  const { infoPersonal, uid } = infoUserActive;

  const { formState, formValidation, isFormValid, onInputChange } = useForm(
    {
      collegeName: infoPersonal?.college?.collegeName || "",
      whatStudy: infoPersonal?.college?.whatStudy || "",
      yearEnd: infoPersonal?.college?.yearEnd || "",
      yearStart: infoPersonal?.college?.yearStart || "",
    },
    validatorEducation
  );

  const onCheckGraduation = ({ target }) => {
    setIsCheckedGraduate(target.checked);
  };

  const onSavedCollege = async () => {
    if (!isFormValid) return setFormSubmitted(true);

    setStartLoading(true);

    try {
      await setDoc(
        doc(firebaseDB, "users", uid),
        {
          infoPersonal: {
            college: {
              ...formState,
              graduate: isCheckedGraduate,
            },
          },
        },
        { merge: true }
      );

      if (!!infoPersonal.school) {
        await updateDoc(doc(firebaseDB, "users", uid), {
          "infoPersonal.school": deleteField(),
        });
      }

      setStartLoading(false);
      setOpenEducation(false);
    } catch (error) {
      console.log(error);
      setStartLoading(false);
    }
  };

  const onDeleteCollege = async () => {
    if (!infoPersonal.college) return;

    setStartLoadingDelete(true);

    try {
      await updateDoc(doc(firebaseDB, "users", uid), {
        "infoPersonal.college": deleteField(),
      });

      setStartLoadingDelete(false);
      setOpenSureDelete(false);
      setOpenEducation(false);
    } catch (error) {
      console.log(error);
      setStartLoadingDelete(false);
    }
  };

  return {
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
  };
};

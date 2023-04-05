import { useState } from "react";

import { deleteField, doc, setDoc, updateDoc } from "firebase/firestore";
import { firebaseDB } from "../../../../../../../services";
import { useForm } from "../../../../../../../hooks";

const validateField = {
  placeWork: [
    (value) => {
      if (value.trim().length <= 2) {
        return true;
      }
    },
    "Debe de ser más largo",
  ],
};

export const useEditWork = ({ infoUserActive, setOpenWork }) => {
  const [openJobs, setOpenJobs] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedJob, setSelectedJob] = useState(
    [infoUserActive?.infoPersonal?.job?.job] || []
  );
  const [startLoading, setStartLoading] = useState(false);
  const [startLoadingDelete, setStartLoadingDelete] = useState(false);
  const [openSureDelete, setOpenSureDelete] = useState(false);
  const { placeWork, onInputChange, isFormValid, placeWorkValid } = useForm(
    { placeWork: infoUserActive?.infoPersonal?.job?.placeWork || "" },

    validateField
  );

  const onSelectJob = (job) => {
    if (selectedJob.includes(job)) {
      setSelectedJob(selectedJob.filter((j) => j !== job));
    } else {
      setSelectedJob([job]);
    }
  };

  const onSaveJob = async () => {
    if (!isFormValid || selectedJob.length === 0) return setFormSubmitted(true);

    setStartLoading(true);

    try {
      await setDoc(
        doc(firebaseDB, "users", infoUserActive?.uid),
        {
          infoPersonal: {
            job: {
              placeWork,
              job: selectedJob[0],
            },
          },
        },
        { merge: true }
      );

      setStartLoading(false);
      setOpenWork(false);
    } catch (error) {
      console.log(error);
      setStartLoading(false);
    }
  };

  const onDeleteJob = async () => {
    if (!infoUserActive?.infoPersonal?.job) return;

    setStartLoadingDelete(true);

    try {
      await updateDoc(doc(firebaseDB, "users", infoUserActive?.uid), {
        "infoPersonal.job": deleteField(),
      });
      setStartLoadingDelete(false);
      setOpenSureDelete(false);
      setOpenWork(false);
    } catch (error) {
      console.log(error);
      setStartLoadingDelete(false);
    }
  };

  return {
    formSubmitted,
    onDeleteJob,
    onInputChange,
    onSaveJob,
    onSelectJob,
    openJobs,
    openSureDelete,
    placeWork,
    placeWorkValid,
    selectedJob,
    setOpenJobs,
    setOpenSureDelete,
    startLoading,
    startLoadingDelete,
  };
};

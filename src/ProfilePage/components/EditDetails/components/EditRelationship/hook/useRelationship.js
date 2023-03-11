import { deleteField, doc, setDoc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { firebaseDB } from "../../../../../../firebase/firebaseConfig";

export const useRelationship = ({ infoUserActive, setOpenRelationship }) => {
  const [openListRelationships, setOpenListRelationships] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [startLoading, setStartLoading] = useState(false);
  const [startLoadingDelete, setStartLoadingDelete] = useState(false);
  const [openSureDelete, setOpenSureDelete] = useState(false);
  const [whoYourPartner, setWhoYourPartner] = useState("");
  const [selectRelationship, setSelectRelationship] = useState([]);

  const onSavedRelationship = async () => {
    if (selectRelationship.length === 0) return setFormSubmitted(true);

    if (
      selectRelationship === "En una relación" ||
      selectRelationship === "En una relación toxica"
    ) {
      if (whoYourPartner.trim().length <= 4) return setFormSubmitted(true);
    }

    setStartLoading(true);
    try {
      await setDoc(
        doc(firebaseDB, "users", infoUserActive?.uid),
        {
          infoPersonal: {
            relationship: {
              selectRelationship,
              whoYourPartner,
            },
          },
        },
        { merge: true }
      );
      setStartLoading(false);
      setOpenRelationship(false);
    } catch (error) {
      console.log(error);
      setStartLoading(false);
    }
  };

  const onDeleteRelationship = async () => {
    if (!infoUserActive?.infoPersonal.relationship) return;

    setStartLoadingDelete(true);
    try {
      await updateDoc(doc(firebaseDB, "users", infoUserActive?.uid), {
        "infoPersonal.relationship": deleteField(),
      });
      setStartLoadingDelete(false);
      setOpenSureDelete(false);
      setOpenRelationship(false);
    } catch (error) {
      console.log(error);
      setStartLoadingDelete(false);
    }
  };

  return {
    formSubmitted,
    onDeleteRelationship,
    onSavedRelationship,
    openListRelationships,
    openSureDelete,
    selectRelationship,
    setOpenListRelationships,
    setOpenSureDelete,
    setSelectRelationship,
    setWhoYourPartner,
    startLoading,
    startLoadingDelete,
    whoYourPartner,
  };
};

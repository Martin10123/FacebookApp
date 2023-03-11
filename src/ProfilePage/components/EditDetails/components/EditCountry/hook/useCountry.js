import { deleteField, doc, setDoc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { firebaseDB } from "../../../../../../firebase/firebaseConfig";

export const useCountry = ({ infoUserActive, setOpenCountry }) => {
  const {
    infoPersonal: { country },
    uid,
  } = infoUserActive;

  const [openListCountrys, setOpenListCountrys] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [startLoading, setStartLoading] = useState(false);
  const [startLoadingDelete, setStartLoadingDelete] = useState(false);
  const [openSureDelete, setOpenSureDelete] = useState(false);
  const [selectCity, setSelectCity] = useState(
    country?.selectCity || "Cartagena"
  );
  const [selectCountry, setSelectCountry] = useState(
    country?.selectCountry || []
  );

  const onSavedCity = async () => {
    if (selectCountry.length === 0 || selectCity.trim().length <= 4)
      return setFormSubmitted(true);

    setStartLoading(true);
    try {
      await setDoc(
        doc(firebaseDB, "users", uid),
        {
          infoPersonal: {
            country: {
              selectCity,
              selectCountry,
            },
          },
        },
        { merge: true }
      );
      setStartLoading(false);
      setOpenCountry(false);
    } catch (error) {
      console.log(error);
      setStartLoading(false);
    }
  };

  const onDeleteCity = async () => {
    if (!country) return;

    setStartLoadingDelete(true);
    try {
      await updateDoc(doc(firebaseDB, "users", uid), {
        "infoPersonal.country": deleteField(),
      });
      setStartLoadingDelete(false);
      setOpenSureDelete(false);
      setOpenCountry(false);
    } catch (error) {
      console.log(error);
      setStartLoadingDelete(false);
    }
  };

  return {
    formSubmitted,
    onDeleteCity,
    onSavedCity,
    openListCountrys,
    openSureDelete,
    selectCity,
    selectCountry,
    setOpenListCountrys,
    setOpenSureDelete,
    setSelectCity,
    setSelectCountry,
    startLoading,
    startLoadingDelete,
  };
};

import { createContext, useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { firebaseDB } from "../services";

export const GetHistoriesContext = createContext();

export const GetHistoriesProvider = ({ children }) => {
  const [getHistories, setGetHistories] = useState([]);
  const [startLoadingHistories, setStartLoadingHistories] = useState(true);

  useEffect(() => {
    const queryFire = collection(firebaseDB, "stories");

    const unSuscribed = onSnapshot(queryFire, (histories) => {
      const arrayHistories = histories.docs.map((doc) => {
        return {
          ...doc.data(),
          idStorie: doc.id,
        };
      });
      setGetHistories([...arrayHistories]);
      setStartLoadingHistories(false);
    });

    return () => unSuscribed();
  }, []);

  const providerState = {
    getHistories,
    startLoadingHistories,
  };

  return (
    <GetHistoriesContext.Provider value={providerState}>
      {children}
    </GetHistoriesContext.Provider>
  );
};

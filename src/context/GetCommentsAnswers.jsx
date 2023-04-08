import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { firebaseDB } from "../services";

export const GetComOAnsContext = createContext();

export const GetComOAnsProvider = ({ children }) => {
  const [getComments, setGetComments] = useState([]);
  const [getAnswers, setGetAnswers] = useState([]);
  const [startLoadingComments, setStartLoadingComments] = useState(true);
  const [startLoadingAnswers, setStartLoadingAnswers] = useState(true);

  useEffect(() => {
    const queryFire = query(
      collection(firebaseDB, "comments"),
      orderBy("date", "desc")
    );

    const unSuscribed = onSnapshot(queryFire, (comment) => {
      const arrayComment = comment.docs.map((doc) => {
        return {
          ...doc.data(),
          idComment: doc.id,
          ref: doc.ref,
        };
      });

      setGetComments([...arrayComment]);
      setStartLoadingComments(false);
    });

    return () => unSuscribed();
  }, []);

  useEffect(() => {
    const queryFire = query(
      collection(firebaseDB, "answers"),
      orderBy("date", "desc")
    );

    const unSuscribed = onSnapshot(queryFire, (answers) => {
      const arrayAnswers = answers.docs.map((doc) => {
        return {
          ...doc.data(),
          idAnswer: doc.id,
          ref: doc.ref,
        };
      });

      setGetAnswers([...arrayAnswers]);
      setStartLoadingAnswers(false);
    });

    return () => unSuscribed();
  }, []);

  const providerState = {
    getAnswers,
    getComments,
    startLoadingAnswers,
    startLoadingComments,
  };

  return (
    <GetComOAnsContext.Provider value={providerState}>
      {children}
    </GetComOAnsContext.Provider>
  );
};

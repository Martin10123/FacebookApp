import { useContext, useEffect, useState } from "react";
import { AuthUserContext } from "../../../../context";
import { firebaseDB } from "../../../../services";
import { doc, onSnapshot } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export const usePostsSaved = () => {
  const { infoUserActive, userActive, users } = useContext(AuthUserContext);
  const navigate = useNavigate();

  const [getPostsSaved, setGetPostsSaved] = useState([]);
  const [startLoading, setStartLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const queryFire = doc(firebaseDB, `postsSaved/${userActive.uid}`);

    const unSuscribed = onSnapshot(queryFire, (posts) => {
      try {
        setGetPostsSaved(posts.data());
        setStartLoading(false);
      } catch (error) {
        setError(true);
        setStartLoading(false);
      }
    });

    return () => unSuscribed();
  }, []);

  const onReturnPage = () => {
    navigate(-1);
  };

  return {
    // Atributos
    error,
    getPostsSaved,
    infoUserActive,
    startLoading,
    users,

    // Metodos
    onReturnPage,
  };
};

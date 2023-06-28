import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { AuthUserContext, GetHistoriesContext } from "../../../../context";
import { useNavigate, useParams } from "react-router-dom";
import { arrayUnion, deleteField, doc, setDoc } from "firebase/firestore";
import { firebaseDB } from "../../../../services";

export const useSeeHistory = () => {
  const { infoUserActive, users } = useContext(AuthUserContext);
  const { getHistories } = useContext(GetHistoriesContext);
  const { uidUser, numStorie: numStorieUrl } = useParams();
  const navigate = useNavigate();

  const [selectStorieUser, setSelectStorieUser] = useState(uidUser);
  const [startLoading, setStartLoading] = useState(false);
  const [indexStorieSelect, setIndexStorieSelect] = useState(-1);
  const [numStorie, setNumStorie] = useState(numStorieUrl || 0);

  const getAllStoriesWithOutEmpty = useMemo(() => {
    return getHistories.filter(
      (stories) => Object.keys(stories.histories).length > 0
    );
  }, [getHistories]);

  const nonEmptyHistories = useMemo(() => {
    return getAllStoriesWithOutEmpty.filter(
      (stories) => stories.idStorie === selectStorieUser
    );
  }, [getAllStoriesWithOutEmpty, selectStorieUser]);

  useEffect(() => {
    const index = getAllStoriesWithOutEmpty.findIndex(
      (indexStorie) => indexStorie.idStorie === selectStorieUser
    );

    setIndexStorieSelect(index);
  }, [getAllStoriesWithOutEmpty, selectStorieUser]);

  useEffect(() => {
    if (nonEmptyHistories.length === 0) {
      setSelectStorieUser(getAllStoriesWithOutEmpty[0]?.idStorie);
    }
  }, [nonEmptyHistories]);

  const countStorieSelect = useMemo(() => {
    return Object.entries(nonEmptyHistories[0]?.histories || {}).sort(
      (a, b) => a[1].date - b[1].date
    );
  }, [nonEmptyHistories]);

  const storieSelectPage = useMemo(() => {
    return countStorieSelect[numStorie]?.[1];
  }, [countStorieSelect, numStorie]);

  const colorStorie = useMemo(() => {
    return storieSelectPage?.selectColor
      ? { background: storieSelectPage.selectColor }
      : {};
  }, [storieSelectPage]);

  const onNextStorie = useCallback(() => {
    if (
      numStorie === countStorieSelect.length - 1 &&
      indexStorieSelect < getAllStoriesWithOutEmpty.length - 1
    ) {
      const nextIndex = indexStorieSelect + 1;
      setIndexStorieSelect(nextIndex);
      setNumStorie(0);
      setSelectStorieUser(getAllStoriesWithOutEmpty[nextIndex].idStorie);
    } else if (numStorie < countStorieSelect.length - 1) {
      setNumStorie((prevNumStorie) => prevNumStorie + 1);
    }
  }, [
    numStorie,
    countStorieSelect,
    indexStorieSelect,
    getAllStoriesWithOutEmpty,
  ]);

  const onPreviewStorie = useCallback(() => {
    if (numStorie === 0 && indexStorieSelect !== 0) {
      const prevIndex = indexStorieSelect - 1;

      const prevStorieHistories = Object.values(
        getAllStoriesWithOutEmpty[prevIndex].histories
      );

      setIndexStorieSelect(prevIndex);
      setNumStorie(prevStorieHistories.length - 1);
      setSelectStorieUser(getAllStoriesWithOutEmpty[prevIndex].idStorie);
    } else if (numStorie > 0) {
      setNumStorie((prevNumStorie) => prevNumStorie - 1);
    }
  }, [numStorie, indexStorieSelect, getAllStoriesWithOutEmpty]);

  const onPassOtherStorie = useCallback((uidUser) => {
    setNumStorie(0);
    setSelectStorieUser(uidUser);
  }, []);

  const onDeleteStorie = useCallback(
    async ({ setOpenSureDelete }) => {
      setStartLoading(true);

      try {
        if (numStorie !== 0 && countStorieSelect.length > 1) {
          setNumStorie((prevNumStorie) => prevNumStorie - 1);
        }
        if (numStorie === 0 && countStorieSelect.length === 1) {
          if (indexStorieSelect < getAllStoriesWithOutEmpty.length - 1) {
            setIndexStorieSelect((prevIndex) => prevIndex + 1);

            setNumStorie(0);

            setSelectStorieUser(
              getAllStoriesWithOutEmpty[indexStorieSelect + 1].idStorie
            );
          }
        }

        await setDoc(
          doc(firebaseDB, "stories", infoUserActive.uid),
          {
            ["histories"]: {
              [storieSelectPage.idStorieCreate]: deleteField(),
            },
          },
          { merge: true }
        );

        if (getAllStoriesWithOutEmpty.length === 1) {
          navigate("/");
        }

        setOpenSureDelete(false);
      } catch (error) {
        console.error(error);
      } finally {
        setStartLoading(false);
      }
    },
    [
      numStorie,
      countStorieSelect,
      indexStorieSelect,
      getAllStoriesWithOutEmpty,
      setDoc,
      firebaseDB,
      infoUserActive,
      storieSelectPage,
    ]
  );

  useEffect(() => {
    if (
      !storieSelectPage ||
      storieSelectPage?.whoHaveSeenHistory?.includes(infoUserActive.uid) ||
      storieSelectPage?.uidUser === infoUserActive.uid
    )
      return;

    const whoViewHistory = async () => {
      try {
        await setDoc(
          doc(firebaseDB, "stories", storieSelectPage?.uidUser),
          {
            ["histories"]: {
              [storieSelectPage?.idStorieCreate]: {
                whoHaveSeenHistory: arrayUnion(infoUserActive.uid),
              },
            },
          },
          { merge: true }
        );
      } catch (error) {
        console.error(error);
      }
    };

    whoViewHistory();
  }, [numStorie]);

  return {
    // Atributos
    colorStorie,
    countStorieSelect,
    getAllStoriesWithOutEmpty,
    getHistories,
    infoUserActive,
    startLoading,
    storieSelectPage,
    users,

    // Métodos
    navigate,
    onDeleteStorie,
    onNextStorie,
    onPassOtherStorie,
    onPreviewStorie,
  };
};

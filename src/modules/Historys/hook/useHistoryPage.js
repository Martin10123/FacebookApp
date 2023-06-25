import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthUserContext, GetHistoriesContext } from "../../../context";

export const useHistoryPage = () => {
  const { infoUserActive, users } = useContext(AuthUserContext);
  const { getHistories, startLoadingHistories } =
    useContext(GetHistoriesContext);

  const navigate = useNavigate();

  const storieUserActive = getHistories.find(
    (storie) => storie.idStorie === infoUserActive.uid
  );

  const arrayStorieUserActive = Object.values(
    storieUserActive?.histories || {}
  );

  const filteredHistories = getHistories.filter(
    (stories) => stories.idStorie !== infoUserActive.uid
  );

  const nonEmptyHistories = filteredHistories.filter(
    (stories) => Object.keys(stories.histories).length > 0
  );

  const numBetweenCeroOrLength = (numMax) => {
    return Math.floor(Math.random() * numMax);
  };

  return {
    // Atributos
    arrayStorieUserActive,
    infoUserActive,
    nonEmptyHistories,
    startLoadingHistories,
    users,

    // Metodos
    navigate,
    numBetweenCeroOrLength,
  };
};

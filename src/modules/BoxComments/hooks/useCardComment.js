import { useContext, useState } from "react";
import { getWhatReactionSelected } from "../../../components/Posts/helpers";
import { useCloseModal } from "../../../hooks";
import { GetComOAnsContext } from "../../../context";

export const useCardComment = ({
  infoCOA,
  infoUserActive,
  users,
  whatIsAOC,
}) => {
  const { getAnswers, startLoadingAnswers } = useContext(GetComOAnsContext);
  const [openAnswers, setOpenAnswers] = useState(false);
  const [openListReactions, setOpenListReactions] = useState(false);
  const [openOptionsCOA, setOpenOptionsCOA] = useState(false);
  const [openSureDelete, setOpenSureDelete] = useState(false);
  const [openUpdateCOA, setOpenUpdateCOA] = useState(false);
  const refOptions = useCloseModal(() => setOpenOptionsCOA(false));
  const isCOA = whatIsAOC === "comments";
  const isThisUserCreatedComment = infoCOA.uidUser === infoUserActive.uid;

  const filterAnswersByComment = getAnswers.filter(
    (answer) => answer.idComment === infoCOA.idComment
  );

  const userCreateCOA = users.find((user) => user?.uid === infoCOA?.uidUser);
  const getReactionSelected = getWhatReactionSelected({
    infoUserActive,
    reactions: infoCOA?.reactions,
  });

  return {
    filterAnswersByComment,
    getReactionSelected,
    isCOA,
    isThisUserCreatedComment,
    openAnswers,
    openListReactions,
    openOptionsCOA,
    openSureDelete,
    openUpdateCOA,
    refOptions,
    setOpenAnswers,
    setOpenListReactions,
    setOpenOptionsCOA,
    setOpenSureDelete,
    setOpenUpdateCOA,
    startLoadingAnswers,
    userCreateCOA,
  };
};

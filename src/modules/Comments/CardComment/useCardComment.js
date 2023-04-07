import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { deleteDoc, doc } from "firebase/firestore";

import { firebaseDB } from "../../../services";
import { getWhatReactionSelected } from "../../../components/Posts/helpers";
import { useCloseModal } from "../../../hooks";
import { useDeletePostComments } from "../../../components/Posts/hook";

export const useCardComment = ({
  comment,
  users,
  infoUserActive,
  isCommentOrAnswer,
}) => {
  const [openOptions, setOpenOptions] = useState(false);
  const [openListReactions, setOpenListReactions] = useState(false);
  const [openUpdateComment, setOpenUpdateComment] = useState(false);
  const [openSureDelete, setOpenSureDelete] = useState(false);
  const [openAnswers, setOpenAnswers] = useState(false);

  const { onDeletePost } = useDeletePostComments({
    firePath: "comments",
    infoToSearchFire: comment,
  });
  const ref = useCloseModal(() => setOpenOptions(false));
  const navigate = useNavigate();
  const isThisUserCreatedComment = comment.uidUser === infoUserActive.uid;
  const whatIsAOC = isCommentOrAnswer === "comments";

  const idDocumentCOA = whatIsAOC ? comment.idComment : comment.idAnswer;

  const pahtToSaveFire = whatIsAOC
    ? `commentsPosts/${comment.idPost}/comments/${comment.idComment}`
    : `answersComments/${comment.idComment}/answers/${comment.idAnswer}`;

  const textInfoCOA = whatIsAOC ? comment.comment : comment.answer;

  const photoCOA = whatIsAOC ? comment.photoComment : comment.photoAnswer;

  const userCreateComment = users.find(
    (user) => user?.uid === comment?.uidUser
  );

  const onGoToProfile = () => {
    navigate(`/${userCreateComment?.username}`);
  };

  const getReactionSelected = getWhatReactionSelected({
    infoUserActive,
    reactions: comment?.reactions,
  });

  const onDeleteComment = async () => {
    try {
      if (whatIsAOC) {
        await onDeletePost();
      } else {
        await deleteDoc(doc(firebaseDB, pahtToSaveFire));
      }

      toast.success(`Eliminaste tu ${whatIsAOC ? "comentario" : "respuesta"}`);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    // atributos
    idDocumentCOA,
    isThisUserCreatedComment,
    openAnswers,
    openListReactions,
    openOptions,
    openSureDelete,
    openUpdateComment,
    pahtToSaveFire,
    photoCOA,
    ref,
    textInfoCOA,
    userCreateComment,
    whatIsAOC,

    // metodos
    getReactionSelected,
    onDeleteComment,
    onGoToProfile,
    setOpenAnswers,
    setOpenListReactions,
    setOpenOptions,
    setOpenSureDelete,
    setOpenUpdateComment,
  };
};

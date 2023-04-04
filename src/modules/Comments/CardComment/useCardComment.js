import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { deleteDoc, doc } from "firebase/firestore";

import { useCloseModal } from "../../../hooks";
import { getWhatReactionSelected } from "../../../components/Posts/helpers";
import { firebaseDB } from "../../../services";

export const useCardComment = ({ comment, users, infoUserActive }) => {
  const [openOptions, setOpenOptions] = useState(false);
  const [openUpdateComment, setOpenUpdateComment] = useState(false);
  const [openSureDelete, setOpenSureDelete] = useState(false);
  const ref = useCloseModal(() => setOpenOptions(false));
  const navigate = useNavigate();
  const isThisUserCreatedComment = comment.uidUser === infoUserActive.uid;

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
      await deleteDoc(doc(firebaseDB, "comments", comment.idComment));

      toast.success("Eliminaste tu comentario");
    } catch (error) {
      console.error(error);
    }
  };

  return {
    // atributos
    isThisUserCreatedComment,
    openOptions,
    openSureDelete,
    openUpdateComment,
    ref,
    userCreateComment,

    // metodos
    getReactionSelected,
    onDeleteComment,
    onGoToProfile,
    setOpenOptions,
    setOpenSureDelete,
    setOpenUpdateComment,
  };
};

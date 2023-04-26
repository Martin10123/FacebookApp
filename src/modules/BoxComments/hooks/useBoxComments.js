import { useContext, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { addDoc, collection } from "firebase/firestore";

import { addPhotoToCloudinary } from "../../../helpers";
import { firebaseDB } from "../../../services";
import { GetComOAnsContext } from "../../../context/GetCommentsAnswers";
import { getWhatReactionSelected } from "../../../components/Posts/helpers";
import { useDeletePostComments } from "../../../components/Posts/hook";

export const useBoxComments = ({
  infoUserActive,
  post,
  setOpenCommentsPost,
}) => {
  const { getComments, startLoadingComments } = useContext(GetComOAnsContext);
  const [inputComment, setInputComment] = useState("");
  const [openListReactions, setOpenListReactions] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [startLoading, setstartLoading] = useState(false);
  const refComment = useRef(null);

  const { onDeleteAllPost } = useDeletePostComments({
    isPostOComment: "comments",
  });

  const filterCommentsByPost = getComments.filter(
    (comment) => comment.idPost === post.idDoc
  );

  const getReactionSelected = getWhatReactionSelected({
    infoUserActive,
    reactions: post?.reactions,
  });

  const onChangeFile = ({ target }) => {
    if (target.files.length === 0) return;

    setSelectedImage(target.files[0]);
  };

  const onSubmitComment = async (e) => {
    e.preventDefault();

    if (inputComment.trim().length === 0 && !selectedImage) return;

    setstartLoading(true);

    try {
      let fileComment;

      if (selectedImage) {
        fileComment = await addPhotoToCloudinary(selectedImage);
      }

      await addDoc(collection(firebaseDB, "comments"), {
        textCOA: inputComment,
        date: new Date().getTime(),
        uidUser: infoUserActive.uid,
        idPost: post.idDoc,
        photoCOA: fileComment || null,
      });

      setInputComment("");
      setSelectedImage("");
      setstartLoading(false);
      toast.success("Agregaste un nuevo comentario");
    } catch (error) {
      console.error(error);
      setstartLoading(false);
    }
  };

  const onDeleteComment = async (idDocumentCOA) => {
    try {
      await onDeleteAllPost(idDocumentCOA);

      toast.success("Eliminaste tu comentario");
    } catch (error) {
      console.error(error);
    }
  };

  const onCloseComments = () => {
    setOpenCommentsPost(false);
  };

  return {
    // Atributos
    filterCommentsByPost,
    getReactionSelected,
    inputComment,
    openListReactions,
    refComment,
    selectedImage,
    startLoading,
    startLoadingComments,

    // Metodos
    onChangeFile,
    onCloseComments,
    onDeleteComment,
    onSubmitComment,
    setInputComment,
    setOpenListReactions,
  };
};

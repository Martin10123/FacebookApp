import { useEffect, useRef, useState } from "react";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { toast } from "react-hot-toast";

import { addPhotoToCloudinary } from "../../../helpers";
import { firebaseDB } from "../../../services";

export const useBoxComments = ({ infoUserActive, post }) => {
  const [getComments, setGetComments] = useState([]);
  const [inputComment, setInputComment] = useState("");
  const [openListReactions, setOpenListReactions] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [startLoading, setStartLoading] = useState(false);
  const [startLoadingComments, setStartLoadingComments] = useState(true);

  const fileInputRef = useRef();

  const onSubmitComment = async (e) => {
    e.preventDefault();
    if (inputComment.trim().length === 0 && !selectedImage) return;

    setStartLoading(true);

    let fileComment;

    if (selectedImage) {
      fileComment = await addPhotoToCloudinary(selectedImage);
    }

    try {
      await addDoc(
        collection(firebaseDB, `commentsPosts/${post.idDoc}/comments`),
        {
          comment: inputComment,
          date: new Date().getTime(),
          uidUser: infoUserActive.uid,
          idPost: post.idDoc,
          photoComment: fileComment || null,
        }
      );

      setInputComment("");
      setSelectedImage("");
      setStartLoading(false);
      toast.success("Agregaste un nuevo comentario");
    } catch (error) {
      console.error(error);
      setStartLoading(false);
    }
  };

  const onFileInputchange = ({ target }) => {
    if (target.files.length === 0) return;

    setSelectedImage(target.files[0]);
  };

  useEffect(() => {
    const queryFire = collection(
      firebaseDB,
      `commentsPosts/${post.idDoc}/comments`
    );

    const unSuscribed = onSnapshot(queryFire, (comments) => {
      const arrayComments = comments.docs.map((doc) => {
        return {
          idComment: doc.id,
          ...doc.data(),
        };
      });

      setGetComments([...arrayComments]);
      setStartLoadingComments(false);
    });

    return () => unSuscribed();
  }, []);

  return {
    // atributos
    countComment: getComments.length,
    fileInputRef,
    getComments,
    inputComment,
    openListReactions,
    selectedImage,
    startLoading,
    startLoadingComments,

    // metodos
    onFileInputchange,
    onSubmitComment,
    setInputComment,
    setOpenListReactions,
  };
};

import { useEffect, useRef, useState } from "react";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
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

  const onSubmitComment = async () => {
    if (inputComment.trim().length === 0 && !selectedImage) return;

    setStartLoading(true);

    let fileComment;

    if (selectedImage) {
      fileComment = await addPhotoToCloudinary(selectedImage);
    }

    try {
      await addDoc(collection(firebaseDB, "comments"), {
        comment: inputComment,
        date: new Date().getTime(),
        uidUser: infoUserActive.uid,
        idPost: post.idDoc,
        photoComment: fileComment || null,
      });

      setStartLoading(false);
      toast.success("Agregaste un nuevo comentario");
      setInputComment("");
      setSelectedImage("");
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
    const queryFire = query(
      collection(firebaseDB, "comments"),
      where("idPost", "==", post.idDoc)
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

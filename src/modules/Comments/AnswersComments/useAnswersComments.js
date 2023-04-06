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

export const useAnswersComments = ({ infoUserActive, comment }) => {
  const [getAnswers, setGetAnswers] = useState([]);
  const [inputAnswer, setInputAnswer] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [startLoading, setStartLoading] = useState(false);
  const [startLoadingAnswers, setStartLoadingAnswers] = useState(true);
  const fileInputRef = useRef();

  const onFileInputchange = ({ target }) => {
    if (target.files.length === 0) return;

    setSelectedImage(target.files[0]);
  };

  useEffect(() => {
    const queryFire = query(
      collection(firebaseDB, "answersComment"),
      where("idComment", "==", comment.idComment)
    );

    const unSuscribed = onSnapshot(queryFire, (answers) => {
      const arrayAnswers = answers.docs.map((doc) => {
        return {
          idAnswer: doc.id,
          ...doc.data(),
        };
      });

      setGetAnswers([...arrayAnswers]);
      setStartLoadingAnswers(false);
    });

    return () => unSuscribed();
  }, []);

  const onSubmitAnswer = async () => {
    if (inputAnswer.trim().length === 0 && !selectedImage) return;

    setStartLoading(true);

    let fileComment;

    if (selectedImage) {
      fileComment = await addPhotoToCloudinary(selectedImage);
    }

    try {
      await addDoc(collection(firebaseDB, "answersComment"), {
        answer: inputAnswer,
        date: new Date().getTime(),
        uidUser: infoUserActive.uid,
        idComment: comment.idComment,
        photoAnswer: fileComment || null,
      });

      setStartLoading(false);
      toast.success("Agregaste una respuesta");
      setInputAnswer("");
      setSelectedImage("");
    } catch (error) {
      console.error(error);
      setStartLoading(false);
    }
  };

  return {
    // Atributos
    countAnswers: getAnswers.length,
    fileInputRef,
    getAnswers,
    inputAnswer,
    selectedImage,
    startLoading,
    startLoadingAnswers,

    // Metodos
    onFileInputchange,
    onSubmitAnswer,
    setInputAnswer,
  };
};

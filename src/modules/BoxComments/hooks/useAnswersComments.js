import { useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";

import { addPhotoToCloudinary } from "../../../helpers";
import { firebaseDB } from "../../../services";
import { useSaveNotifications } from "../../../hooks";

export const useAnswersComments = ({ comment, infoUserActive }) => {
  const [inputAnswer, setInputAnswer] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [startLoading, setStartLoading] = useState(false);
  const fileInputRef = useRef();
  const { savaNotification } = useSaveNotifications();

  const onFileInputchange = ({ target }) => {
    if (target.files.length === 0) return;

    setSelectedImage(target.files[0]);
  };

  const onSubmitAnswer = async (e) => {
    e.preventDefault();
    if (inputAnswer.trim().length === 0 && !selectedImage) return;

    setStartLoading(true);

    let fileComment;

    if (selectedImage) {
      fileComment = await addPhotoToCloudinary(selectedImage);
    }

    try {
      await addDoc(collection(firebaseDB, "answers"), {
        textCOA: inputAnswer,
        date: new Date().getTime(),
        uidUser: infoUserActive.uid,
        idComment: comment.idComment,
        photoCOA: fileComment || null,
      });

      setInputAnswer("");
      setSelectedImage("");
      setStartLoading(false);

      toast.success("Agregaste una respuesta");
    } catch (error) {
      console.error(error);
      setStartLoading(false);
    } finally {
      await savaNotification({
        dataToSave: "",
        idToSaveDocument: comment.idPost,
        typeNotifi: "answers",
        uidUserReceiveNotifi: comment.uidUser,
      });
    }
  };

  const onDeleteComment = async (idDocumentCOA) => {
    try {
      await deleteDoc(doc(firebaseDB, "answers", idDocumentCOA));

      toast.success("Eliminaste tu respuesta");
    } catch (error) {
      console.error(error);
    }
  };

  return {
    // Atributos
    fileInputRef,
    inputAnswer,
    selectedImage,
    startLoading,

    // Metodos
    onDeleteComment,
    onFileInputchange,
    onSubmitAnswer,
    setInputAnswer,
  };
};

import { useRef, useState } from "react";
import { addDoc, collection } from "firebase/firestore";

import { addPhotoToCloudinary } from "../../../../helpers";
import { firebaseDB } from "../../../../services";
import { useForm, useSaveNotifications } from "../../../../hooks";

export const useAddPost = ({ infoUserActive, setOpenCreatePost }) => {
  const [openTagFriends, setOpenTagFriends] = useState(false);
  const [startLoadingPost, setStartLoadingPost] = useState(false);
  const [openViewImagesSelected, setOpenViewImagesSelected] = useState(false);
  const [listTagFriends, setListTagFriends] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const fileInputRef = useRef();
  const { savaNotification } = useSaveNotifications();
  const { post, privacity, onInputChange } = useForm({
    post: "",
    privacity: "Publico",
  });

  const onCreateNewPost = async () => {
    if (post.trim().length === 0 && selectedImages.length === 0) return;

    let photosUrls;

    setStartLoadingPost(true);

    if (selectedImages.length !== 0) {
      photosUrls = await startUpdaloadingFiles();
    }

    try {
      const dataPost = await addDoc(collection(firebaseDB, "posts"), {
        date: new Date().getTime(),
        displayName: infoUserActive.displayName,
        howManyPeopleSharePost: 0,
        listTagFriends,
        photosUrls: photosUrls || [],
        post,
        privacity,
        uid: infoUserActive.uid,
      });

      if (listTagFriends.length !== 0) {
        for (const user of listTagFriends) {
          await savaNotification({
            dataToSave: "",
            idToSaveDocument: dataPost.id,
            typeNotifi: "tagFriends",
            uidUserReceiveNotifi: user.uidUser,
          });
        }
      }

      setOpenCreatePost(false);
    } catch (error) {
      console.log(error);
    } finally {
      setStartLoadingPost(false);
    }
  };

  const onFileInputchange = ({ target }) => {
    if (target.files.length === 0) return;

    if (target.files.length > 4) {
      alert(`Solo puedes seleccionar 4 archivos.`);
    } else {
      const imagesList = Array.from(target.files).map((file) => ({
        file,
        idFile: `imagen/${Math.random() * 50000}`,
      }));

      setSelectedImages(imagesList);
    }
  };

  const startUpdaloadingFiles = async () => {
    try {
      const fileUploadPromises = [];

      for (const file of selectedImages) {
        delete file.idFile;
        fileUploadPromises.push(addPhotoToCloudinary(file.file));
      }

      const photosUrls = await Promise.all(fileUploadPromises);

      return photosUrls;
    } catch (error) {
      console.error(error);
    }
  };

  const onDeletePhotoSelected = (idFile) => {
    setSelectedImages(selectedImages.filter((file) => file.idFile !== idFile));
  };

  return {
    // estados - referencias
    fileInputRef,
    listTagFriends,
    openTagFriends,
    openViewImagesSelected,
    post,
    privacity,
    selectedImages,
    startLoadingPost,

    // metodos
    onCreateNewPost,
    onDeletePhotoSelected,
    onFileInputchange,
    onInputChange,
    setListTagFriends,
    setOpenTagFriends,
    setOpenViewImagesSelected,
  };
};

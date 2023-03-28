import { useRef, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { toast } from "react-hot-toast";

import { addPhotoToCloudinary } from "../../../../helpers";
import { firebaseDB } from "../../../../services";
import { useForm } from "../../../../hooks";

export const useAddPost = ({ infoUserActive, setOpenCreatePost }) => {
  const [openTagFriends, setOpenTagFriends] = useState(false);
  const [startLoadingPost, setStartLoadingPost] = useState(false);
  const [openViewImagesSelected, setOpenViewImagesSelected] = useState(false);
  const [listTagFriends, setListTagFriends] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const fileInputRef = useRef();
  const { post, privacity, onInputChange } = useForm({
    post: "",
    privacity: "",
  });

  const onCreateNewPost = async () => {
    if (post.trim().length === 0 && selectedImages.length === 0) return;

    setStartLoadingPost(true);

    try {
      let photosUrls;

      if (selectedImages.length !== 0) {
        photosUrls = await startUpdaloadingFiles();
      }

      await addDoc(collection(firebaseDB, "posts"), {
        date: new Date().getTime(),
        displayName: infoUserActive.displayName,
        listTagFriends,
        photosUrls: photosUrls || [],
        post,
        privacity,
        uid: infoUserActive.uid,
      });

      toast.success("Agregaste una nueva publicación");

      setStartLoadingPost(false);
      setOpenCreatePost(false);
    } catch (error) {
      console.log(error);
      toast.error("No pudimos agregar una nueva publicación");
      setStartLoadingPost(false);
    }
  };

  const onFileInputchange = ({ target }) => {
    if (target.files === 0) return;

    const imagesList = Array.from(target.files).map((file) => ({
      file,
      idFile: `imagen/${Math.random() * 50000}`,
    }));

    setSelectedImages(imagesList);
  };

  const startUpdaloadingFiles = async () => {
    const fileUploadPromises = [];

    for (const file of selectedImages) {
      delete file.idFile;
      fileUploadPromises.push(addPhotoToCloudinary(file.file));
    }

    const photosUrls = await Promise.all(fileUploadPromises);

    return photosUrls;
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

import { useContext, useEffect, useRef, useState } from "react";
import { deleteObject } from "firebase/storage";
import { deleteField, doc, updateDoc } from "firebase/firestore";

import { AuthUserContext } from "../../../../../context";
import { loadListPhotosUser } from "../helper/loadListPhotosUser";
import { uploadUserProfileImage } from "../helper/loadPhotoUser";
import { firebaseDB } from "../../../../../services";

export const usePhoto = ({ typePhoto, setOpenEditPhoto }) => {
  const [startLoadingPhoto, setStartLoadingPhoto] = useState(false);
  const [startLoadingDeletePhoto, setStartLoadingDeletePhoto] = useState(false);
  const [startLoadingListPhotos, setStartLoadingListPhotos] = useState(false);
  const [openSureDelete, setOpenSureDelete] = useState(false);
  const [imageToDelete, setImageToDelete] = useState(null);
  const [listPhotos, setListPhotos] = useState([]);
  const { infoUserActive } = useContext(AuthUserContext);
  const fileInputRef = useRef();

  if (!infoUserActive) {
    return null;
  }

  const { uid, displayName, username, photoUrl, coverPhoto } = infoUserActive;

  useEffect(() => {
    const getAllPhotosUser = async () => {
      setStartLoadingListPhotos(true);

      try {
        const listPhotosUser = await loadListPhotosUser({
          username,
          typePhoto,
        });

        setListPhotos(listPhotosUser);
      } catch (error) {
        console.log(error);
      }

      setStartLoadingListPhotos(false);
    };

    getAllPhotosUser();
  }, []);

  const onChangePhoto = ({ target }) => {
    if (target.files === 0) return;

    setStartLoadingPhoto(true);

    try {
      const file = target.files[0];

      uploadUserProfileImage({
        file,
        setStartLoadingPhoto,
        typePhoto,
        uid,
        username,
      });

      setOpenEditPhoto(false);
    } catch (error) {
      console.log(error);
      Swal.fire("Error al cargar la imagen", "Intentalo otra vez", "error");
      setStartLoadingPhoto(false);
    }
  };

  const onDeleteObjectIfNotProfilePhoto = async () => {
    const whatIsPhotoActual = typePhoto === "photoUrl" ? photoUrl : coverPhoto;
    const photoUserNow = whatIsPhotoActual?.split("/")[7];
    const photoName = photoUserNow?.split("%")[2].split("?")[0].substring(2);

    if (photoName === imageToDelete.name) {
      console.log(
        `No se puede eliminar esta foto porque la tienes de ${
          typePhoto === "photoUrl" ? "perfil" : "portada"
        }`
      );
      return;
    }

    try {
      await deleteObject(imageToDelete);

      setOpenSureDelete(false);
      setOpenEditPhoto(false);
    } catch (error) {
      console.error(error);
      setOpenSureDelete(false);
    }
  };

  const onOpenModalDelete = (ref) => {
    setOpenSureDelete(true);

    setImageToDelete(ref);
  };

  const onDeletePhotoActual = async () => {
    const photoToDelete = typePhoto === "photoUrl" ? photoUrl : coverPhoto;

    if (!photoToDelete) {
      return;
    }

    setStartLoadingDeletePhoto(true);
    try {
      const docRef = doc(firebaseDB, "users", uid);

      await updateDoc(docRef, {
        [typePhoto]: deleteField(),
      });
      setStartLoadingDeletePhoto(false);
    } catch (error) {
      console.log(error);
      setStartLoadingDeletePhoto(false);
    }
  };

  return {
    displayName,
    fileInputRef,
    listPhotos,
    onChangePhoto,
    onDeleteObjectIfNotProfilePhoto,
    onDeletePhotoActual,
    onOpenModalDelete,
    openSureDelete,
    setOpenSureDelete,
    startLoadingDeletePhoto,
    startLoadingListPhotos,
    startLoadingPhoto,
  };
};

import { useRef, useState } from "react";
import { addPhotoToCloudinary } from "../../../../../helpers";
import { doc, writeBatch } from "firebase/firestore";
import { firebaseDB } from "../../../../../services";
import { photoUser } from "../../../../../assets";

export const useChangePhotoGroup = ({
  setOpenChangePhotoGroup,
  userMessage,
}) => {
  const filePhoto = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [startLoading, setStartLoading] = useState(false);

  const onChangeFile = ({ target }) => {
    if (target.files.length === 0) return;
    setSelectedImage(target.files[0]);
  };

  const onChangePhoto = async () => {
    if (!selectedImage) return;

    setStartLoading(true);

    try {
      const imageGroup = await addPhotoToCloudinary(selectedImage);

      const batch = writeBatch(firebaseDB);
      const { idUniqGroup, usersFriends } = userMessage;

      for (const userUid of usersFriends) {
        const userChatRef = doc(firebaseDB, "usersChats", userUid);

        batch.update(userChatRef, {
          [idUniqGroup + ".infoUser"]: {
            ...userMessage,
            photoGroup: imageGroup,
          },
        });
      }

      await batch.commit();

      setOpenChangePhotoGroup(false);
    } catch (error) {
      console.error(error);
    } finally {
      setStartLoading(false);
    }
  };

  const showImage = selectedImage
    ? URL.createObjectURL(selectedImage)
    : userMessage?.photoGroup || photoUser;

  return {
    // Atributos
    filePhoto,
    showImage,
    startLoading,

    // Metodos
    onChangeFile,
    onChangePhoto,
  };
};

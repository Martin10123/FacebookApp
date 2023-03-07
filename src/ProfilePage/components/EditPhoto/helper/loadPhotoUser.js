import { doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { firebaseDB, storage } from "../../../../firebase/firebaseConfig";

export const uploadUserProfileImage = async ({
  file,
  setStartLoadingPhoto,
  typePhoto,
  uid,
  username,
}) => {
  if (!file) {
    throw new Error("No hay imagen");
  }

  try {
    const storageRef = ref(storage, `${typePhoto}/${username}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    const snapshot = await new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        () => {},
        (error) => {
          reject(error);
        },
        () => {
          resolve(uploadTask.snapshot);
        }
      );
    });

    const downloadURL = await getDownloadURL(snapshot.ref);

    await updateUserProfileImage({ uid, typePhoto, downloadURL });

    console.log("La imagen se subió correctamente.");

    setStartLoadingPhoto(false);
  } catch (error) {
    console.log("Ocurrió un error al subir la imagen:", error);
    setStartLoadingPhoto(false);
  }
};

const updateUserProfileImage = async ({ uid, typePhoto, downloadURL }) => {
  const docRef = doc(firebaseDB, "users", uid);

  await updateDoc(docRef, {
    [typePhoto]: downloadURL,
  });
};

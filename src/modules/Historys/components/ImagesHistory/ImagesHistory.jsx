import { useRef, useState } from "react";
import { doc, setDoc } from "firebase/firestore";

import { addPhotoToCloudinary } from "../../../../helpers";
import { ButtonForm } from "../../../Auth/helpers";
import { firebaseDB } from "../../../../services";
import { generateUsernameUnic } from "../../../Auth/RegisterPage/helpers";
import { LayoutCreateHistory } from "../Layout/LayoutCreateHistory";

import styles from "./imagesHistory.module.css";

export const ImagesHistory = ({ infoUserActive, setOpenHistoryImage }) => {
  const [selectImage, setSelectImage] = useState("");
  const [selectPrivacity, setSelectPrivacity] = useState("Publico");
  const [startLoading, setStartLoading] = useState(false);
  const refFile = useRef(null);

  const onFileInputchange = ({ target }) => {
    if (target.files.length === 0) return;

    setSelectImage(target.files[0]);
  };

  const onCreateHistoryImage = async () => {
    if (selectImage === "") return;

    setStartLoading(true);

    try {
      let fileHistory;

      if (selectImage) {
        fileHistory = await addPhotoToCloudinary(selectImage);
      }

      const idHistory = generateUsernameUnic(infoUserActive.displayName);

      await setDoc(
        doc(firebaseDB, "histories", infoUserActive.uid),
        {
          [idHistory]: {
            date: new Date().getTime(),
            privacity: selectPrivacity,
            photoHistory: fileHistory,
            uidUser: infoUserActive.uid,
            isPhoto: true,
          },
        },
        { merge: true }
      );

      setStartLoading(false);
      setOpenHistoryImage(false);
    } catch (error) {
      console.log(error);
      setStartLoading(false);
    }
  };

  return (
    <LayoutCreateHistory
      disabledBotton={startLoading}
      isCreate={true}
      onCloseModal={() => setOpenHistoryImage(false)}
      onCreateHistory={onCreateHistoryImage}
    >
      <div className={styles.image_history__list}>
        {selectImage && (
          <figure className={styles.image_history__img_item}>
            <img
              src={URL.createObjectURL(selectImage)}
              alt="Fotos seleccionadas"
            />
          </figure>
        )}

        <input
          onChange={onFileInputchange}
          ref={refFile}
          style={{ display: "none" }}
          type="file"
        />

        <div className={styles.image_history__select_image}>
          <ButtonForm
            disabled={startLoading}
            onSubmit={() => refFile.current.click()}
            stylesButton={{ padding: "0 1rem" }}
            title="Seleccionar imagen"
          />

          <select
            className={styles.image_history__select}
            onChange={({ target }) => setSelectPrivacity(target.value)}
            value={selectPrivacity}
          >
            <option value="Publico">Publico</option>
            <option value="Amigos">Amigos</option>
            <option value="Solo yo">Solo yo</option>
          </select>
        </div>
      </div>
    </LayoutCreateHistory>
  );
};

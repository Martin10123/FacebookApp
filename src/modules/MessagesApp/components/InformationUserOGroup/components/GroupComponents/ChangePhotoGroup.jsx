import { LayoutGroup } from "./LayoutGroup";
import { useChangePhotoGroup } from "../../hooks";

import styles from "./groupComponents.module.css";

export const ChangePhotoGroup = ({ setOpenChangePhotoGroup, userMessage }) => {
  const {
    // Atributos
    filePhoto,
    showImage,
    startLoading,

    // Metodos
    onChangeFile,
    onChangePhoto,
  } = useChangePhotoGroup({ setOpenChangePhotoGroup, userMessage });

  return (
    <LayoutGroup
      disabledButton={startLoading}
      nameModal="Cambiar la foto del grupo"
      onCloseModal={() => setOpenChangePhotoGroup(false)}
      onSentForm={onChangePhoto}
      showBotton={true}
    >
      <figure
        className={styles.photo_group__photo}
        onClick={() => filePhoto.current.click()}
      >
        <img src={showImage} alt="Foto de perfil del usuario" />
        <i className="fa-solid fa-camera"></i>
      </figure>

      <input
        onChange={onChangeFile}
        ref={filePhoto}
        style={{ display: "none" }}
        type="file"
      />
    </LayoutGroup>
  );
};

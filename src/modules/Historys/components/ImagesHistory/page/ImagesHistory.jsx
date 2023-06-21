import { CreateHistoryPreview } from "../../CreateHistory/components/CreateHistoryPreview";
import { ImagesHistoryDesk } from "../components/ImagesHistoryDesk";
import { ImagesHistoryMobile } from "../components/ImagesHistoryMobile";

import styles from "./imagesHistory.module.css";

export const ImagesHistory = ({
  infoUserActive,
  selectImage,
  setOpenHistoryFile,
  setSelectImage,
}) => {
  return (
    <div className={styles.image__history__container}>
      <div className={styles.image_history__box_images_history}>
        <ImagesHistoryMobile />

        <ImagesHistoryDesk
          selectImage={selectImage}
          setOpenHistoryFile={setOpenHistoryFile}
          setSelectImage={setSelectImage}
        />

        <CreateHistoryPreview>
          <div className={styles.image__history__item_image_preview}>
            <div className={styles.image__history__list_nav_preview}>
              <i className="fa-solid fa-xmark"></i>
            </div>

            <figure className={styles.image__history__show_image}>
              <img
                src={URL.createObjectURL(selectImage)}
                alt="Imagen de la historia previa"
              />
            </figure>
          </div>
        </CreateHistoryPreview>
      </div>
    </div>
  );
};

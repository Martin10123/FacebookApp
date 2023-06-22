import { notFound404 } from "../../../../../assets";
import { CreateHistoryPreview } from "../../CreateHistory/components/CreateHistoryPreview";
import { ImagesHistoryDesk } from "../components/ImagesHistoryDesk";
import { ImagesHistoryMobile } from "../components/ImagesHistoryMobile";

import styles from "./imagesHistory.module.css";

export const ImagesHistory = ({
  infoUserActive,
  selectImage,
  setOpenHistoryFile,
}) => {
  return (
    <div className={styles.image__history__container}>
      <div className={styles.image_history__box_images_history}>
        <ImagesHistoryMobile infoUserActive={infoUserActive} />

        <ImagesHistoryDesk
          infoUserActive={infoUserActive}
          selectImage={selectImage}
          setOpenHistoryFile={setOpenHistoryFile}
        />

        <CreateHistoryPreview>
          <div className={styles.image__history__item_image_preview}>
            <div className={styles.image__history__list_nav_preview}>
              <i className="fa-solid fa-xmark"></i>
            </div>

            <figure className={styles.image__history__show_image}>
              <img
                src={
                  selectImage.length > 0
                    ? URL.createObjectURL(selectImage[0])
                    : notFound404
                }
                alt="Imagen de la historia previa"
              />
            </figure>
          </div>
        </CreateHistoryPreview>
      </div>
    </div>
  );
};

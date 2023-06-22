import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CreateHistory, ImagesHistory } from "../..";
import { HistoryDesk } from "../components/HistoryDesk";
import { AuthUserContext } from "../../../../../context";
import { PrivacityHistories } from "../components/PrivacityHistories";
import {
  ContextListImagesContext,
  ContextListImagesProvider,
} from "../../ImagesHistory/context/ContextListImages";
import { useKnowIfDeskOMobile } from "../../../../../hooks";

import styles from "./selectTypeHistory.module.css";

export const SelectTypeHistory = () => {
  return (
    <ContextListImagesProvider>
      <SelectTypeHistoryIOF />
    </ContextListImagesProvider>
  );
};

const SelectTypeHistoryIOF = () => {
  const { infoUserActive } = useContext(AuthUserContext);
  const {
    onFileInputchange,
    openHistoryFile,
    selectImage,
    setOpenHistoryFile,
    setSelectImage,
  } = useContext(ContextListImagesContext);
  const navigate = useNavigate();
  const refFile = useRef();

  const isMobile = useKnowIfDeskOMobile();

  const [openHistoryText, setOpenHistoryText] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);

  const onBackPage = (type) => {
    if (type === "logo") {
      navigate("/");
    } else {
      navigate(-1);
    }
  };

  return (
    <div className={styles.select_history__container}>
      <div className={styles.select_history__content}>
        <HistoryDesk displayNameUser={infoUserActive.displayName} />

        <div className={styles.select_history__nav_mobile}>
          <i className="fa-solid fa-xmark" onClick={onBackPage}></i>
          <p>Crear historia</p>
          <i
            className="fa-solid fa-gear"
            onClick={() => setOpenSettings(true)}
          ></i>
        </div>

        <div className={styles.select_history__options}>
          <div
            className={styles.select_history__item}
            onClick={() => setOpenHistoryText(true)}
          >
            <div className={styles.select_history__icon}>
              <p>Aa</p>
            </div>
            <p>Texto</p>
          </div>
          <div
            className={styles.select_history__item}
            onClick={() => refFile.current.click()}
          >
            <div className={styles.select_history__icon}>
              <i className="fa-solid fa-image"></i>
            </div>
            <p>Seleccionar una</p>
          </div>
        </div>
        <input
          ref={refFile}
          type="file"
          style={{ display: "none" }}
          onChange={onFileInputchange}
          multiple={isMobile ? true : false}
        />
      </div>

      {openHistoryText && (
        <CreateHistory
          infoUserActive={infoUserActive}
          setOpenHistoryText={setOpenHistoryText}
        />
      )}

      {openHistoryFile && (
        <ImagesHistory
          infoUserActive={infoUserActive}
          selectImage={selectImage}
          setOpenHistoryFile={setOpenHistoryFile}
          setSelectImage={setSelectImage}
        />
      )}

      {openSettings && <PrivacityHistories setOpenSettings={setOpenSettings} />}
    </div>
  );
};

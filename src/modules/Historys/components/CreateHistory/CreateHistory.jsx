import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";

import { ColorsGradients } from "./ColorsGradients";
import { firebaseDB } from "../../../../services";
import { LayoutCreateHistory } from "../Layout/LayoutCreateHistory";
import { generateUsernameUnic } from "../../../Auth/RegisterPage/helpers";

import styles from "./createHistory.module.css";

export const CreateHistory = ({ infoUserActive, setOpenHistoryText }) => {
  const [inputHistory, setInputHistory] = useState("");
  const [openColors, setOpenColors] = useState(false);
  const [selectColor, setSelectColor] = useState("");
  const [selectPrivacity, setSelectPrivacity] = useState("Publico");
  const [startLoading, setStartLoading] = useState(false);

  const onCreateHistoryText = async () => {
    if (inputHistory.trim().length === 0) return;

    setStartLoading(true);

    const idHistory = generateUsernameUnic(infoUserActive.displayName);

    try {
      await setDoc(
        doc(firebaseDB, "histories", infoUserActive.uid),
        {
          [idHistory]: {
            date: new Date().getTime(),
            privacity: selectPrivacity,
            textHistory: inputHistory,
            uidUser: infoUserActive.uid,
            colorHistory: selectColor,
          },
        },
        { merge: true }
      );

      setStartLoading(false);
      setOpenHistoryText(false);
    } catch (error) {
      console.log(error);
      setStartLoading(false);
    }
  };

  return (
    <>
      <LayoutCreateHistory
        disabledBotton={startLoading}
        isCreate={true}
        onCloseModal={() => setOpenHistoryText(false)}
        onCreateHistory={onCreateHistoryText}
      >
        <div className={styles.create_history__write_history}>
          <textarea
            onChange={({ target }) => setInputHistory(target.value)}
            placeholder="Escribir historia..."
            value={inputHistory}
          />
        </div>

        <div className={styles.create_history__select_color_type_text}>
          <div
            className={styles.create_history__color_back}
            onClick={() => setOpenColors(true)}
          ></div>
          <select
            className={styles.create_history__type_text}
            onChange={({ target }) => setSelectPrivacity(target.value)}
            value={selectPrivacity}
          >
            <option value="Publico">Publico</option>
            <option value="Amigos">Amigos</option>
            <option value="Solo yo">Solo yo</option>
          </select>
        </div>
      </LayoutCreateHistory>

      {openColors && (
        <ColorsGradients
          selectColor={selectColor}
          setOpenColors={setOpenColors}
          setSelectColor={setSelectColor}
        />
      )}
    </>
  );
};

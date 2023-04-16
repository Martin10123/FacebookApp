import { deleteField, doc, setDoc } from "firebase/firestore";

import { useCloseModal } from "../../../../hooks";
import { firebaseDB } from "../../../../services";

import styles from "./seeHistory.module.css";

export const OptionsHistory = ({
  historySelected,
  infoUserActive,
  setOpenOptions,
}) => {
  const ref = useCloseModal(() => setOpenOptions(false));

  const onDeleteHistory = async () => {
    try {
      await setDoc(
        doc(firebaseDB, "histories", infoUserActive.uid),
        { [historySelected[0]]: deleteField() },

        { merge: true }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div ref={ref} className={styles.options_history__container}>
      <div
        className={styles.options_history__close}
        onClick={() => setOpenOptions(false)}
      ></div>
      <div className={styles.options_history__content}>
        <div className={styles.options_history__item}>
          <p>Enviar por mensaje</p>
          <i className="fa-brands fa-facebook-messenger"></i>
        </div>
        <div className={styles.options_history__item} onClick={onDeleteHistory}>
          <p>Eliminar historia</p>
          <i className="fa-solid fa-trash"></i>
        </div>
      </div>
    </div>
  );
};

import { useContext, useState } from "react";

import { AuthUserContext, GetHistoriesContext } from "../../../context";
import { CardHistoryMain } from "./CardHistoryMain";
import { photoUser } from "../../../assets";
import { SelectTypeHistory } from "../components";

import styles from "./history.module.css";

export const HistoryPage = () => {
  const { infoUserActive, users } = useContext(AuthUserContext);
  const { startLoadingHistories, getHistories } =
    useContext(GetHistoriesContext);
  const [openSelectTypeHistory, setOpenSelectTypeHistory] = useState(false);

  return (
    <>
      <section className={styles.history__container}>
        <div
          className={styles.history__create_history}
          onClick={() => setOpenSelectTypeHistory(true)}
        >
          <figure className={styles.history__create_photo}>
            <img
              src={infoUserActive?.photoUrl || photoUser}
              alt="Foto de perfil"
            />
          </figure>
          <i className="fa-solid fa-circle-plus"></i>
          <p>Crear historia</p>
        </div>

        {startLoadingHistories && (
          <div className="loading_box_dimension">
            <div className="spinner"></div>
          </div>
        )}

        {getHistories.map((history) => (
          <CardHistoryMain
            key={Object.entries(history)[0][0]}
            history={Object.entries(history)[1][1]}
            users={users}
          />
        ))}
      </section>

      {openSelectTypeHistory && (
        <SelectTypeHistory
          infoUserActive={infoUserActive}
          setOpenSelectTypeHistory={setOpenSelectTypeHistory}
        />
      )}
    </>
  );
};

import { useContext, useState } from "react";

import { AuthUserContext, GetHistoriesContext } from "../../../context";
import { CardHistoryMain } from "./CardHistoryMain";
import { photoUser } from "../../../assets";
import { SelectTypeHistory } from "../components";
import { useDeleteHistory } from "../hook/useDeleteHistory";

import styles from "./history.module.css";

export const HistoryPage = () => {
  const { infoUserActive, users } = useContext(AuthUserContext);
  const { startLoadingHistories, getHistories } =
    useContext(GetHistoriesContext);
  const [openSelectTypeHistory, setOpenSelectTypeHistory] = useState(false);

  const historyUserActive = getHistories.filter(
    (history) => history?.idHistorie === infoUserActive?.uid
  );

  const aloneUserActive = Object.values(
    historyUserActive[0]?.histories || {}
  )[0];

  useDeleteHistory({ getHistories });

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

        {aloneUserActive && (
          <CardHistoryMain history={aloneUserActive} users={users} />
        )}

        {getHistories.map(
          ({ idHistorie, histories }) =>
            Object.keys(histories || {}).length !== 0 &&
            idHistorie !== infoUserActive?.uid && (
              <CardHistoryMain
                key={Object.keys(histories || {})[0]}
                history={Object.values(histories || {})[0]}
                users={users}
              />
            )
        )}
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

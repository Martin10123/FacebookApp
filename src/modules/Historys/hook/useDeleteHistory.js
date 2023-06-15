import { deleteDoc, deleteField, doc, setDoc } from "firebase/firestore";
import { firebaseDB } from "../../../services";
import { useEffect } from "react";

export const useDeleteHistory = ({ getHistories }) => {
  useEffect(() => {
    const eliminarCartasAntiguas = async () => {
      getHistories.filter(({ idHistorie, histories }) => {
        Object.entries(histories || {}).filter((historyData) => {
          const fechaPublicacion = historyData[1].date;
          const fechaActual = new Date().getTime();
          const tiempoTranscurrido = fechaActual - fechaPublicacion;
          const unDiaEnMilisegundos = 24 * 60 * 60 * 1000;

          if (tiempoTranscurrido > unDiaEnMilisegundos) {
            setDoc(
              doc(firebaseDB, "histories", idHistorie),
              {
                ["histories"]: {
                  [historyData[0]]: deleteField(),
                },
              },
              { merge: true }
            );
          }
        });

        if (Object.values(histories || {}).length === 0) {
          deleteDoc(doc(firebaseDB, "histories", idHistorie));
        }
      });
    };

    eliminarCartasAntiguas();
  }, []);
};

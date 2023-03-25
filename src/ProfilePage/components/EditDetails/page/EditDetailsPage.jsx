import {
  EditCountry,
  EditEducation,
  EditRelationship,
  EditWork,
} from "../components";
import { useEditDetailsPage } from "../hook";
import { LayoutDetails } from "../layout/LayoutDetails";

import styles from "./editDetails.module.css";

export const EditDetailsPage = ({
  infoUserActive,
  setOpenEditDetails,
  userMatchUsername,
}) => {
  const {
    country,
    job,
    openCountry,
    openEducation,
    openRelationship,
    openWork,
    setOpenCountry,
    setOpenEducation,
    setOpenRelationship,
    setOpenWork,
    showDetailsEducation,
    showDetailsRelation,
  } = useEditDetailsPage({ userMatchUsername });

  return (
    <>
      <section className={styles.details__container}>
        <div className={styles.details__box}>
          <div className={styles.details__content}>
            <i
              className="fa-solid fa-arrow-left"
              onClick={() => setOpenEditDetails(false)}
            ></i>
            <p>Editar detalles</p>
          </div>
          <div className={styles.details__title}>
            <h2>Personaliza tus detalles</h2>
            <p>Los datos que selecciones serán públicos</p>
          </div>
          <div className={styles.details__contain_all_info}>
            <LayoutDetails
              title="Trabajo"
              titleButton="Agregar trabajo"
              infoDetail={job?.job || "Ingresa un trabajo..."}
              onOpenModal={() => setOpenWork(true)}
            />
            <LayoutDetails
              title="Educación"
              titleButton="Agregar estudios"
              infoDetail={showDetailsEducation()}
              onOpenModal={() => setOpenEducation(true)}
            />
            <LayoutDetails
              title="Pais - Ciudad"
              titleButton="Agregar pais"
              infoDetail={
                country?.selectCountry && country?.selectCity
                  ? `${country?.selectCountry} - ${country?.selectCity}`
                  : "Ingrese su pais actual..."
              }
              onOpenModal={() => setOpenCountry(true)}
            />
            <LayoutDetails
              title="Relación"
              titleButton="Agregar relación"
              infoDetail={showDetailsRelation()}
              onOpenModal={() => setOpenRelationship(true)}
            />
          </div>
        </div>
      </section>

      {openCountry && (
        <EditCountry
          infoUserActive={infoUserActive}
          setOpenCountry={setOpenCountry}
        />
      )}
      {openEducation && (
        <EditEducation
          infoUserActive={infoUserActive}
          setOpenEducation={setOpenEducation}
        />
      )}
      {openRelationship && (
        <EditRelationship
          infoUserActive={infoUserActive}
          setOpenRelationship={setOpenRelationship}
        />
      )}
      {openWork && (
        <EditWork infoUserActive={infoUserActive} setOpenWork={setOpenWork} />
      )}
    </>
  );
};

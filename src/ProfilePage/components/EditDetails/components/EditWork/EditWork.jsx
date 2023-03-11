import { InputForm } from "../../../../../Auth";
import { listJobs } from "../../../../helpers/dataGlobal";
import { SureDeleteElement } from "../../../SureDeletePost/SureDeletePost";
import { LayoutModalEditDetails } from "../../layout/LayoutModalEditDetails";
import { FilterOptions } from "../FilterOptions/FilterOptions";
import { useEditWork } from "./hook/useEditWork";

import styles from "./work.module.css";

export const EditWork = ({ setOpenWork, infoUserActive }) => {
  const {
    formSubmitted,
    onDeleteJob,
    onInputChange,
    onSaveJob,
    onSelectJob,
    openJobs,
    openSureDelete,
    placeWork,
    placeWorkValid,
    selectedJob,
    setOpenJobs,
    setOpenSureDelete,
    startLoading,
    startLoadingDelete,
  } = useEditWork({ setOpenWork, infoUserActive });

  const {
    infoPersonal: { job },
  } = infoUserActive;

  return (
    <>
      <LayoutModalEditDetails
        disabledSaved={startLoading}
        disabledDelete={startLoadingDelete}
        onDeleteDetail={() => setOpenSureDelete(true)}
        onSaveDetail={onSaveJob}
        setOpenDetail={setOpenWork}
        titleInfo="Trabajo"
        titleReturn="Agregar tu trabajo"
      >
        <InputForm
          errorActive={!!placeWorkValid && formSubmitted}
          name="placeWork"
          onChange={onInputChange}
          placeholder="Lugar donde trabajas"
          styleIcon="fa-regular fa-building"
          textError={placeWorkValid || ""}
          type="text"
          value={job?.placeWork || placeWork}
        />

        <div className={styles.options__form}>
          <div
            className={styles.options__input_form}
            onClick={() => setOpenJobs(true)}
          >
            <span className={styles.options__span_icon}>
              <i className="fa-solid fa-briefcase"></i>
            </span>
            {selectedJob.length === 0 && formSubmitted ? (
              <p style={{ color: "red" }}>Debes elegir una</p>
            ) : (
              <>
                {selectedJob.length === 1 ? (
                  <p>{selectedJob[0] || "Nombre de tu trabajo"}</p>
                ) : (
                  <p>{job?.job || selectedJob[0] || "Nombre de tu trabajo"}</p>
                )}
              </>
            )}
          </div>
        </div>
      </LayoutModalEditDetails>

      {openJobs && (
        <FilterOptions
          choosedBefore={selectedJob}
          data={listJobs}
          onSelectData={onSelectJob}
          setOpenFilter={setOpenJobs}
        />
      )}

      {openSureDelete && (
        <SureDeleteElement
          disabled={startLoadingDelete}
          titleShow="¿Quieres eliminar tus datos sobre tu ocupación?"
          onCancelDelete={() => setOpenSureDelete(false)}
          onSubmitDelete={onDeleteJob}
        />
      )}
    </>
  );
};

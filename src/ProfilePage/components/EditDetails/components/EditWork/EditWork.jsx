import { useState } from "react";
import { InputForm } from "../../../../../Auth";
import { listJobs } from "../../../../helpers/dataGlobal";
import { LayoutModalEditDetails } from "../../layout/LayoutModalEditDetails";
import { FilterOptions } from "../FilterOptions/FilterOptions";

import styles from "./work.module.css";

export const EditWork = () => {
  const [openJobs, setOpenJobs] = useState(false);

  return (
    <>
      <LayoutModalEditDetails
        titleReturn="Agregar tu trabajo"
        titleInfo="Trabajo"
      >
        <InputForm
          name="job"
          placeholder="Lugar donde trabajas"
          type="text"
          styleIcon="fa-regular fa-building"
        />

        <div className={styles.options__form}>
          <div
            className={styles.options__input_form}
            onClick={() => setOpenJobs(true)}
          >
            <span className={styles.options__span_icon}>
              <i className="fa-solid fa-briefcase"></i>
            </span>
            <p>Nombre de tu trabajo</p>
          </div>
        </div>

        <div className={styles.option__select_by}>
          <p>Trabajo en miami</p>
        </div>
      </LayoutModalEditDetails>

      {openJobs && (
        <FilterOptions setOpenFilter={setOpenJobs} data={listJobs} />
      )}
    </>
  );
};

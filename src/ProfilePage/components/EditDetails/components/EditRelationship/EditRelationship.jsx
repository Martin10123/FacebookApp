import { useState } from "react";

import { FilterOptions } from "../FilterOptions/FilterOptions";
import { InputForm } from "../../../../../Auth";
import { LayoutModalEditDetails } from "../../layout/LayoutModalEditDetails";
import { listRelationships } from "../../../../helpers/dataGlobal";

import styles from "../../layout/editModalLayout.module.css";

export const EditRelationship = () => {
  const [openJobs, setOpenJobs] = useState(false);

  return (
    <>
      <LayoutModalEditDetails
        titleReturn="Agregar tu relación"
        titleInfo="Relación"
      >
        <div
          className={styles.layout_modal__search_partner}
          onClick={() => setOpenJobs(true)}
        >
          <p>
            Situación sentimental
            <i className="fa-solid fa-caret-down"></i>
          </p>
        </div>
        <InputForm
          name="relation"
          placeholder="Pareja"
          type="text"
          styleIcon="fa-solid fa-person-half-dress"
        />
      </LayoutModalEditDetails>
      {openJobs && (
        <FilterOptions setOpenFilter={setOpenJobs} data={listRelationships} />
      )}
    </>
  );
};

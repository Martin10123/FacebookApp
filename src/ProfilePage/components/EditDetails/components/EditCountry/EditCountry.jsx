import { useState } from "react";
import { dataCountrys } from "../../../../helpers/dataGlobal";
import { LayoutModalEditDetails } from "../../layout/LayoutModalEditDetails";
import { FilterOptions } from "../FilterOptions/FilterOptions";
import { InputForm } from "../../../../../Auth";

import styles from "../EditWork/work.module.css";

export const EditCountry = () => {
  const [openCountrys, setOpenCountrys] = useState(false);

  return (
    <>
      <LayoutModalEditDetails titleReturn="Agrega tu pais" titleInfo="Pais">
        <div className={styles.options__form}>
          <div
            className={styles.options__input_form}
            onClick={() => setOpenCountrys(true)}
          >
            <span className={styles.options__span_icon}>
              <i className="fa-solid fa-earth-americas"></i>
            </span>
            <p>Elige tu pais</p>
          </div>
        </div>

        <InputForm
          name="city"
          placeholder="Ciudad..."
          type="text"
          styleIcon="fa-solid fa-tree-city"
        />

        <div className={styles.options__select_by}>
          <p>Estudio en miami</p>
        </div>
      </LayoutModalEditDetails>

      {openCountrys && (
        <FilterOptions setOpenFilter={setOpenCountrys} data={dataCountrys} />
      )}
    </>
  );
};

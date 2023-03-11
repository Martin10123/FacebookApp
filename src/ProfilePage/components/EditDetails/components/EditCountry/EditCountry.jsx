import { dataCountrys } from "../../../../helpers/dataGlobal";
import { FilterOptions } from "../FilterOptions/FilterOptions";
import { InputForm } from "../../../../../Auth";
import { LayoutModalEditDetails } from "../../layout/LayoutModalEditDetails";
import { SureDeleteElement } from "../../../SureDeletePost/SureDeletePost";

import { useCountry } from "./hook/useCountry";

import styles from "../EditWork/work.module.css";

export const EditCountry = ({ setOpenCountry, infoUserActive }) => {
  const {
    formSubmitted,
    onDeleteCity,
    onSavedCity,
    openListCountrys,
    openSureDelete,
    selectCity,
    selectCountry,
    setOpenListCountrys,
    setOpenSureDelete,
    setSelectCity,
    setSelectCountry,
    startLoading,
    startLoadingDelete,
  } = useCountry({ setOpenCountry, infoUserActive });

  return (
    <>
      <LayoutModalEditDetails
        disabledDelete={startLoadingDelete}
        disabledSaved={startLoading}
        onDeleteDetail={() => setOpenSureDelete(true)}
        onSaveDetail={onSavedCity}
        setOpenDetail={setOpenCountry}
        titleInfo="Pais"
        titleReturn="Agrega tu pais"
      >
        <div className={styles.options__form}>
          <div
            className={styles.options__input_form}
            onClick={() => setOpenListCountrys(true)}
          >
            <span className={styles.options__span_icon}>
              <i className="fa-solid fa-earth-americas"></i>
            </span>
            <p>
              {selectCountry.length !== 0 ? selectCountry : "Elige tu pais"}
            </p>
          </div>

          {selectCountry.length === 0 && formSubmitted && (
            <p className={styles.options__show_error}>Debe de elegir un pais</p>
          )}
        </div>

        <InputForm
          name="city"
          onChange={(e) => setSelectCity(e.target.value)}
          placeholder="Ciudad..."
          styleIcon="fa-solid fa-tree-city"
          type="text"
          value={selectCity}
        />

        {selectCity.trim().length <= 4 && formSubmitted && (
          <p className={styles.options__show_error}>Ingrese su ciudad real</p>
        )}
      </LayoutModalEditDetails>

      {openListCountrys && (
        <FilterOptions
          setOpenFilter={setOpenListCountrys}
          data={dataCountrys}
          onSelectData={setSelectCountry}
          choosedBefore={selectCountry}
        />
      )}

      {openSureDelete && (
        <SureDeleteElement
          onSubmitDelete={onDeleteCity}
          onCancelDelete={() => setOpenSureDelete(false)}
          titleShow="¿Seguro que quieres eliminar esta información?"
          disabled={startLoadingDelete}
        />
      )}
    </>
  );
};

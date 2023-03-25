import { FilterOptions } from "../FilterOptions/FilterOptions";
import { InputForm } from "../../../../../Auth";
import { LayoutModalEditDetails } from "../../layout/LayoutModalEditDetails";
import { listRelationships } from "../../../../helpers/dataGlobal";
import { useRelationship } from "./hook/useRelationship";
import { SureDeleteElement } from "../../../SureDeletePost/SureDeletePost";

import styles from "../../layout/editModalLayout.module.css";

export const EditRelationship = ({ infoUserActive, setOpenRelationship }) => {
  const {
    formSubmitted,
    onDeleteRelationship,
    onSavedRelationship,
    openListRelationships,
    openSureDelete,
    selectRelationship,
    setOpenListRelationships,
    setOpenSureDelete,
    setSelectRelationship,
    setWhoYourPartner,
    startLoading,
    startLoadingDelete,
    whoYourPartner,
  } = useRelationship({ infoUserActive, setOpenRelationship });

  return (
    <>
      <LayoutModalEditDetails
        disabledDelete={startLoadingDelete}
        disabledSaved={startLoading}
        onDeleteDetail={() => setOpenSureDelete(true)}
        onSaveDetail={onSavedRelationship}
        setOpenDetail={setOpenRelationship}
        titleInfo="Relación"
        titleReturn="Agregar tu relación"
      >
        <div
          className={styles.layout_modal__search_partner}
          onClick={() => setOpenListRelationships(true)}
        >
          <p>
            {selectRelationship.length !== 0
              ? selectRelationship
              : "Situación sentimental"}
            <i className="fa-solid fa-caret-down"></i>
          </p>
        </div>

        {selectRelationship.length === 0 && formSubmitted && (
          <p className={styles.options__show_error}>
            Debe de elegir una situación
          </p>
        )}

        {(selectRelationship === "En una relación" ||
          selectRelationship === "En una relación toxica") && (
          <InputForm
            name="relation"
            onChange={(e) => setWhoYourPartner(e.target.value)}
            placeholder="Pareja"
            styleIcon="fa-solid fa-person-half-dress"
            type="text"
            value={whoYourPartner}
          />
        )}

        {whoYourPartner.trim().length <= 4 === 0 && formSubmitted && (
          <p className={styles.options__show_error}>¿Quien es tu pareja?</p>
        )}
      </LayoutModalEditDetails>

      {openListRelationships && (
        <FilterOptions
          choosedBefore={selectRelationship}
          data={listRelationships}
          onSelectData={setSelectRelationship}
          setOpenFilter={setOpenListRelationships}
        />
      )}

      {openSureDelete && (
        <SureDeleteElement
          onSubmitDelete={onDeleteRelationship}
          onCancelDelete={() => setOpenSureDelete(false)}
          titleShow="¿Seguro que quieres eliminar esta información?"
          disabled={startLoadingDelete}
        />
      )}
    </>
  );
};

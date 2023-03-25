import { ButtonForm } from "../../../../Auth";

import styles from "./editModalLayout.module.css";

export const LayoutModalEditDetails = ({
  children,
  disabledSaved,
  disabledDelete,
  onDeleteDetail,
  onSaveDetail,
  setOpenDetail,
  titleInfo,
  titleReturn,
}) => {
  return (
    <>
      <div className={styles.layout_modal__container}>
        <div className={styles.layout_modal__content}>
          <div className={styles.layout_modal__nav}>
            <p>{titleReturn}</p>
            <button
              disabled={disabledSaved}
              className={styles.layout_modal__btn_close}
              onClick={() => setOpenDetail(false)}
            >
              X
            </button>
          </div>

          <div className={styles.layout_modal__contain_info}>
            <div className={styles.layout_modal__title_type}>
              <p>{titleInfo}</p>

              <span>
                <i className="fa-solid fa-earth-americas"></i>
                Público
              </span>
            </div>

            {children}
          </div>

          <div className={styles.layout_modal__buttons}>
            <ButtonForm
              disabled={disabledDelete}
              onSubmit={onDeleteDetail}
              stylesButton={{ background: "#d8d8d8", color: "#000" }}
              title={disabledDelete ? "Eliminando..." : "Eliminar"}
            />
            <ButtonForm
              disabled={disabledSaved}
              onSubmit={onSaveDetail}
              title={disabledSaved ? "Guardando..." : "Guardar"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

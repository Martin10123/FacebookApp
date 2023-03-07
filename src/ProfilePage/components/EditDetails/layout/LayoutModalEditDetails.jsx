import { ButtonForm } from "../../../../Auth";

import styles from "./editModalLayout.module.css";

export const LayoutModalEditDetails = ({
  children,
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
              className={styles.layout_modal__btn_close}
              onClick={() => setOpenDetail(true)}
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
              title="Eliminar"
              stylesButton={{ background: "#d8d8d8", color: "#000" }}
              onSubmit={onDeleteDetail}
            />
            <ButtonForm title="Guardar" onSubmit={onSaveDetail} />
          </div>
        </div>
      </div>
    </>
  );
};

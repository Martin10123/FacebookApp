import styles from "./formCOA.module.css";

export const FormCOA = ({
  onChange,
  onChangeFile,
  onSubmitForm,
  placeholder,
  refFile,
  selectedImage,
  startLoading,
  value,
}) => {
  return (
    <form
      className={styles.input__input_form_send_comment}
      onSubmit={onSubmitForm}
    >
      <input
        onChange={({ target }) => onChange(target.value)}
        placeholder={placeholder}
        type="text"
        value={value}
      />

      <div className={styles.input__content_svgs}>
        <div>
          <i
            className="fa-solid fa-camera"
            onClick={() => refFile.current.click()}
          ></i>

          {selectedImage && <p className={styles.create__count_imgs}>1</p>}
        </div>

        <input
          onChange={onChangeFile}
          ref={refFile}
          style={{ display: "none" }}
          type="file"
        />

        <span>{startLoading ? "Enviando comentario..." : ""}</span>

        <button
          className={styles.input__button_submit}
          disabled={startLoading}
          type="submit"
        >
          <i className="fa-regular fa-paper-plane"></i>
        </button>
      </div>
    </form>
  );
};

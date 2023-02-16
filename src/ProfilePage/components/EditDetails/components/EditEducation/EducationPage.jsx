import { useState } from "react";
import { LayoutModalEditDetails } from "../../layout/LayoutModalEditDetails";
import { College } from "./College";
import { School } from "./School";

import styles from "./education.module.css";

export const EditEducation = () => {
  const [openEducation, setOpenEducation] = useState("");

  return (
    <LayoutModalEditDetails
      titleReturn="Agrega tus estudios"
      titleInfo="Estudios"
    >
      <select
        className={styles.education__select}
        name="educationLevel"
        value={openEducation}
        onChange={(e) => setOpenEducation(e.target.value)}
      >
        <option value="">Elegir opción</option>
        <option value="college">Universidad</option>
        <option value="school">Colegio</option>
      </select>

      {openEducation === "college" ? <College /> : <School />}
    </LayoutModalEditDetails>
  );
};

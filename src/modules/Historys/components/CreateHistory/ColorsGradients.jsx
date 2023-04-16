import { colorsGradients } from "../../helper/dataGradients";

import styles from "./createHistory.module.css";

export const ColorsGradients = ({
  selectColor,
  setOpenColors,
  setSelectColor,
}) => {
  return (
    <div
      className={styles.create_history__content_list_colors}
      onClick={() => setOpenColors(false)}
    >
      <div className={styles.create_history__box}>
        {colorsGradients.map((colorG) => (
          <div
            key={colorG.color}
            style={{ background: colorG.color }}
            className={styles.create_history__color_item}
            onClick={() => setSelectColor(colorG.color)}
          >
            {colorG.color === selectColor && (
              <div className={styles.create_history__select_color}></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

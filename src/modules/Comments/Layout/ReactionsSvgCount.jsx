import { angry, haha, love } from "../../../assets";

import styles from "./layoutComment.module.css";

export const ReactionsSvgCount = ({ showIcon = false }) => {
  return (
    <div className={styles.comments__reactions_svgs}>
      <span>
        <img src={angry} alt="a" />
        <img src={haha} alt="a" />
        <img src={love} alt="a" />
      </span>
      <p>37,000</p>

      {showIcon && <i className="fa-solid fa-chevron-right"></i>}
    </div>
  );
};

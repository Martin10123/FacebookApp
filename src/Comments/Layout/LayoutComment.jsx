import { ReactionsSvgCount } from "./ReactionsSvgCount";

import styles from "./layoutComment.module.css";

export const LayoutComment = ({
  children,
  showButtonReaction = false,
  showIconReactionsCount = false,
  titleModal = "",
}) => {
  return (
    <div className={styles.comments__container}>
      <div className={styles.comments__back_close}></div>
      <div className={styles.comments__content}>
        <div className={styles.comments__title_btn_close}>
          <span>x</span>
          <p>{titleModal}</p>
          <button className={styles.comments__btn_close_modal}>X</button>
        </div>

        <div className={styles.comments__count_reactions}>
          <ReactionsSvgCount showIcon={showIconReactionsCount} />

          {showButtonReaction && <i className="fa-regular fa-thumbs-up"></i>}
        </div>

        <div className={styles.comments__list}>{children}</div>
      </div>
    </div>
  );
};

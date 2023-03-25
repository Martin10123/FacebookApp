import { CardComment } from "../CardComment/CardComment";
import { EditComment } from "../EditComment/EditComment";
import { LayoutComment } from "../Layout/LayoutComment";

export const BoxComments = () => {
  return (
    <LayoutComment
      showButtonReaction={true}
      showIconReactionsCount={true}
      titleModal="Publicación de Martin"
    >
      <CardComment />
      <CardComment />
      <CardComment />
      <CardComment />

      <EditComment />
    </LayoutComment>
  );
};

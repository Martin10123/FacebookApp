import { useState } from "react";
import { logicVotes } from "../helpers";
import { useNavigate } from "react-router-dom";

export const useCardProduct = ({ product, infoUserActive, users }) => {
  const navigate = useNavigate();
  const {
    category,
    idDoc,
    name,
    photoProduct,
    price,
    stateProduct,
    uid,
    username,
    votesGood,
  } = product;
  const [openSendMessage, setOpenSendMessage] = useState(false);
  const [openViewProductAlone, setOpenViewProductAlone] = useState(false);
  const user = users.find((user) => user.uid === uid);

  const typeLike = votesGood?.includes(infoUserActive?.uid)
    ? "votesBad"
    : "votesGood";

  const onLikeToProduct = async () => {
    try {
      await logicVotes(
        product,
        typeLike,
        infoUserActive?.uid,
        `storeApp/${idDoc}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  return {
    // Atributos
    category,
    name,
    openSendMessage,
    openViewProductAlone,
    photoProduct,
    price,
    stateProduct,
    typeLike,
    uid,
    user,
    username,

    // Metodos
    navigate,
    onLikeToProduct,
    setOpenSendMessage,
    setOpenViewProductAlone,
  };
};

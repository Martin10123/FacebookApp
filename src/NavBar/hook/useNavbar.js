import { signOut } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import { AuthUserContext } from "../../context";
import { firebaseAuth, firebaseDB } from "../../firebase/firebaseConfig";
import { useCloseModal, useForm } from "../../hooks";

export const useNavbar = () => {
  const { infoUserActive, users } = useContext(AuthUserContext);
  const [openAutoComplete, setOpenAutoComplete] = useState(false);
  const [openWindownChat, setOpenWindownChat] = useState(false);
  const [openWindownNotifi, setOpenWindownNotifi] = useState(false);
  const [openMenuDesk, setOpenMenuDesk] = useState(false);
  const { searchFriend, onInputChange, onResetForm } = useForm({
    searchFriend: "",
  });

  const stylesIcons = {
    openWindownChat: openWindownChat
      ? { background: "#0099ff3d", color: "#0099ff" }
      : {},
    openWindownNotifi: openWindownNotifi
      ? { background: "#0099ff3d", color: "#0099ff" }
      : {},
  };

  const refAutoCom = useCloseModal(() => setOpenAutoComplete(false));
  const refChat = useCloseModal(() => setOpenWindownChat(false));
  const refNotifi = useCloseModal(() => setOpenWindownNotifi(false));
  const refMenu = useCloseModal(() => setOpenMenuDesk(false));

  const onStartLogout = async () => {
    try {
      await signOut(firebaseAuth);

      await updateDoc(doc(firebaseDB, "users", infoUserActive?.uid), {
        isActive: false,
        activeAgo: new Date().getTime(),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    infoUserActive,
    onInputChange,
    onResetForm,
    onStartLogout,
    openAutoComplete,
    openMenuDesk,
    openWindownChat,
    openWindownNotifi,
    refAutoCom,
    refChat,
    refMenu,
    refNotifi,
    searchFriend,
    setOpenAutoComplete,
    setOpenMenuDesk,
    setOpenWindownChat,
    setOpenWindownNotifi,
    stylesIcons,
    users,
  };
};

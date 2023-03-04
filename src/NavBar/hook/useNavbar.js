import { signOut } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import { AuthUserContext } from "../../context";
import { firebaseAuth, firebaseDB } from "../../firebase/firebaseConfig";
import { useCloseModal } from "../../hooks";

export const useNavbar = () => {
  const { infoUserActive } = useContext(AuthUserContext);
  const [openAutoComplete, setOpenAutoComplete] = useState(false);
  const [openWindownChat, setOpenWindownChat] = useState(false);
  const [openWindownNotifi, setOpenWindownNotifi] = useState(false);
  const [openMenuDesk, setOpenMenuDesk] = useState(false);

  const stylesIcons = {
    openWindownChat: openWindownChat
      ? { background: "#0099ff3d", color: "#0099ff" }
      : {},
    openWindownNotifi: openWindownNotifi
      ? { background: "#0099ff3d", color: "#0099ff" }
      : {},
  };

  const refAutoComplete = useCloseModal(() => setOpenAutoComplete(false));
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
    onStartLogout,
    openAutoComplete,
    openMenuDesk,
    openWindownChat,
    openWindownNotifi,
    refAutoComplete,
    refChat,
    refMenu,
    refNotifi,
    setOpenAutoComplete,
    setOpenMenuDesk,
    setOpenWindownChat,
    setOpenWindownNotifi,
    stylesIcons,
  };
};

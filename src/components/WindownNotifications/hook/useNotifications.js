import { useContext, useState } from "react";
import { AuthUserContext } from "../../../context";
import { GetNotificationContext } from "../context/GetNotifications";

export const useNotifications = () => {
  const { infoUserActive, users } = useContext(AuthUserContext);
  const { getNotifications } = useContext(GetNotificationContext);

  const [filterBy, setFilterBy] = useState("todos");

  const updatedNotifications = getNotifications.find(
    (notifi) => notifi.idDoc === infoUserActive.uid
  );

  return {
    filterBy,
    setFilterBy,
    updatedNotifications,
    users,
  };
};

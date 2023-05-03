import { useContext } from "react";
import { AuthUserContext } from "../../../../../context";
import { InfoGroup } from "./InfoGroup";
import { InfoUser } from "./InfoUser";

export const InfoChat = ({
  isGroup,
  setopenInfoGroup,
  setOpenInfoUserToMessage,
  userMessage,
}) => {
  const { infoUserActive, users } = useContext(AuthUserContext);

  return (
    <>
      {isGroup ? (
        <InfoGroup
          infoUserActive={infoUserActive}
          isGroup={isGroup}
          setopenInfoGroup={setopenInfoGroup}
          setOpenInfoUserToMessage={setOpenInfoUserToMessage}
          userMessage={userMessage}
          users={users}
        />
      ) : (
        <InfoUser
          infoUserActive={infoUserActive}
          isGroup={isGroup}
          setopenInfoGroup={setopenInfoGroup}
          setOpenInfoUserToMessage={setOpenInfoUserToMessage}
          userMessage={userMessage}
        />
      )}
    </>
  );
};

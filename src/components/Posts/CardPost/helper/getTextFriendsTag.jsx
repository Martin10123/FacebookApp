export const getTextNameUserAndFriendsTag = ({
  infoUserActive,
  listTagFriends,
}) => {
  if (listTagFriends.length === 0) return <p>{infoUserActive?.displayName}</p>;

  let names = "";

  const nameUsersTag = listTagFriends.map((friend) =>
    friend.displayName.trim()
  );

  if (nameUsersTag.length === 1) {
    names = `${nameUsersTag[0]}.`;
  } else if (nameUsersTag.length === 2) {
    names += `${nameUsersTag[0]} y ${nameUsersTag[1]}.`;
  } else {
    names += `${nameUsersTag[0]}, ${nameUsersTag[1]} y ${
      nameUsersTag.length - 2
    } personas más.`;
  }

  return (
    <p>
      {infoUserActive?.displayName}{" "}
      <span style={{ fontWeight: 400 }}>esta con</span> {names}
    </p>
  );
};

export const searchFriendByName = (name, users) => {
  name = name.toLocaleLowerCase().trim();

  if (name.length === 0) return users;

  return users.filter(({ displayName }) =>
    displayName.toLocaleLowerCase().includes(name)
  );
};

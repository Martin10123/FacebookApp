export const getSearchUsers = (users, name) => {
  if (name === "") return users;

  name = name.toLocaleLowerCase();

  return users.filter((user) =>
    user.displayName.toLocaleLowerCase().includes(name)
  );
};

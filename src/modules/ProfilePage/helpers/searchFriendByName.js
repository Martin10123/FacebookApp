export const searchFriendByName = (name, users) => {
  name = name.toLocaleLowerCase().trim();

  if (name.length === 0) return users;

  return users.filter(
    (user) =>
      user.displayName.toLocaleLowerCase().includes(name) ||
      user.lastName.toLocaleLowerCase().includes(name) ||
      user.phoneNumber.toLocaleLowerCase().includes(name) ||
      user.username.toLocaleLowerCase().includes(name)
  );
};

export const searchFriendByNameChats = (name, users) => {
  name = name.toLocaleLowerCase().trim();

  if (name.length === 0) return users;

  return users.filter(
    (user) =>
      user[1].infoUser?.displayNameUser?.toLocaleLowerCase().includes(name) ||
      user[1].infoUser?.lastNameUser?.toLocaleLowerCase().includes(name) ||
      user[1].infoUser?.nameGroup?.toLocaleLowerCase().includes(name) ||
      user[1].infoUser?.nameCreateGroup?.toLocaleLowerCase().includes(name)
  );
};

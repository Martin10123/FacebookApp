export const generateUsernameUnic = (name) => {
  return `${name.substring(0, name.indexOf(" "))}${
    name.split(" ")[1]
  }${Math.round(Math.random() * 10000)}${Math.round(Math.random() * 15000)}`;
};

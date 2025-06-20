const month = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

const days = [
  "domingo",
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado",
];

export const getTimeAgo = (timestamp) => {
  const now = new Date();
  const secondsPast = (now.getTime() - timestamp) / 1000;
  if (secondsPast < 60) {
    return parseInt(secondsPast) + "s";
  }
  if (secondsPast < 3600) {
    return parseInt(secondsPast / 60) + "m";
  }
  if (secondsPast < 86400) {
    return parseInt(secondsPast / 3600) + "h";
  }
  if (secondsPast < 604800) {
    return parseInt(secondsPast / 86400) + "d";
  }
  return new Date(timestamp).toLocaleDateString();
};

export const createAccountDate = (date) => {
  return `${days[new Date().getDay(date)]} ${new Date().getDate(date)} de ${
    month[new Date().getMonth(date)]
  } ${new Date().getFullYear(date)}`;
};

export const getDateMessage = (timestamp) => {
  const date = new Date(timestamp);

  const d = date.getDay();
  const h = date.getHours();
  const m = date.getMinutes();

  return `${days[d]} - ${h}:${m}`;
};

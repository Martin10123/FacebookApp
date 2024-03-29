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

const timeUnits = [
  { unit: "día", seconds: 86400 },
  { unit: "hora", seconds: 3600 },
  { unit: "minute", seconds: 60 },
  { unit: "segundo", seconds: 1 },
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

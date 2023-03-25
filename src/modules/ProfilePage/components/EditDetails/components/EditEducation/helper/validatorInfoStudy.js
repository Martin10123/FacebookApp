export const validatorEducation = {
  collegeName: [
    (value) => value <= 10,
    "Ingrese el nombre completo de la universidad",
  ],
  schoolName: [
    (value) => value <= 10,
    "Ingrese el nombre completo del colegio",
  ],
  whatStudy: [
    (value) => value <= 5,
    "Ingrese el nombre completo de la carrera que estudias",
  ],
  yearStart: [(value) => value === "", "Ingrese un año valido"],
};

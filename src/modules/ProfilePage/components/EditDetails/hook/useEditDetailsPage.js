import { useState } from "react";

export const useEditDetailsPage = ({ userMatchUsername }) => {
  const [openCountry, setOpenCountry] = useState(false);
  const [openEducation, setOpenEducation] = useState(false);
  const [openRelationship, setOpenRelationship] = useState(false);
  const [openWork, setOpenWork] = useState(false);

  if (!userMatchUsername) {
    return null;
  }

  const { infoPersonal } = userMatchUsername;

  const showDetailsEducation = () => {
    if (infoPersonal && infoPersonal.college) {
      const { collegeName, whatStudy, yearStart, yearEnd, graduate } =
        infoPersonal.college;

      return `${collegeName} - ${whatStudy} (${yearStart} - ${
        yearEnd || "presente"
      }) - (${graduate ? "Graduado" : "Estudiando"})`;
    } else if (infoPersonal && infoPersonal.school) {
      const { schoolName, yearStart, yearEnd } = infoPersonal.school;

      return `${schoolName} (${yearStart} - ${yearEnd || "presente"}) - (${
        yearEnd ? "Graduado" : "Estudiando"
      })`;
    } else {
      return "Ingrese los datos sobre sus estudios...";
    }
  };

  const showDetailsRelation = () => {
    if (infoPersonal && infoPersonal.relationship) {
      const { selectRelationship, whoYourPartner } = infoPersonal.relationship;
      return `${selectRelationship}${
        whoYourPartner ? ` - (${whoYourPartner})` : ""
      }`;
    } else {
      return "Ingrese su estado civil...";
    }
  };

  return {
    country: infoPersonal?.country,
    createAccount: userMatchUsername?.createAccount,
    job: infoPersonal?.job,
    openCountry,
    openEducation,
    openRelationship,
    openWork,
    setOpenCountry,
    setOpenEducation,
    setOpenRelationship,
    setOpenWork,
    showDetailsEducation,
    showDetailsRelation,
  };
};

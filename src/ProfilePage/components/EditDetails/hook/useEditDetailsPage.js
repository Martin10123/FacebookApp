import { useContext, useState } from "react";
import { AuthUserContext } from "../../../../context";

export const useEditDetailsPage = () => {
  const { infoUserActive } = useContext(AuthUserContext);

  const [openCountry, setOpenCountry] = useState(false);
  const [openEducation, setOpenEducation] = useState(false);
  const [openRelationship, setOpenRelationship] = useState(false);
  const [openWork, setOpenWork] = useState(false);

  if (!infoUserActive) {
    return null;
  }

  const {
    infoPersonal: { job, college, school, country, relationship },
  } = infoUserActive;

  const showDetailsEducation = () => {
    if (college) {
      return `${college.collegeName} - 
                ${college.whatStudy} (${college.yearStart} - ${
        college.yearEnd || "presente"
      }) - (${college.graduate ? "Graduado" : "Estudiando"})`;
    } else if (school) {
      return `${school.schoolName} (${school.yearStart} - ${
        school.yearEnd || "presente"
      }) - (${school.yearEnd ? "Graduado" : "Estudiando"})`;
    } else {
      return "Ingrese los datos sobre sus estudios...";
    }
  };

  const showDetailsRelation = () => {
    if (relationship) {
      if (relationship?.selectRelationship) {
        return `${relationship.selectRelationship}  ${
          relationship.whoYourPartner
            ? ` - (${relationship.whoYourPartner})`
            : ""
        }`;
      }
    } else {
      return "Ingrese su estado civil...";
    }
  };

  return {
    country,
    infoUserActive,
    job,
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

import { useEffect, useState } from "react";

export const useKnowIfDeskOMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 900px)"); // Consulta para dispositivos móviles

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Verificar el estado inicial de la consulta
    setIsMobile(mediaQuery.matches);

    // Agregar un listener para detectar cambios en la consulta de medios
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Limpiar el listener cuando el componente se desmonte
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return isMobile;
};

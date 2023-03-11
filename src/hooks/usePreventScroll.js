import { useEffect } from "react";

export const usePreventScroll = () => {
  useEffect(() => {
    // Al montar el componente, deshabilitar el scroll del cuerpo de la página
    document.body.style.overflow = "hidden";

    // Al desmontar el componente, volver a habilitar el scroll del cuerpo de la página
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []); // Solo se ejecuta en el montaje y desmontaje del componente
};

import { createContext, useState } from "react";

export const ContextListImagesContext = createContext();

export const ContextListImagesProvider = ({ children }) => {
  const [selectImage, setSelectImage] = useState([]);
  const [openHistoryFile, setOpenHistoryFile] = useState(false);

  const onFileInputchange = ({ target }) => {
    if (target.files.length === 0) return;

    const newFiles = Array.from(target.files);
    const selectedImages = [...selectImage];

    // Verificar que no se haya seleccionado previamente cada nueva imagen
    const uniqueNewFiles = newFiles.filter((file) => {
      return !selectedImages.some(
        (selectedFile) => selectedFile.name === file.name
      );
    });

    setSelectImage([...selectedImages, ...uniqueNewFiles]);
    setOpenHistoryFile(true);
  };

  const provReturn = {
    onFileInputchange,
    openHistoryFile,
    selectImage,
    setOpenHistoryFile,
    setSelectImage,
  };

  return (
    <ContextListImagesContext.Provider value={provReturn}>
      {children}
    </ContextListImagesContext.Provider>
  );
};

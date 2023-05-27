export const MessageError = ({ textError, errorActive }) => {
  return (
    errorActive && (
      <div
        style={{
          alignItems: "center",
          color: "#ff0000",
          display: "flex",
          fontSize: "0.9rem",
          gap: "1rem",
          width: "100%",
        }}
      >
        <i className="fa-solid fa-circle-exclamation"></i>
        <p> {textError} </p>
      </div>
    )
  );
};

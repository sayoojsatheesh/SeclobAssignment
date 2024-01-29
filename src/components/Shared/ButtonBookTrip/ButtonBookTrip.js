const ButtonBookTrip = ({text}) => {
  const buttonStyle = {
    backgroundColor: "rgba(0, 128, 128, 255)",
    padding: "9px 24px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    color: "white",
    fontWeight: 700,
  };

  return <button style={buttonStyle}>{text}</button>;
};

export default ButtonBookTrip;

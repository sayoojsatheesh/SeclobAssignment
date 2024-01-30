const ButtonBookTrip = ({ text, bgColor, Border, color }) => {
  const buttonStyle = {
    backgroundColor: bgColor,
    padding: "9px 24px",
    borderRadius: "8px",
    border: `${Border ? Border : "none"}`,
    cursor: "pointer",
    color: `${color ? color : "white"}`,
    fontWeight: 700,
  };

  return <button style={buttonStyle}>{text}</button>;
};

export default ButtonBookTrip;

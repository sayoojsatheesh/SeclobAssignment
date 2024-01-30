// Images //
import Aloha from "../../Assets/Aloha.png";
// MUI //
// MUI //
import { useMediaQuery } from "@mui/material";

const Footer = () => {
  const isBigScreen = useMediaQuery("(min-width: 1136px)");
  return (
    <div style={{ backgroundColor: "rgba(0,25,25,255)" }}>
      <div
        style={{
          padding: "10px 20px",
          width: `${isBigScreen ? "1136px" : ""}`,

          margin:'0 auto'
        }}
      >
        <img alt="Logo" src={Aloha} />
      </div>
    </div>
  );
};

export default Footer;

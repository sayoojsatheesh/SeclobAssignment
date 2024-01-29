// MUI //
import { useMediaQuery } from "@mui/material";

// Images //
import HawaiiBeach from "../../Assets/HawaiiBeach.jpg";
import HawaiiBeachMobile from "../../Assets/Head.png";

const IntroSection = () => {
  const isSmallScreen= useMediaQuery("(max-width: 770px)");
  return (
    <div style={{ height: `${isSmallScreen?'480px':'580px'}` }}>
      <img
        style={{ height: "100%", width: "100%", objectFit: "cover" }}
        alt="HawaiiBeach"
        src={isSmallScreen? HawaiiBeachMobile : HawaiiBeach}
      />
    </div>
  );
};

export default IntroSection;

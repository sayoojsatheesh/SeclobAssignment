// Custom //
import TravelGuidCard from "./TravelGuidCard/TravelGuidCard";
// MUI //
import { useMediaQuery } from "@mui/material";

const TravelGuid = () => {
  const isBigScreen = useMediaQuery("(min-width: 870px)");
  return (
    <div style={{ width: `${isBigScreen ? "50%" : ""}` }}>
      <h3 style={{ paddingLeft: "0" }}>Travel Guid</h3>
      <div>
        <TravelGuidCard />
      </div>
    </div>
  );
};

export default TravelGuid;

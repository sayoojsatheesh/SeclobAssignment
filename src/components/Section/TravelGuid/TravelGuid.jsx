// Custom //
import TravelGuidCard from "./TravelGuidCard/TravelGuidCard";
// MUI //
import { useMediaQuery } from "@mui/material";
// Images //
import TravelGuidImage from "../../../Assets/TravelGuid.jpg";

const TravelGuid = () => {
  const isBigScreen = useMediaQuery("(min-width: 870px)");
  return (
    <div style={{ width: `${isBigScreen ? "50%" : ""}` }}>
      <h3 style={{ paddingLeft: "0" }}>Travel Guid</h3>
      <div>
        <TravelGuidCard Image={TravelGuidImage} GuidName={"Hadwin Malone"} Info={"Guide since 2012"} />
      </div>
    </div>
  );
};

export default TravelGuid;

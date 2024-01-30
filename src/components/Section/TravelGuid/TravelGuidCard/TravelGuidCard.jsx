// CSS //
import classes from "./TravelGuidCard.module.css";
// Custom //
import ButtonBookTrip from "../../../Shared/ButtonBookTrip/ButtonBookTrip";
// MUI //
import Avatar from "@mui/material/Avatar";
// MUI //
import { useMediaQuery } from "@mui/material";
// Images //
import TravelGuidImage from "../../../../Assets/TravelGuid.jpg";

const TravelGuidCard = () => {
  const extra = {
    position: "absolute",
    top: "12px",
    bottom: "0",
    right: "0",
    height: "90px",
    width: "90px",
  };
  const isBigScreen = useMediaQuery("(max-width: 1136px)");
  return (
    <div className={classes.TravelGuidContainer}>
      <div className={classes.TravelGuidLeft}>
        <div>
          <h3 style={{ paddingLeft: 0, marginBottom: "0" }}>Hadwin Malone</h3>
          <h4 style={{ color: "grey", marginTop: "1px", fontSize: "13px" }}>
            Guide since 2012
          </h4>
        </div>

        <Avatar
          style={extra}
          sx={{ width: 74, height: 74 }}
          alt="Travel Guid"
          src={TravelGuidImage}
        />
      </div>
      <div>
        <ButtonBookTrip
          Border={"1px solid rgba(0, 128, 128, 255)"}
          color={"rgba(0, 128, 128, 255)"}
          bgColor={"white"}
          text={"Contact"}
        />
      </div>
    </div>
  );
};

export default TravelGuidCard;

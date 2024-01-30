// CSS //
import classes from "./TravelGuidCard.module.css";
// Custom //
import ButtonBookTrip from "../../../Shared/ButtonBookTrip/ButtonBookTrip";
// MUI //
import Avatar from "@mui/material/Avatar";
// Images //
import TravelGuidImage from "../../../../Assets/TravelGuid.jpg";

const TravelGuidCard = () => {
  return (
    <div className={classes.TravelGuidContainer}>
      <div className={classes.TravelGuidLeft}>
        <div>
          <h3 style={{ paddingLeft: 0 }}>Hadwin Malone</h3>
          <h4 style={{ color: "grey" }}>Guide since 2012</h4>
        </div>

        <Avatar
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

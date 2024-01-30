// CSS //
import classes from "./TravelGuidCard.module.css";
// Custom //
import ButtonBookTrip from "../../../Shared/ButtonBookTrip/ButtonBookTrip";
// MUI //
import Avatar from "@mui/material/Avatar";
// MUI //
import { useMediaQuery } from "@mui/material";

const TravelGuidCard = ({GuidName,Info,Image}) => {
  const isSmallScreen = useMediaQuery("(max-width: 450px)");
  let widthHeight = isSmallScreen ? "74px" : "100px";
  const extra = {
    position: "absolute",
    top: "12px",
    bottom: "0",
    right: "0",
    height: widthHeight,
    width: widthHeight,
  };

  return (
    <div className={classes.TravelGuidContainer}>
      <div className={classes.TravelGuidLeft}>
        <div>
          <h3 style={{ paddingLeft: 0, marginBottom: "0" }}>{GuidName}</h3>
          <h4 style={{ marginTop: "1px", fontSize: "13px", fontWeight: "500" }}>
            {Info}
          </h4>
        </div>
        <Avatar style={extra} alt="Travel Guid" src={Image} />
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

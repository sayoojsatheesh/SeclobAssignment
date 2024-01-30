// CSS //
import classes from "./HighlightsCard.module.css";
// MUI //
import { styled } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Define styles using the `styled` function
const StyledAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: "#e6f2f2",
  color: "#028182",
  height: "50px",
  width: "50px",
}));

const HighlightsCard = ({ ImagePath, Heading, SubHeading }) => {
  return (
    <div className={classes.HighlightsCardContainer}>
      <div style={{ height: "170px" }}>
        <img alt="Highlights" src={ImagePath} />
      </div>
      <h3>{Heading}</h3>
      <p>{SubHeading}</p>
      <div className={classes.ArrowBtnContainer}>
        <StyledAvatar>
          <ArrowForwardIcon />
        </StyledAvatar>
      </div>
    </div>
  );
};

export default HighlightsCard;

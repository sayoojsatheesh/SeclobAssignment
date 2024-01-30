// CSS //
import classes from "./Highlights.module.css";
// Custom //
import MobileCarousel from "./MobileCarousel/MobileCarousel";
import HighlightsCard from "./HighlightsCard/HighlightsCard";
// Data //
import { Data } from "../../Data/HighlightsData";
// MUI //
import { useMediaQuery } from "@mui/material";

const Highlights = () => {
  const isSmallScreen = useMediaQuery("(max-width: 808px)");
  return (
    <div className={classes.HighlightsContainer}>
      {isSmallScreen ? (
        <div>
          <h3>Highlights</h3>
          <MobileCarousel Data={Data} />
        </div>
      ) : (
        <div className={classes.HiglightsContentContainer}>
          <h3 className={classes.Heading}>Highlights</h3>
          <div className={classes.HighlightsContent}>
            {Data.map((item) => (
              <div key={item.key} className={classes.cardContainer}>
                <HighlightsCard
                  ImagePath={item.ImagePath}
                  Heading={item.Heading}
                  SubHeading={item.SubHeading}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Highlights;

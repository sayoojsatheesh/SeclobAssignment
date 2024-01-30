// Custom //
import Categories from "./Categories/Categories";
import TravelGuid from "./TravelGuid/TravelGuid";
// CSS //
import classes from "./Section.module.css";

const Section = () => {
  return (
    <div style={{backgroundColor:'#e6f2f2'}} >
      <div className={classes.SectionContainer}>
        <Categories />
        <TravelGuid/>
      </div>
    </div>
  );
};

export default Section;

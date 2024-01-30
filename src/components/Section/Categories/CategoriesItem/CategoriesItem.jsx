// MUI //
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// CSS //
import classes from './Categories.module.css'

const CategoriesItem = ({text}) => {
  return (
    <div
    className={classes.CategoriesItemContainer}
   
    >
      <h4>{text}</h4>
      <ArrowForwardIcon className={classes.arrow} sx={{color:'#028182'}} />
    </div>
  );
};

export default CategoriesItem;

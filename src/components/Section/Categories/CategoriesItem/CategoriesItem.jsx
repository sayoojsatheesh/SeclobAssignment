// MUI //
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const CategoriesItem = ({text}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor:'white',
        borderRadius:'8px',
        padding:'12px 12px',
        marginBottom:'7px'
      }}
    >
      <h4>{text}</h4>
      <ArrowForwardIcon sx={{color:'#028182'}} />
    </div>
  );
};

export default CategoriesItem;

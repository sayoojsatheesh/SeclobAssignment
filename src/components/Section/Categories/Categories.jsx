// Custom //
import CategoriesItem from "./CategoriesItem/CategoriesItem";
// Data //
import { SectionData } from "../../../Data/HighlightsData";
// MUI //
import { useMediaQuery } from "@mui/material";

const Categories = () => {
  const isBigScreen = useMediaQuery("(min-width: 870px)");
  return (
    <div style={{ width: `${isBigScreen ? "50%" : ""}` }}>
      <h3 style={{ paddingLeft: "0" }}>Categories</h3>
      <div>
        {SectionData.map((ietm) => (
          <CategoriesItem key={ietm.id} text={ietm.text} />
        ))}
      </div>
    </div>
  );
};

export default Categories;

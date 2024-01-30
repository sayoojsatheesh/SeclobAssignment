// Libaries //
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// Custom //
import HighlightsCard from "../HighlightsCard/HighlightsCard";

const MobileCarousel = ({ Data }) => {
  return (
    <Carousel showIndicators={false} infiniteLoop={true} showThumbs={false} showStatus={false}>
      {Data.map((item) => (
        <div key={item.key} style={{ padding: ".5rem" }}>
          <HighlightsCard
            ImagePath={item.ImagePath}
            Heading={item.Heading}
            SubHeading={item.SubHeading}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default MobileCarousel;

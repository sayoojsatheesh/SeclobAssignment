// Custom //
import MobileNavbar from "../components/MobileNavBar/MobileNavbar";
import IntroSection from "../components/IntroSection/IntroSection";
import Navbar from "../components/Navbar/Navbar";
import Highlights from "../components/Highlights/Highlights";
// MUI //
import { useMediaQuery } from "@mui/material";

const Home = () => {
  const isSmallScreen = useMediaQuery("(max-width: 770px)");
  return (
    <>
      {isSmallScreen ? <MobileNavbar /> : <Navbar />}
      <IntroSection />
      <Highlights/>
    </>
  );
};

export default Home;

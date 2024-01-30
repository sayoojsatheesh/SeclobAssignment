// Custom //
import MobileNavbar from "../components/MobileNavBar/MobileNavbar";
import IntroSection from "../components/IntroSection/IntroSection";
import Navbar from "../components/Navbar/Navbar";
import Highlights from "../components/Highlights/Highlights";
import Section from "../components/Section/Section";
import Footer from "../components/Footer/Footer";
// MUI //
import { useMediaQuery } from "@mui/material";

const Home = () => {
  const isSmallScreen = useMediaQuery("(max-width: 770px)");
  return (
    <>
      {isSmallScreen ? <MobileNavbar /> : <Navbar />}
      <IntroSection />
      <Highlights />
      <Section />
      <Footer />
    </>
  );
};

export default Home;

// React //
import { useState } from "react";
// MUI //
import MenuIcon from "@mui/icons-material/Menu";
// CSS //
import classes from "./MobileNavbar.module.css";
// Images //
import Logo from "../../Assets/Logo.png";
// Custom //
import SideBar from "./SideBar/SideBar";

const MobileNavbar = () => {
  // Used to open and close the Sidebar //
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classes.MobleNavContainer}>
      <img alt="Logo" src={Logo} />
      <MenuIcon
        onClick={() => {
          setIsOpen(true);
        }}
        fontSize="large"
      />
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default MobileNavbar;

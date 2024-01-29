// CSS //
import classes from "./Navbar.module.css";
// Images //
import Logo from "../../Assets/Logo.png";
// Custom //
import NavLinks from "./NavLinks/NavLinks";
import ButtonBookTrip from "../Shared/ButtonBookTrip/ButtonBookTrip";

const Navbar = () => {
  return (
    <div className={classes.NavbarContainer}>
      <div className={classes.leftSide}>
        <img alt="Logo" src={Logo} />
        <div style={{ marginLeft: "40px" }}>
          <NavLinks />
        </div>
      </div>
      <div>
        <ButtonBookTrip text={"Book a trip"} />
      </div>
    </div>
  );
};

export default Navbar;

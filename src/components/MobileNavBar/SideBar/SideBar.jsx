// MUI //
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
// CSS //
import classes from "./SideBar.module.css";
// Custom //
import ButtonBookTrip from "../../Shared/ButtonBookTrip/ButtonBookTrip";
import NavLinks from "../../Navbar/NavLinks/NavLinks";

const SideBar = ({ isOpen, setIsOpen }) => {

  // Function is used to close the Side Drawer //
  function onClose() {
    setIsOpen(false);
  }
  
  return (
    <Drawer
      transitionDuration={{ enter: 800, exit: 800 }}
      sx={{
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "95%",
        },
      }}
      anchor={"right"}
      open={isOpen}
      onClose={onClose}
    >
      <div className={classes.DrawerContent}>
        <CloseIcon
          onClick={onClose}
          className={classes.closeBtn}
          fontSize="large"
        />
        <div className={classes.DrawerLinkContainer}>
          <NavLinks flexDirection={true}/>
          <ButtonBookTrip bgColor={"rgba(0, 128, 128, 255)"} text={"Book a trip"} />
        </div>
      </div>
    </Drawer>
  );
};

export default SideBar;

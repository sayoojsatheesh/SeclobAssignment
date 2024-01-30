// CSS //
import classes from '../Navbar.module.css'

const NavLinks = ({ flexDirection }) => {
  return (
    <div>
      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          gap: "40px",
          fontFamily: "Trebuchet MS, sans-serif",
          flexDirection: `${flexDirection ? "column" : ""}`,
          alignItems: "flex-start",
          padding: "0",
          cursor: "pointer",
        }}
      >
        <li className={classes.Link}>Home</li>
        <li className={classes.Link}>Surfing</li>
        <li className={classes.Link}>Hula</li>
        <li className={classes.Link}>Vulcano</li>
      </ul>
    </div>
  );
};

export default NavLinks;

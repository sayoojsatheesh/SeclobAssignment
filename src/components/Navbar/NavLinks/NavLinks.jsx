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
          padding:'0',
          cursor:'pointer'
        }}
      >
        <li>Home</li>
        <li>Surfing</li>
        <li>Hula</li>
        <li>Vulcano</li>
      </ul>
    </div>
  );
};

export default NavLinks;

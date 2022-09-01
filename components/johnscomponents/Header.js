import Link from "next/link";
import NavBar from "./NavBar";
const Header = () => {
  return (
    <header
      className="MuiPaper-root MuiAppBar-root MuiAppBar-positionFixed
      MuiAppBar-colorPrimary jss26 jss18 mui-fixed MuiPaper-elevation4"
    >
      <NavBar />
    </header>
  );
};

export default Header;

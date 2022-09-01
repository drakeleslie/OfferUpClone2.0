import Link from "next/link";
import NavBar from "./NavBar";
import Head from "next/head";
const Header = () => {
  return (
    <Head
      className="MuiPaper-root MuiAppBar-root MuiAppBar-positionFixed
      MuiAppBar-colorPrimary jss26 jss18 mui-fixed MuiPaper-elevation4"
    >
      <NavBar />
    </Head>
  );
};

export default Header;

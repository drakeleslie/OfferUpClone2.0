import Link from "next/link";
import NavBar from "./NavBar";
import Head from "next/head";

const Header = ({currentUser}) => {
  return (
    <div className="flex flex-row">
      <Link href="/">
        <img className="pl-6 mt-1 h-[75px] w-[75]" src="offeruplogo.png"></img>
      </Link>
      <NavBar currentUser={currentUser}/>
    </div>
  );
};

export default Header;

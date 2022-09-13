import Link from "next/link";
import NavBar from "./NavBar";

const Header = ({ currentUser }) => {
  return (
    <div className="justify-center flex flex-col">
      <div className="justify-center flex flex-row w-screen border-b border-gray-200">
        <Link href="/">
          <img
            className="pl-6 mt-1 h-[75px] w-[75] cursor-pointer "
            src="offeruplogo.png"
          ></img>
        </Link>
        <NavBar currentUser={currentUser} />
      </div>
    </div>
  );
};

export default Header;

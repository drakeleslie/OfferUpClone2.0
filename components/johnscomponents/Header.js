import Link from "next/link";
import NavBar from "./NavBar";
import Head from "next/head";
import styles from "../../styles/header.module.css";

const Header = ({currentUser}) => {
  console.log(currentUser, "FROM THE HEADER")
  return (
    <div>
      <img src="offeruplogo.png" width="75" height="75" />
      <NavBar />
    </div>
  );
};

export default Header;
// className={styles.title}

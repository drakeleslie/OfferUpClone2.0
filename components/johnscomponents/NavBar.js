import React from "react";
import Link from "next/link";
import styles from "../../styles/header.module.css";

const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <div>
        <Link className={styles.events} href="/events">
          Events
        </Link>
      </div>
      <Link href="/annual">Annual Report</Link>
      <Link href="/team">Teams</Link>
      <Link href="/blogs">Blogs</Link>
      <Link href="/sign-up">Sign Up</Link>
    </div>
  );
};

export default NavBar;

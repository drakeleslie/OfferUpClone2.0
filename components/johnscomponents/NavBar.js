import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div>
      <Link href="/about">About</Link>
      <Link href="/events">Events</Link>
      <Link href="/annual">Annual Report</Link>
      <Link href="/team">Teams</Link>
      <Link href="/blogs">Blogs</Link>
      <Link href="/sign-up">Sign Up</Link>
    </div>
  );
};

export default NavBar;

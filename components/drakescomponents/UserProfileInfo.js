import Link from "next/link";
import styles from "../../styles/Profile.module.css";
import React, { useState, useEffect } from "react";
//top portion of user page, provides user information (username, join date, pic etc..)
const UserProfileInfo = ({ user }) => {
  console.log(user, "test");

  return (
    <div>
      <hr
        className={`${styles.hr} ${styles.MuiDividerRoot}`}
        aria-hidden="true"
      ></hr>
    </div>
  );
};

export default UserProfileInfo;

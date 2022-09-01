import Link from "next/link";
import styles from "../../styles/Profile.module.css";
import React, { useState, useEffect } from "react";
//top portion of user page, provides user information (username, join date, pic etc..)
const UserProfileInfo = ({ user }) => {
  console.log(user, "test");

  return (
       <div className={styles.jss106}>
      {/* top portion of user page, provides user information (username, join date, pic etc..) */}
      <div className={`${styles.MuiGridContainer} ${styles.jss2}`}>
        {/* username, joindate, location, review,  */}
        <div
          className={`${styles.MuiGridItem} ${styles.MuiGridGridXl4} ${styles.MuiGridMd5}`}
        >
          {/* use */}
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
        {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
        {/* user confirmation (phone verified, email verified), average response time */}
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
      <hr
        className={`${styles.hr} ${styles.MuiDividerRoot}`}
        aria-hidden="true"
      ></hr>
    </div>
  );
};

export default UserProfileInfo;

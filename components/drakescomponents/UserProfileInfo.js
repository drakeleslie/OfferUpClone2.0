import Link from "next/link";
import styles from "../../styles/Profile.module.css";
//top portion of user page, provides user information (username, join date, pic etc..)
const UserProfileInfo = ({ user, itemsOnSale }) => {
  return (
    <div className={styles.jss106}>
      {/* top portion of user page, provides user information (username, join date, pic etc..) */}
      <div className={`${styles.MuiGrid - container} ${styles.jss2}`}>
        {/* username, joindate, location, review,  */}
        <div
          className={`${styles.MuiGrid - item} ${
            styles.MuiGrid - grid - xl - 4
          } ${styles.MuiGrid - md - 5}`}
        >
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
        {/* user confirmation (phone verified, email verified), average response time */}
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
      <hr
        className={`${styles.hr} ${styles.MuiDivider - root}`}
        aria-hidden="true"
      ></hr>
    </div>
  );
};

export default UserProfileInfo;

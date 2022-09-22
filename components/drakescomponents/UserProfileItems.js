import Link from "next/link";
import styles from "../../styles/Home.module.css";
import styles1 from "../../styles/Profile.module.css";
import UserProfileItemBox from "./UserProfileItemBox";

const UserProfileItems = ({ user, products }) => {
  if (products !== []) {
    return (
      <>
        <div className={styles1.userItems}>
          <p>Items from this seller</p>
        </div>
        <div className={styles.gridbox}>
          <UserProfileItemBox products={products} />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className={styles1.userItems}>
          <p>Items from this seller</p>
        </div>
        <div>
          <p>
            <b>User has no items for sell!</b>
          </p>
        </div>
      </>
    );
  }
};

export default UserProfileItems;

import Link from "next/link";
import styles from "../../styles/Home.module.css";
import styles1 from "../../styles/Profile.module.css";
import UserProfileItemBox from "./userProfileItemBox";
const UserProfileItems = ({ user, products }) => {
  console.log(products);
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
};

export default UserProfileItems;

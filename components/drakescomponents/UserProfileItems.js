import Link from "next/link";
import styles from "../../styles/Home.module.css";
import styles1 from "../../styles/Profile.module.css";
import Product from "../paulscomponents/Product";
const UserProfileItems = ({ user, products }) => {
  return (
    <>
      <div className={styles1.userItems}>
        <p>Items from this seller</p>
      </div>
      <div className={styles.gridbox}>
        <Product />
      </div>
    </>
  );
};

export default UserProfileItems;

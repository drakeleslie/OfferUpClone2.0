import Link from "next/link";
import styles from "../../styles/Home.module.css";
import styles1 from "../../styles/Profile.module.css";
const UserProfileItems = ({ user, products }) => {
  console.log(products);
  return (
    <>
      <div className={styles1.userItems}>
        <p>Items from this seller</p>
      </div>
      <div className={styles.gridbox}>
        {products.map((item) => (
          <a key={item.id + "a"} className={styles.atag}>
            <div key={item.id + "b"} className={styles.div1}>
              <span key={item.id + "c"} className={styles.span1}>
                <img
                  key={item.id + "d"}
                  className={styles.productimage}
                  src={`${item.image}`}
                  alt="product"
                />
              </span>
              <div key={item.id + "e"}>
                <p key={item.id + "f"}>{item.title}</p>
                <p key={item.id + "g"}>{item.price}</p>
                <p key={item.id + "h"}>{item.rating.rating}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default UserProfileItems;

import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

const UserProfileItemBox = ({ products }) => {
  return (
    <>
      {products.map((item) => (
        <div key={item.posted_item_id + "a"} className={styles.atag}>
          <div key={item.posted_item_id + "b"} className={styles.div1}>
            <span key={item.posted_item_id + "c"} className={styles.span1}>
              <img
                key={item.posted_item_id + "d"}
                className={styles.productimage}
                src={item.image}
                alt="product"
              />
            </span>
            <div key={item.posted_item_id + "e"}>
              <Link
                href={{
                  pathname: "useritemview",
                  query: { item: JSON.stringify(item) },
                }}
              >
                <a key={item.posted_item_id + "f"} className={styles.itemtitle}>
                  {item.title}
                </a>
              </Link>
              <p key={item.posted_item_id + "g"}>${item.price}</p>
              <p key={item.posted_item_id + "h"}></p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default UserProfileItemBox;

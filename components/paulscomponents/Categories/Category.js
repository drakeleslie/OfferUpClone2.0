import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import styles from "../../../styles/Home.module.css";
const Category = ({data}) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "/api/posted",
    }).then((res) => setProducts(res.data));
  }, []);
  function filterIt(arr, searchKey) {
    let result = [];
    arr.forEach((obj) => {
      if (obj.category.toLowerCase().includes(searchKey)) {
        result.push(obj)
      }
    });
    return result; 
  }
   if (filterIt(products, data).length == 0) {
    return (
        <>
        <div>NO SEARCH RESULTS</div>
        </>
    )
   } else {
  return (
    <>
      {filterIt(products, data).map((item) => (
           <Link key={item.id + "g"}
           href={{
             pathname: "viewitem",
             query: { item: JSON.stringify(item) },
           }}
         >
        <div key={item.id + "a"} className={styles.atag}>
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
           
                <a key={item.id + "f"} className={styles.itemtitle}>
                  {item.title}
                </a>

              <p key={item.id + "g"}>${item.price}</p>
              <p key={item.id + "h"}></p>
            </div>
          </div>
        </div>
        </Link>
      ))}
    </>
  );
        }
}
export default Category;

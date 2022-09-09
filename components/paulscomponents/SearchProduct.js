import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import styles from "../../styles/Home.module.css";


const SearchProduct = ({data}) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "/api/posted",
    }).then((res) => setProducts(res.data));
  }, []);
  const filterProducts = products.filter(item => item.title.toLowerCase() == data)
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  //EXPERIMENTAL SEARCH FUNCTION 
        //   const entries = [];
        //   const split = [];
        // //   const values = products.forEach(item => entries.push(Object.values(item)))
        //   for (let i = 0; i < products.length; i++) {
        //      const desc = Object.values(products[i])
        //      entries.push(desc[0], desc[1])
        //     //  entries.push(desc[1])
        //     //  entries.push(desc[3])
        //      entries.forEach(str => split.push(JSON.stringify(str).toLowerCase().split(' ')))
        //   }
        //   const finalresult = [];
        //   for (let i = 0; i < split.length; i++) {
        //     finalresult.push(split[i].filter(item => item == data), split[i - 1])
        //   }
        // //   let newresult = finalresult.filter(item => item.length > 0)
        //   console.log(finalresult)

        // //   const splitValues = [];
        // //   entries.forEach(arr => arr.forEach(value => console.log(value)))
        // //   splitValues.push(value.split(' '))
  //EXPERIMENTAL SEARCH FUNCTION 

   if (filterProducts.length == 0) {
    return (
        <>
        <div>NO SEARCH RESULTS</div>
        </>
    )
   } else {
  return (
    <>
      {filterProducts.map((item) => (
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

export default SearchProduct;

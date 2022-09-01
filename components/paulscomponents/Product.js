import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import styles from "../../styles/Home.module.css"


const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {

     axios({
        method: 'get',
        url: 'https://api.escuelajs.co/api/v1/products',
     }).then(res => setProducts(res.data))
  
  }, [])
//   if (!products) return <div></div> 
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
  return (
   <> 
      { products.map(item => (
        <div key={item.id + 'a'}className={styles.atag}>
        <div key={item.id + 'b'}className={styles.div1}>
          <span key={item.id + 'c'}className={styles.span1} >
            <img key={item.id + 'd'}className={styles.productimage} src={`${item.images[1]}`} alt="product"/>
          </span>
          <div key={item.id + 'e'}> 
                <Link href={{
                  pathname: "viewitem",
                  query: { item: JSON.stringify(item) }
              }}><a key={item.id + 'f'} className={styles.itemtitle}>{item.title}</a> 
              </Link>  
                <p key={item.id + 'g'}>${item.price}</p> 
                <p key={item.id + 'h'}></p> 
          </div>
        </div>  
        </div>
      ))}
    </>
  );
};

export default Product;

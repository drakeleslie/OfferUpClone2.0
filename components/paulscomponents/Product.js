import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from "../../styles/Home.module.css"

const Product = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
     axios({
        method: 'get',
        url: 'https://fakestoreapi.com/products',
     }).then(res => setProducts(res.data))
  
  }, [])
  console.log(products, 'products')
//   if (!products) return <div></div> 
  
  return (
   <> 
      { products.map(item => (
        <a key={item.id + 'a'}className={styles.atag}>
        <div key={item.id + 'b'}className={styles.div1}>
          <span key={item.id + 'c'}className={styles.span1} >
            <img key={item.id + 'd'}className={styles.productimage} src={`${item.image}`} alt="product"/>
          </span>
          <div key={item.id + 'e'}> 
                <p key={item.id + 'f'}>{item.title}</p>  
                <p key={item.id + 'g'}>{item.price}</p> 
                <p key={item.id + 'h'}>{item.rating.rating}</p> 
          </div>
        </div>
    </a>
   ))}
    </>
    )

}

export default Product
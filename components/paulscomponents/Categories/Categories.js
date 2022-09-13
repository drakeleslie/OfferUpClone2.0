import Link from 'next/link'
import React from 'react'
import styles from '../../../styles/Header.module.css'
const Categories = () => {
  return (
    <div className={styles.categories}>
        <div className={styles.category}><Link  href={{pathname: '/categories', query: { data: "clothes"}}}>Clothes</Link></div>
        <div className={styles.category}><Link  href={{pathname: '/categories', query: { data: "electronics"}}}>Electronics</Link></div>
        <div className={styles.category}><Link  href={{pathname: '/categories', query: { data: "furniture"}}}>Furniture </Link></div>
        <div className={styles.category}><Link  href={{pathname: '/categories', query: { data: "shoes"}}}>Shoes </Link></div>
        <div className={styles.category}><Link  href={{pathname: '/categories', query: { data: "others"}}}>Others</Link></div>
    </div>
  )
}
export default Categories
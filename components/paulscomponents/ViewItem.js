import { useRouter } from "next/router"
import styles from "../../styles/ViewItem.module.css"
import { useState }from "react"

const ViewItem = () => {
  
  const router = useRouter()
  const data = router.query;
  const json = JSON.parse(data.item)
  // setCurrentItem(json)
  console.log(json)
  const [currentImage, setCurrentImage] = useState(json.images[1])
  return (
    <div>
       <div className={styles.biggrid}>
         <div className={styles.left}>
           <div className={styles.imagetopcontainer}>
            <div className={styles.imagecontainer} >
              <img className={styles.image} src={currentImage}></img>

            </div>
           </div>
            <div className={styles.subpics}>
              {/* TO DO ADD SUB PICS */}
           </div>
         </div>
         <div className={styles.right}>
          <div className={styles.title}>{json.title}</div>
          <div className={styles.price}>${json.price}</div>
          <div className={styles.condition}>Condition: Used(normal wear)</div>
          <div className={styles.condition}>Category: {json.category.name}</div>
          <button className={styles.buybtn}>Buy now</button>
          <div className={styles.btncontainer}>
            <button className={styles.askbtn}>Ask</button>
            <button className={styles.offerbtn}>Make offer</button>
          </div>
         </div>
       </div>
    </div>
  )
  
}

export default ViewItem
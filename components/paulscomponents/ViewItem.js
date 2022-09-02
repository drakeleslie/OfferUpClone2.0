import { useRouter } from "next/router"
import styles from "../../styles/ViewItem.module.css"
import { useState }from "react"
import Footer from "../mattscomponents/Footer"

const ViewItem = () => {
  
  const router = useRouter()
  const data = router.query;
  const json = JSON.parse(data.item)
  // setCurrentItem(json)
  console.log(json)
  const [currentImage, setCurrentImage] = useState(json.images[1])
  const [subImage, setSubImage] = useState(json.images[0])
  const [subImage1, setSubImage1] = useState(json.images[2])
  const handleClick = (e) => {
     setSubImage(currentImage)
     setCurrentImage(e.target.dataset.image)
  }
  const handleClick1 = (e) => {
    setSubImage1(currentImage)
    setCurrentImage(e.target.dataset.image)

 }
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
               <img src={subImage} data-image={subImage} className={styles.subimages} onClick={handleClick}></img>
               <img src={subImage1} data-image={subImage1} className={styles.subimages} onClick={handleClick1}></img>
           </div>
           <div className={styles.desccontainer}>
             <h1 className={styles.desc}>Description</h1>
             <p className={styles.para}>{json.description}</p>
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
          <div className={styles.savecontainer}> 
            <button className={styles.savebtn}><i className="fa-regular fa-heart"></i>Save</button>
          </div>
         </div>
       </div>
    </div>
  )
  
}

export default ViewItem
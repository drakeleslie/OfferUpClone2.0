import { useRouter } from "next/router";
import styles from "../../../styles/ViewItem.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const ViewItem = () => {
  const [currentImage, setCurrentImage] = useState("");
  const [subImage, setSubImage] = useState("");
  const [subImage1, setSubImage1] = useState("");
  const [json, setJson] = useState({});
  const [dataObj, setDataObj] = useState({});
  const [saved, setSaved] = useState(false);
  const [seller, setSeller] = useState({});
  const router = useRouter();
  useEffect(() => {
    const data = router.query;
    const json = JSON.parse(data.item);
    setDataObj(JSON.parse(localStorage.getItem("data")));
    if (json.imagetwo) {
      setCurrentImage(json.image);
      setSubImage(json.imagetwo);
      setSubImage1(json.imagethree);
    } else {
      setCurrentImage(json.image);
      setSubImage(json.image);
      setSubImage1(json.image);
    }
    setJson(json);
    async function fetchData() {
      await axios({
        method: "get",
        url: "/api/userPage",
        params: {
          user_id: json.user_id,
        },
      }).then((res) => setSeller(res.data[0]));
    }
    fetchData();
  }, []);

  const handleSave = (event) => {
    event.target.innerHTML = "Added to Saved!";
    if (dataObj) {
      if (saved == true) {

      } else {
        console.log(json.posted_item_id);
        axios
          .post(`/api/saved`, {
            user_id: dataObj.user_id,
            title: json.title,
            price: json.price,
            category: json.category,
            description: json.description,
            image: currentImage,
            posted_item_id: json.posted_item_id,
          })
          .then((res) => {});
        setSaved(true);
      }
    } else {
      router.push("/login");
      console.log(event.target);
    }
  };

  const handleClick = (e) => {
    setSubImage(currentImage);
    setCurrentImage(e.target.dataset.image);
  };
  const handleClick1 = (e) => {
    setSubImage1(currentImage)
    setCurrentImage(e.target.dataset.image)
 }
return (
    <div>
      <div className={styles.biggrid}>
        <div className={styles.left}>
          <div className={styles.imagetopcontainer}>
            <div className={styles.imagecontainer}>
              <img
                alt={"picture"}
                className={styles.image}
                src={currentImage}
              ></img>
            </div>
          </div>
          <div className={styles.subpics}>
            <img
              alt={"picture"}
              src={subImage}
              data-image={subImage}
              className={styles.subimages}
              onClick={handleClick}
            ></img>
            <img
              alt={"picture"}
              src={subImage1}
              data-image={subImage1}
              className={styles.subimages}
              onClick={handleClick1}
            ></img>
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
          <div className={styles.condition}>Category: {json.category}</div>
          <button className={styles.buybtn}>Buy now</button>
          <div className={styles.btncontainer}>
            <button className={styles.askbtn}>Ask</button>
            <button className={styles.offerbtn}>Make offer</button>
          </div>
          <div className={styles.savecontainer}>
            <button onClick={handleSave} className={styles.savebtn}>
              <i className="fa-regular fa-heart"></i>Save
            </button>
          </div>
          <div className={styles.user}>
            <img className={styles.sellerpic} src={seller.picture}></img>
            <div className={styles.sellerinfo}>
              <h6 className={styles.sellerusername}>{seller.username}</h6>
              <p className={styles.sellerdate}>
                Member since: {seller.account_age}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )  
}
export default ViewItem


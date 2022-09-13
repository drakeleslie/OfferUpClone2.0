import { useRouter } from "next/router";
import styles from "../../styles/ViewItem.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const UserItemView = () => {
  const [currentImage, setCurrentImage] = useState("");
  const [subImage, setSubImage] = useState("");
  const [subImage1, setSubImage1] = useState("");
  const [json, setJson] = useState("");
  const [dataObj, setDataObj] = useState({});
  const router = useRouter();

  useEffect(() => {
    const data = router.query;
    const json = JSON.parse(data.item);
    setCurrentImage(json.image);
    setSubImage(json.imagetwo);
    setSubImage1(json.imagethree);
    setJson(json);
    setDataObj(JSON.parse(localStorage.getItem("data")));
  }, []);

  const handleClick = (e) => {
    setSubImage(currentImage);
    setCurrentImage(e.target.dataset.image);
  };
  const handleClick1 = (e) => {
    setSubImage1(currentImage);
    setCurrentImage(e.target.dataset.image);
  };
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
        </div>
      </div>
    </div>
  );
};

export default UserItemView;

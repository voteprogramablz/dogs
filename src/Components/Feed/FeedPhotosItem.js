import React from "react";

import styles from "./FeedPhotosItem.module.css";

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo);
  }
  return (
    <li className={styles.photo} onClick={handleClick}>
      <span></span>
      <img
        src={"https://images-na.ssl-images-amazon.com/images/I/71Z9NXReLCL.jpg"}
        alt={photo.title}
      />
      <span className={styles.visualizacao}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;

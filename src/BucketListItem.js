import React from "react";
import style from "./BucketListItem.module.css";

const BucketListItem = ({ bucket, id, onRemoveBucket }) => {
  return (
    <li className={style.ListItem}>
      <span>{bucket.fields.title}</span>
      <button
        className={style.button}
        type="button"
        onClick={() => onRemoveBucket(id)}
      >
        X
      </button>
    </li>
  );
};

export default BucketListItem;

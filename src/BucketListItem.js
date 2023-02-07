import React from "react";
import style from "./BucketListItem.module.css";

const BucketListItem = ({ bucket, id, onRemoveBucket }) => {
  return (
    <li className={style.ListItem}>
      <span>{bucket.fields.Title}</span>
      <button type="button" onClick={() => onRemoveBucket(id)}>
        Remove
      </button>
    </li>
  );
};

export default BucketListItem;

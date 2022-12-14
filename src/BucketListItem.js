import React from "react";

const BucketListItem = ({ id, title, onRemoveBucket }) => {
  return (
    <li>
      <span>{title}</span>
      <button type="button" onClick={() => onRemoveBucket(id)}>
        Remove
      </button>
    </li>
  );
};

export default BucketListItem;

import React from "react";

const BucketListItem = ({ title, id, onRemoveBucket }) => {
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

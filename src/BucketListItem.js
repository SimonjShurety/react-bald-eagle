import React from "react";

const BucketListItem = ({ bucket, id, onRemoveBucket }) => {
  return (
    <li>
      <span>{bucket.fields.Title}</span>
      <button type="button" onClick={() => onRemoveBucket(id)}>
        Remove
      </button>
    </li>
  );
};

export default BucketListItem;

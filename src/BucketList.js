import React from "react";
import BucketListItem from "./BucketListItem";

const BucketList = ({ bucketList, onRemoveBucket }) => {
  return (
    <ul>
      {bucketList.map((bucket) => (
        <BucketListItem
          key={bucket.id}
          id={bucket.id}
          title={bucket.fields.Title}
          onRemoveBucket={onRemoveBucket}
        />
      ))}
    </ul>
  );
};

export default BucketList;

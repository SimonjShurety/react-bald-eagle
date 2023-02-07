import React from "react";
import BucketListItem from "./BucketListItem";

const BucketList = ({ bucketList, onRemoveBucket }) => {
  return (
    <ul>
      {bucketList.map((item) => (
        <BucketListItem
          key={item.id}
          id={item.id}
          bucket={item}
          onRemoveBucket={onRemoveBucket}
        />
      ))}
    </ul>
  );
};

export default BucketList;

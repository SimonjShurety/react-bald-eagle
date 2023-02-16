import React from "react";
import BucketListItem from "./BucketListItem";

const BucketList = ({ bucketList, onRemoveBucket }) => {
  return (
    <>
      {bucketList.map((item) => (
        <BucketListItem
          key={item.id}
          id={item.id}
          bucket={item}
          onRemoveBucket={onRemoveBucket}
        />
      ))}
    </>
  );
};

export default BucketList;

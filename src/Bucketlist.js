import React from "react";
import BucketListItem from "./BucketListItem";

const BucketList = ({ bucketList }) => {
  return (
    <ul>
      {bucketList.map((item) => {
        return <BucketListItem key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default BucketList;

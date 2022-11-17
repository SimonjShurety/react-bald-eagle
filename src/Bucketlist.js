import React from "react";
import BucketListItem from "./BucketListItem";

const BucketList = (props) => {
  return (
    <ul>
      {props.bucketList.map(function (item) {
        return <BucketListItem key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default BucketList;

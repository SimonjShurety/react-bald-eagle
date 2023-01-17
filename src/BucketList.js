import React from "react";
import BucketListItem from "./BucketListItem";

const BucketList = (props) => {
  return (
    <ul>
      {props.bucketList.map((item) => (
        <BucketListItem
          key={item.id}
          id={item.id}
          title={item.fields.Title}
          onRemoveBucket={props.onRemoveBucket}
        />
      ))}
    </ul>
  );
};

export default BucketList;

import React from "react";

const InputWithLabel = (props) => {
  return (
    <>
      <label htmlFor="BucketListTitle">Title</label>
      <input
        type="text"
        id="BucketListTitle"
        name="title"
        value={props.bucketTitle}
        onChange={props.handleTitleChange}
      />
    </>
  );
};

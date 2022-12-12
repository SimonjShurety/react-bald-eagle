import React from "react";

const InputWithLabel = ({ bucketTitle, handleTitleChange }) => {
  return (
    <>
      <label htmlFor="BucketListTitle">Title</label>
      <input
        type="text"
        id="BucketListTitle"
        name="title"
        value={bucketTitle}
        onChange={handleTitleChange}
      />
    </>
  );
};

export default InputWithLabel;

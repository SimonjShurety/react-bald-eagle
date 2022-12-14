import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";

function AddBucketListForm({ onAddBucket }) {
  const [bucketTitle, setBucketTitle] = useState("");

  function handleTitleChange(event) {
    const newBucketTitle = event.target.value;
    setBucketTitle(newBucketTitle);
  }

  function handleAddBucket(event) {
    event.preventDefault();

    const bucketObj = {
      title: bucketTitle,
      id: Date.now(),
    };

    onAddBucket(bucketObj);
    setBucketTitle("");
  }

  return (
    <form onSubmit={handleAddBucket}>
      <InputWithLabel
        bucketTitle={bucketTitle}
        handleTitleChange={handleTitleChange}
        autofocus
      >
        <span>
          <strong>Title </strong>
        </span>
      </InputWithLabel>

      <input type="submit" value="Add" />
    </form>
  );
}

export default AddBucketListForm;

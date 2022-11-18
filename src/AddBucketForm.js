import React, { useState } from "react";

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
      <label htmlFor="BucketListTitle">Title</label>
      <input
        type="text"
        id="BucketListTitle"
        name="title"
        value={bucketTitle}
        onChange={handleTitleChange}
      />

      <input type="submit" value="Add" />
    </form>
  );
}

export default AddBucketListForm;

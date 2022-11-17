import React, { useState } from "react";

function AddBucketListForm(props) {
  const [bucketTitle, setBucketTitle] = useState("");

  function handleTitleChange(event) {
    const newBucketTitle = event.target.value;
    console.log(newBucketTitle);
    setBucketTitle(newBucketTitle);
  }

  function handleAddBucket(event) {
    event.preventDefault();
    props.onAddBucket({
      title: bucketTitle,
      id: Date.now(),
    });
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

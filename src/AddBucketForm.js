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
    <form className="flex justify-center" onSubmit={handleAddBucket}>
      <InputWithLabel
        bucketTitle={bucketTitle}
        handleTitleChange={handleTitleChange}
        autofocus
      >
        <span className="flex justify-center"></span>
      </InputWithLabel>

      <input
        type="submit"
        value="+"
        class="text-5xl text-orange-100 placeholder-orange-400 py-2 pr-5 pl-4 bg-orange-500 rounded-r-full"
      />
    </form>
  );
}

export default AddBucketListForm;

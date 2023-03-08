import { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import style from "./AddBucketForm.module.css";
import PropTypes from "prop-types";

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
      ></InputWithLabel>

      <input className={style.submitButton} type="submit" value="Add" />
    </form>
  );
}

AddBucketListForm.propTypes = { onAddBucket: PropTypes.func };

export default AddBucketListForm;

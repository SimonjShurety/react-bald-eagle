import React, { useRef, useEffect } from "react";

const InputWithLabel = ({ bucketTitle, handleTitleChange, children }) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, [bucketTitle]);
  return (
    <>
      <label htmlFor="BucketTitle">{children}</label>
      <input
        type="text"
        id="BucketTitle"
        name="title"
        value={bucketTitle}
        onChange={handleTitleChange}
        ref={inputRef}
      />
    </>
  );
};

export default InputWithLabel;

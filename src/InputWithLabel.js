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
        class="text-xl text-orange-800 placeholder-orange-400 py-2 px-5 bg-orange-100 rounded-l-full outline-orange-300"
        type="text"
        id="BucketTitle"
        name="title"
        placeholder="Enter Activity"
        value={bucketTitle}
        onChange={handleTitleChange}
        ref={inputRef}
      />
    </>
  );
};

export default InputWithLabel;

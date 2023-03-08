import { useRef, useEffect } from "react";

import PropTypes from "prop-types";

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
        placeholder="Enter new bucket list activity here"
      />
    </>
  );
};

InputWithLabel.propTypes = { handleTitleChange: PropTypes.func };

export default InputWithLabel;

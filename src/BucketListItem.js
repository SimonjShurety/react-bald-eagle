import React from "react";

const BucketListItem = ({ bucket, id, onRemoveBucket }) => {
  console.log("line 4", bucket);
  return (
    <tr>
      <td>
        <span>{bucket.fields?.title}</span>
      </td>
      <td>
        <button
          class="text-xl text-red-500  py-2 pr-5 pl-4 bg-orange-100 rounded-r-full"
          type="button"
          onClick={() => onRemoveBucket(id)}
        >
          X
        </button>
      </td>
    </tr>
  );
};

export default BucketListItem;

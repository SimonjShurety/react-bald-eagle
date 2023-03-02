import BucketListItem from "./BucketListItem";

import PropTypes from "prop-types";

const BucketList = ({ bucketList, onRemoveBucket }) => {
  return (
    <ul>
      {bucketList.map((item) => (
        <BucketListItem
          key={item.id}
          id={item.id}
          bucket={item}
          onRemoveBucket={onRemoveBucket}
        />
      ))}
    </ul>
  );
};

BucketList.propTypes = { onRemoveBucket: PropTypes.func };

export default BucketList;

import BucketListItem from "./BucketListItem";
import styles from "./BucketList.module.css";

import PropTypes from "prop-types";

const BucketList = ({ bucketList, onRemoveBucket }) => {
  return (
    <div className={styles.BucketList}>
      {bucketList.map((item) => (
        <BucketListItem
          key={item.id}
          id={item.id}
          bucket={item}
          onRemoveBucket={onRemoveBucket}
        />
      ))}
    </div>
  );
};

BucketList.propTypes = { onRemoveBucket: PropTypes.func };

export default BucketList;

import styles from "./BucketListItem.module.css";
import PropTypes from "prop-types";

const BucketListItem = ({ bucket, id, onRemoveBucket }) => {
  return (
    <div className={styles.ListItem}>
      <span>{bucket.fields.title}</span>
      <button
        className={styles.button}
        type="button"
        onClick={() => onRemoveBucket(id)}
      >
        X
      </button>
    </div>
  );
};

BucketListItem.propTypes = { onRemoveBucket: PropTypes.func };

export default BucketListItem;

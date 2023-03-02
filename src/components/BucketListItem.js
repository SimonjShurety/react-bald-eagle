import style from "./BucketListItem.module.css";
import PropTypes from "prop-types";

const BucketListItem = ({ bucket, id, onRemoveBucket }) => {
  return (
    <li className={style.ListItem}>
      <span>{bucket.fields.title}</span>
      <button
        className={style.button}
        type="button"
        onClick={() => onRemoveBucket(id)}
      >
        X
      </button>
    </li>
  );
};

BucketListItem.propTypes = { onRemoveBucket: PropTypes.func };

export default BucketListItem;

import React from "react";
import AddBucketForm from "./AddBucketForm";
import BucketList from "./BucketList";
import { useState } from "react";

function App() {
  const [bucketList, setBucketList] = useState([]);

  function addBucket(newBucket) {
    setBucketList([...bucketList, newBucket]);
  }

  return (
    <div>
      <h1>Bucket List</h1>
      <AddBucketForm onAddBucket={addBucket} />
      <BucketList bucketList={bucketList} />
    </div>
  );
}

export default App;

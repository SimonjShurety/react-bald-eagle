import React from "react";
import AddBucketForm from "./AddBucketForm";
import BucketList from "./BucketList";
import { useState, useEffect } from "react";

const App = () => {
  const [bucketList, setBucketList] = useState([]);

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => resolve({ data: { bucketList: bucketList } }), 2000);
    }).then((result) => {
      console.log(result);
      setBucketList(result.data.bucketList);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("savedBucketList", JSON.stringify(bucketList));
  }, [bucketList]);

  const addBucket = (newBucket) => {
    setBucketList([...bucketList, newBucket]);
  };

  const removeBucket = (id) => {
    const newBucket = bucketList.filter((bucket) => id !== bucket.id);
    setBucketList(newBucket);
  };

  return (
    <>
      <h1>Bucket List</h1>
      <hr />

      <AddBucketForm onAddBucket={addBucket} />

      <BucketList bucketList={bucketList} onRemoveBucket={removeBucket} />
    </>
  );
};

export default App;

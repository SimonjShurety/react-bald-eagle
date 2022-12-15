import React from "react";
import AddBucketForm from "./AddBucketForm";
import BucketList from "./BucketList";
import { useState, useEffect } from "react";

const App = () => {
  const [bucketList, setBucketList] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(
        () =>
          resolve({
            data: {
              bucketList: JSON.parse(localStorage.getItem("savedBucketList")),
            },
          }),
        2000
      );
    }).then((result) => {
      console.log(result);
      setBucketList(result.data.bucketList);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (isLoading === false) {
      localStorage.setItem("savedBucketList", JSON.stringify(bucketList));
    }
    // add isloading dependency??
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
      {isLoading ? (
        <strong>
          <p> Please wait, loading...</p>
        </strong>
      ) : (
        <BucketList bucketList={bucketList} onRemoveBucket={removeBucket} />
      )}
    </>
  );
};

export default App;

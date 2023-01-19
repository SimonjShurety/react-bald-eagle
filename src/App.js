import React from "react";
import AddBucketForm from "./AddBucketForm";
import BucketList from "./BucketList";
import { useState, useEffect } from "react";

const App = () => {
  const [bucketList, setBucketList] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        setBucketList(result.records || []);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedBucketList", JSON.stringify(bucketList));
    }
  }, [bucketList, isLoading]);

  const addBucket = (newBucket) => {
    setBucketList((prevBucketList) => [...prevBucketList, newBucket]);
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
      <hr />
    </>
  );
};

export default App;

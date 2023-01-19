import React from "react";
import AddBucketForm from "./AddBucketForm";
import BucketList from "./BucketList";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <h1>Bucket List</h1>
              <hr />
              <AddBucketForm onAddBucket={addBucket} />
              {isLoading ? (
                <strong>
                  <p> Please wait, loading...</p>
                </strong>
              ) : (
                <>
                  <BucketList
                    bucketList={bucketList}
                    onRemoveBucket={removeBucket}
                  />
                </>
              )}
              <hr />
            </>
          }
        ></Route>

        <Route
          path="/new"
          element={
            <>
              <h1>New Bucket List</h1>
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

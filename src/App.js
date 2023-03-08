import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.module.css";

import AddBucketForm from "./components/AddBucketForm";
import BucketList from "./components/BucketList";

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
        result.records.sort(function (objectA, objectB) {
          console.log(result.records);
          return objectA.fields.title < objectB.fields.title ? -1 : 1;
        });

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
        {/* <div className={styles.container}> */}
        <Route
          exact
          path="/"
          element={
            <>
              <h1>Bucket List</h1>

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
        {/* </div> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;

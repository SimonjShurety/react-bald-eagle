import { useState, useEffect } from "react";
import AddBucketForm from "./AddBucketForm";
import BucketList from "./BucketList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

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
  console.log(bucketList);
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
            <div className="flex flex-col bg-orange-200 flex justify-center items-center h-screen">
              <h1 class="text-3xl text-center font-bold mb-3 uppercase">
                Bucket List
              </h1>

              <AddBucketForm onAddBucket={addBucket} />
              {isLoading ? (
                <strong>
                  <p> Please wait, loading...</p>
                </strong>
              ) : (
                <div class="max-h-80 overflow-y-auto">
                  <table class="table w-full">
                    <div className="bg-gray-100 mt-5 p-5 rounded-xl shadow-lg text-gray-700">
                      <h1 className="font-bold text-xl italic block mb-0 leading-none">
                        List:
                      </h1>
                      <thead>
                        <tr>
                          <th class="text-center px-1 py-2 bg-orange-500 text-orange-100 rounded-tl-xl">
                            #
                          </th>
                          <th class="text-left px-1 py-2 bg-orange-500 text-orange-100">
                            Details
                          </th>
                          <th class="px-1 py-2 bg-orange-500 text-orange-100 rounded-tr-xl">
                            Action
                          </th>
                        </tr>
                      </thead>

                      {/* <TodoStats stats={this.calculateStats()} /> */}
                      <div className="max-h-80 overflow-y-auto">
                        <BucketList
                          bucketList={bucketList}
                          onRemoveBucket={removeBucket}
                          // toggleBucket={toggleBucket}
                        />
                      </div>
                    </div>
                  </table>
                </div>
              )}
            </div>
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

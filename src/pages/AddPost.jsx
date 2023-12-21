// import React from "react";
import { Container, PostForm } from "../components";

function AddPost() {
  return (
    <div className="py-8">
      <Container>
        <PostForm />
      </Container>
    </div>
  );
}

export default AddPost;


/*
import React, { useState, useEffect } from "react";
import { Container, PostForm } from "../components";
import ClipLoader from "react-spinners/ClipLoader";

function AddPost() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., data fetching)
    const fetchData = async () => {
      // Your asynchronous operation goes here
      // For demonstration purposes, we use setTimeout to simulate loading
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    fetchData();
  }, []);

  return (
    <div className="py-8">
      <Container loading={loading}>
        {loading ? (
          // Loader component while loading
          <div className="flex justify-center items-center h-screen">
            <ClipLoader color="#4A90E2" loading={loading} size={50} />
          </div>
        ) : (
          // Actual content when loading is complete
          <PostForm />
        )}
      </Container>
    </div>
  );
}

export default AddPost;

*/
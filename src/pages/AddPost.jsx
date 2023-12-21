import { useState, useEffect } from "react";
import { Container, PostForm } from "../components";
import ClipLoader from "react-spinners/ClipLoader";

function AddPost() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    fetchData();
  }, []);

  return (
    <div className="py-8">
      <Container loading={loading}>
        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <ClipLoader color="#4A90E2" loading={loading} size={50} />
          </div>
        ) : (
          <PostForm />
        )}
      </Container>
    </div>
  );
}

export default AddPost;

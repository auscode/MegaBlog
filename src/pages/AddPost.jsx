import { Container, PostForm } from "../components";
import { useState, useEffect } from "react";

function AddPost() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const asyncOperation = async () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000); 
    };

    asyncOperation();
  }, []); 

  return (
    <Container loading={isLoading}>
      <div className="py-8">
        {/* Your actual content goes here */}
        <PostForm />
      </div>
    </Container>
  );
}

export default AddPost;

import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";
import ClipLoader from "react-spinners/ClipLoader";

function AllPosts() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
      setLoading(false);
    });
  }, []);

  return (
    <div className="w-full py-8">
      <Container loading={loading}>
        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <ClipLoader color="#4A90E2" loading={loading} size={70} />
          </div>
        ) : (
          <div className="flex flex-wrap">
            {posts.map((post) => (
              <div key={post.$id} className="p-2 w-1/4">
                <PostCard {...post} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}

export default AllPosts;

import { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setTimeout(async () => {
          const fetchedPosts = await appwriteService.getPosts([]);
          if (fetchedPosts) {
            setPosts(fetchedPosts.documents);
          }
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Container loading={loading}>
      <div className="w-full py-8">
        <Container>
          <div className="lg:flex md:flex lg:flex-wrap md:flex-wrap">
            {posts.map((post) => (
              <div key={post.$id} className="p-2 lg:w-1/4 md:w-1/2">
                <PostCard {...post} />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </Container>
  );
}

export default AllPosts;

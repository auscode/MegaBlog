import { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    appwriteService.getPosts().then((fetchedPosts) => {
      if (fetchedPosts) {
        setPosts(fetchedPosts.documents.reverse());
        setIsLoading(false); 
      }
    });
  }, []);

  if (isLoading) {
    return (
      <Container loading={isLoading}>
        <div className="w-full py-8 mt-4 text-center">
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Loading posts...
              </h1>
            </div>
          </div>
        </div>
      </Container>
    );
  }

  if (posts.length === 0) {
    return (
      <Container loading={false}>
        <div className="w-full py-8 mt-4 text-center">
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Login to read posts
              </h1>
            </div>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <Container loading={false}>
      <div className="w-full py-8">
        <div className="px-2 font-bold mb-2">Recent blog posts</div>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Home;

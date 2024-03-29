import { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import HeroSection from "./HeroSection";
// import ClipLoader from "react-spinners/ClipLoader";

function Home() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents.reverse());
      }
      setLoading(false);
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container loading={loading}>
          <HeroSection/>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Container loading={loading}>
        <div className="px-2 font-bold mb-2">Recent blog posts</div>
        <div className="lg:flex md:flex lg:flex-wrap md:flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 lg:w-1/4 md:w-1/2">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;

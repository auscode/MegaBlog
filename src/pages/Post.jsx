import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      if (slug) {
        await appwriteService.getPost(slug).then((retrievedPost) => {
          if (retrievedPost) setPost(retrievedPost);
          else navigate("/");
        });
      } else navigate("/");

      setIsLoading(false);
    };

    fetchPost();
  }, [slug, navigate]);

  const deletePost = () => {
    setIsLoading(true);
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return (
    <Container loading={isLoading}>
      {post && (
        <div className="py-8">
          <Container>
            <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
              <img
                src={appwriteService.getFilePreview(post.featuredImage)}
                alt={post.title}
                className="rounded-xl"
              />

              {isAuthor && (
                <div className="absolute right-6 top-6">
                  <Link to={`/edit-post/${post.$id}`}>
                    <Button bgColor="bg-green-500" className="mr-3">
                      Edit
                    </Button>
                  </Link>
                  <Button bgColor="bg-red-500" onClick={deletePost}>
                    Delete
                  </Button>
                </div>
              )}
            </div>
            <div className="w-full mb-6">
              <h1 className="text-2xl font-bold">{post.title}</h1>
            </div>
            <div className="browser-css">{parse(post.content)}</div>
          </Container>
        </div>
      )}
    </Container>
  );
}

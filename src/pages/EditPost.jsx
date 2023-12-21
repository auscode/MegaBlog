import { useEffect, useState } from "react";
import { Container, PostForm } from "../components";
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (slug) {
          const post = await appwriteService.getPost(slug);
          setPost(post);
        } else {
          navigate("/");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [slug, navigate]);

  return (
    <Container loading={isLoading}>
      <div className="py-8">
        {post && (
          <Container>
            <PostForm post={post} />
          </Container>
        )}
      </div>
    </Container>
  );
}

export default EditPost;

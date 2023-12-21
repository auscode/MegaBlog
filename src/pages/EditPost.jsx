import React, { useEffect, useState } from "react";
import { Container, PostForm } from "../components";
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

function EditPost() {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);

    if (slug) {
      appwriteService
        .getPost(slug)
        .then((post) => {
          if (post) {
            setPost(post);
          } else {
            navigate("/");
          }
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
      navigate("/");
    }
  }, [slug, navigate]);

  return loading ? (
    // Loader component while loading
    <div className="flex justify-center items-center h-screen">
      <ClipLoader color="#4A90E2" loading={loading} size={50} />
    </div>
  ) : (
    post && (
      <div className="py-8">
        <Container>
          <PostForm post={post} />
        </Container>
      </div>
    )
  );
}

export default EditPost;

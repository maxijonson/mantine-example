import { Container, Loader, Text, Title } from "@mantine/core";
import React from "react";
import { Navigate, useParams } from "react-router-dom";
import usePosts from "../hooks/usePosts";
import { Post } from "../utils/types";

interface PostPageProps {}

export default () => {
  const [loading, setLoading] = React.useState(false);
  const [post, setPost] = React.useState<Post | null>(null);
  const { getPost } = usePosts();
  const params = useParams();

  const id = Number(params.id);

  React.useEffect(() => {
    if (isNaN(id)) {
      return;
    }

    const fetchPost = async () => {
      setLoading(true);
      const post = await getPost(id);
      setPost(post);
      setLoading(false);
    };
    fetchPost();

    return () => {
      setLoading(false);
    };
  }, []);

  if (isNaN(id)) {
    return <Navigate to="/posts" />;
  }
  if (!post || loading) {
    return <Loader />;
  }

  return (
    <Container>
      <Title>{post.title}</Title>
      <Title order={3}>
        Post #{post.id} | By User #{post.userId}
      </Title>
      <Text>{post.body}</Text>
    </Container>
  );
};

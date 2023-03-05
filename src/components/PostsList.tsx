import { Card, Container, Loader, Text, Title } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";
import usePosts from "../hooks/usePosts";
import { Post } from "../utils/types";

export default () => {
  const [loading, setLoading] = React.useState(false);
  const [posts, setPosts] = React.useState<Post[]>([]);
  const { getPosts } = usePosts();

  React.useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const posts = await getPosts();
      setPosts(posts);
      setLoading(false);
    };
    fetchPosts();

    return () => {
      setLoading(false);
    };
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <Title>Posts</Title>
      {posts.map((post) => (
        <Card
          key={post.id}
          component={Link}
          to={`/posts/${post.id}`}
          withBorder
          mb="md"
        >
          <Title order={3}>{post.title}</Title>
          <Title order={1}>By User #{post.userId}</Title>
          <Text>{post.body}</Text>
        </Card>
      ))}
    </Container>
  );
};

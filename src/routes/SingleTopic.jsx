import { useParams } from "react-router";
import ArticleList from "../components/ArticleList";
import { Typography } from "@mui/material";

export default function SingleTopic() {
  const { topic_slug } = useParams();

  return (
    <>
      <Typography variant="h5" as="h2" sx={{ mb: 2 }}>
        Articles in {topic_slug}
      </Typography>
      <ArticleList topic={topic_slug} />
    </>
  );
}
